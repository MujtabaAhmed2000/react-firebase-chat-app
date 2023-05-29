const Button = ({ children, onClick }) => {
    return (
        <button
            className="w-fit bg-orange-400 py-2 px-4 rounded-md text-white font-bold"
            onClick={() => {
                onClick()
            }}
        >
            {children}
        </button>
    )
}

export default Button