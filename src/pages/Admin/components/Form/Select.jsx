export default function Select({  options, ...props }) {
    return (
        <select
            {...props}
            className="w-full h-[3.4rem] text-xl outline-none focus:ring-0 border border-gray-200"
        >
            {options && options.map((option, index) => {
                return (
                    <option key={index} value={option.value}>{option.name}</option>
                )
            })}
        </select>
    );
}