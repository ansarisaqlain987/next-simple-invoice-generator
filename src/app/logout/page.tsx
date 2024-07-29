'use client'
import { useEffect } from "react";
import { signOutAction } from "../actions/signOut";

const LogOut = () => {
    useEffect(() => {
        signOutAction()
    }, [])
    return <></>
}

export default LogOut