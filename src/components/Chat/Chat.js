import Header from "../Header/Header"
import ChatMessages from "./ChatMessages"
import SendMessage from "./SendMessage"

const Chat = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="w-[90%] h-[90%] flex flex-col bg-sky-500 rounded-md p-2">
                <Header />
                <div className="flex flex-1 flex-col space-y-2 p-2 my-2 overflow-y-auto">
                    <ChatMessages />
                </div>
                <div className="mt-auto">
                    <SendMessage />
                </div>
            </div>
        </div>
    )
}

export default Chat