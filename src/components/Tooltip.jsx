import '../style.css'

export const Tooltip = () => {
  return (
    <div>
        <span className={[
            "whitespace-nowrap",
            "rounded",
            "bg-black",
            "px-2",
            "py-1",
            "text-white"
        ].join("")}
        >
            てすと
        </span>
    </div>
  )
}
