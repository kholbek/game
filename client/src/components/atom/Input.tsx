import { useState } from 'react'
import Card from './Card'
import IconCaretDownFill from '../icons/IconCaretDownFill'
import IconCaretUpFill from '../icons/IconCaretUpFill'

function Input({ defaultValue, incrementBy, max, min, title, float, inputRef }: InputProps) {
    const [value, setValue] = useState<string | number>((defaultValue || min || 0).toFixed(float ? 2 : 0))

    function increment() {
        setValue(old => {
            if(Number.isNaN(old)) return 0
            let result = +old + (incrementBy || 1)
            if(max && result < max) {
                return result.toFixed(float ? 2 : 0)
            }
            return result.toFixed(float ? 2 : 0)
        })
    }

    function decrement() {
        setValue(old => {
            if(Number.isNaN(old)) return 0
            let result = +old - (incrementBy || 1)
            if(min && result > min) {
                return result.toFixed(float ? 2 : 0)
            }
            return result.toFixed(float ? 2 : 0)
        })
    }

    return (
        <Card className='h-11'>
            <div className="text-[0.6rem] flex justify-center py-[1px] text-[#767984]">{title}</div>
            <div className="flex justify-between gap-1 p-1 pt-0">
                <button onClick={decrement} className="border-[#494c58] cursor-pointer grid place-items-center shrink-0 text-xs p-1 text-white rounded-md border">
                    <IconCaretDownFill />
                </button>
                <input ref={inputRef} value={value} onChange={e => setValue(e.target.value)} className='bg-[#101418] outline-none text-center caret-[#5b5f6d] rounded-md flex items-center justify-center text-white text-sm w-full' />
                <button onClick={increment} className="border-[#5b5f6d] grid place-items-center shrink-0 text-xs p-1 text-white rounded-md border">
                    <IconCaretUpFill />
                </button>
            </div>
        </Card>
    )
}

export default Input