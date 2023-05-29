'use client'

import { useEffect, useState, useRef } from "react"
import {
    query,
    collection,
    orderBy,
    onSnapshot,
    limit,
} from "firebase/firestore"
import { db } from "@/firebase"
import Message from "./Message"

const ChatMessages = () => {
    const [messages, setMessages] = useState([])
    const scroll = useRef()

    useEffect(() => {
        scroll.current.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt"),
            limit(20)
        )

        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            let temp = []
            QuerySnapshot.forEach((doc) => {
                temp.push({ ...doc.data(), id: doc.id })
            })
            setMessages(temp)
            scroll.current.scrollIntoView({ behavior: "smooth" })
        })

        return () => unsubscribe
    }, [])

    return (
        <>
            {messages.map((message) => {
                const { id } = message

                return (
                    <Message
                        key={id}
                        message={message}
                    />
                )
            })}
            <div
                ref={scroll}
            />
        </>
    )
}

export default ChatMessages

