'use client'

import { auth } from "@/firebase"
import { useAuthState } from "react-firebase-hooks/auth"

const Message = ({ message }) => {
    const [user] = useAuthState(auth)

    let { name, text, uid, createdAt } = message

    console.log(message)

    return (
        <div className={[uid === user.uid ? "text-right self-end" : "text-left self-start"] + " flex flex-col space-y-1 w-fit bg-white rounded-md py-2 px-6"}>
            <p className="text-sm">
                {name}
            </p>
            <p>
                {text}
            </p>
            <p className="text-xs">
                {new Date(createdAt?.seconds * 1000 + createdAt?.nanoseconds / 1000000).toLocaleTimeString()}
            </p>
        </div>
    )
}

export default Message