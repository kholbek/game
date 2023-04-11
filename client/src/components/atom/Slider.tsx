import { useMemo, useState } from "react"

function Slider({ min = 0, max = 100, onChange }: SliderProps) {
    const [value, setValue] = useState('0')
    const mappedValue = useMemo(() => (+value-min)/(max-min)*100, [value, min, max])

    return (
        <input type="range" style={{
            transition: 'background 450ms ease-in',
            background: 'linear-gradient(to right, #D54F87 0%, #EA7457 ' + mappedValue + '%, #383E4B ' + mappedValue + '%, #383E4B 100%)'
        }} onInput={e => {setValue(e.currentTarget['value']); onChange?.(+e.currentTarget['value'])}} min={min} max={max} value={value} className="w-full h-1 rounded-sm appearance-none cursor-pointer" />
    )
}


export default Slider