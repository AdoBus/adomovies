import React from "react";
import AccountPasswordForm from "./AccountPasswordForm";
import AccountPasswordHeader from "./AccountPasswordHeader";
import WhereYouSignedIn from "./WhereYouSignedIn";


export default function AccountPassword() {
    return (
        <>
            <AccountPasswordHeader />
            <AccountPasswordForm />
            <WhereYouSignedIn/>
        </>
    )
}