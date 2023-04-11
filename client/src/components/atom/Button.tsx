import clsx from "clsx"
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

function Button({ children, className, disabled, ...props }: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
    return (
        <button className={clsx("disabled:bg-[#8890A2] disabled:text-white disabled:cursor-default from-[#D54F87] to-[#EA7457] text-white py-2 px-4 rounded-md", !disabled && "bg-gradient-to-r", className)} disabled={disabled} {...props}>
            {children}
        </button>
    )
}

export default Button