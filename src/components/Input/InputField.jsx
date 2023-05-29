const InputField = ({ label, onChange, value, placeholder }) => {
    return (
        <div className="flex flex-col space-y-2">
            <label className="text-black font-semibold ">
                {label}
            </label>
            <input
                className="px-3 py-2 bg-white rounded-sm"
                onChange={(e) => {
                    onChange(e.target.value)
                }}
                value={value}
                placeholder={placeholder}
            />
        </div>
    )
}

export default InputField