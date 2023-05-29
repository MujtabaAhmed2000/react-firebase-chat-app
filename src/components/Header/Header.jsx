'use client'

import { auth } from "@/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import Button from "@/components/Button/Button"

const Header = () => {
    const [user] = useAuthState(auth)

    const signOut = () => {
        auth.signOut()
    }

    return (
        <div className="w-full flex flex-row items-center p-2 justify-between rounded-md h-fit bg-blue-950">
            <p className="text-white font-bold">
                Welcome, {user?.displayName}
            </p>
            <Button
                onClick={() => {
                    signOut()
                }}
            >
                Sign Out
            </Button>
        </div>
    )
}

export default Header