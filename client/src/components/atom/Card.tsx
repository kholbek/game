import clsx from "clsx"

function Card({ children, className }: { children?: React.ReactNode, className?: string}) {
    return (
        <div className={clsx("border-[#343949] bg-gradient-to-r from-[#181C22] to-[#343949] border rounded-md", className)}>
            {children}
        </div>
    )
}

export default Card