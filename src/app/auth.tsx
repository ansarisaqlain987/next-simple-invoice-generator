"use client"

import { useEffect } from "react"
import { redirect } from "next/navigation";
import { signInAction } from "./actions/signIn";


export default function AuthComponent({ auth }: { auth: boolean }) {
    useEffect(() => {
        if (!auth) {
            signInAction();
        }else {
            redirect('/dashboard')
        }
    }, [auth]);

    return <></>
}