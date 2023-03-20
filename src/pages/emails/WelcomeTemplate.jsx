import Link from 'next/link';

const WelcomeEmail = (user) => {
  const ObjectID = require('mongodb').ObjectId
  const id = new ObjectID(user._id)
  return (
    <div style={{ fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif', color: '#141414' }}>
      <div style={{ padding: '2rem' }}>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
          Hi {user.fullname},
        </p>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
          We are excited to welcome you to Adomovies.com! With Adomovies.com, you can easily browse and watch your favorite movies and TV shows from the comfort of your own home.
        </p>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
          To get started, simply click the link below to validate your account:
        </p>
        <div style={{ backgroundColor: '#33cabb', borderRadius: '4px', display: 'inline-block', padding: '1rem 2rem' }}>
          <Link style={{ color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: '1.25rem' }} href={`http://localhost:3000/verify/${id}/${user.verified_key}`}>
            Validate Account
          </Link>
        </div>
        <p style={{ fontSize: '1.25rem', marginTop: '2rem' }}>
          Thanks for joining us!
        </p>
        <p style={{ fontSize: '1.25rem', marginBottom: 0 }}>
          Adomovies.com Team
        </p>
      </div>
    </div>
  );
};

export default WelcomeEmail;
