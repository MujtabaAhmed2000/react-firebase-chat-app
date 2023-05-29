'use client'

import { useState } from "react"
import { auth, db } from "@/firebase"
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage = () => {
    const [message, setMessage] = useState("")

    const send = async () => {
        if (message.trim() !== "") {
            setMessage("")
            const { uid, displayName } = auth.currentUser

            await addDoc(collection(db, "messages"), {
                text: message,
                name: displayName,
                createdAt: serverTimestamp(),
                uid,
            })
            setMessage("")
        }
    }

    return (
        <div className="w-full flex flex-row h-10 bg-slate-500 rounded-lg overflow-hidden">
            <input
                className="h-full w-[90%] px-4 py-2"
                onChange={(e) => {
                    setMessage(e.target.value)
                }}
                value={message}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        send()
                    }
                }}
                placeholder="Type here"
            />
            <button
                className="h-full w-[10%] bg-slate-900 text-white font-semibold"
                onClick={() => {
                    send()
                }}
            >
                SEND
            </button>
        </div>
    )
}

export default SendMessage