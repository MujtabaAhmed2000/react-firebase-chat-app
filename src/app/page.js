'use client'

import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { auth } from "../firebase";
import Chat from "@/components/Chat/Chat";

export default function Home() {
    const [user] = useAuthState(auth)

    const googleSignIn = async () => {
        const provider = new GoogleAuthProvider()
        await signInWithPopup(auth, provider)
    }

    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            {user ? (
                <Chat />
            ) : (
                <div className='p-8 bg-sky-200 rounded-lg flex flex-col items-center space-y-4'>
                    <p className="text-3xl">
                        Chat App
                    </p>
                    <p
                        className="underline text-lg cursor-pointer"
                        onClick={
                            () => {
                                googleSignIn()
                            }
                        }
                    >
                        Sign in with Google
                    </p>
                </div >
            )}
        </div >
    )
}

{/* <>
<p>
    Welcome, {user.displayName}
</p>
<p
    className="underline cursor-pointer"
    onClick={() => {
        signOut()
    }}
>
    Sign out
</p>
</> */}