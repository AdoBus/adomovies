import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoClient } from 'mongodb';
import { compare } from 'bcryptjs';

export default NextAuth({
    //Configure JWT
    session: {
        jwt: true,
    },
    //Specify Provider
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                //Connect to DB
                const client = await MongoClient.connect(
                    process.env.mongodb_url,
                    { useNewUrlParser: true }
                );

                //Get all the users
                const users = await client.db().collection('users');

                //Find user with the email  
                const result = await users.findOne({
                    email: credentials.email,
                });

                //Not found - send error res
                if (!result) {
                    client.close();
                    throw new Error('Invalid Email Or Password!');
                }

                if (result.verified === false) {
                    client.close();
                    throw new Error('Please verify your email!');
                }

                //Check hased password with DB password
                const checkPassword = await compare(credentials.password, result.password);

                //Incorrect password - send response
                if (!checkPassword) {
                    client.close();
                    throw new Error('Invalid Email Or Password!');
                }

                //Else send success response
                client.close();
                return result
            },
        }),
    ],
    pages: {
        signIn: '/auth/sign-in'
    },
    jwt: {
        encryption: false,
        secret: process.env.jwt_secret,
    },
    callbacks: {
        async jwt({ token, user, account }) {
            if (account) {
                token.user = user
            }
            return token;
        },
        async session({ session, token }) {
            const user = token.user
            // call url to get user info
            const response = await fetch('http://localhost:3000/api/auth/user-info', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: user._id,
                }),
            });

            const data = await response.json();
            session.user = data.user;

            return { ...session };
        },
    },
});