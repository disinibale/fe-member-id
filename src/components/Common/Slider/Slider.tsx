type Props = {
    value: number,
    min: number,
    max: number,
    step: number,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function Slider({ value, min, max, step, onChange }: Props) {
    const rangeValue = ((value - min) / (max - min)) * 100; // Calculate the percentage of value

    return (
        <div className="relative">
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={onChange}
                className="slider appearance-none w-full h-2 bg-gray-100 rounded-full mt-2 focus:outline-none"
                style={{
                    background: `linear-gradient(90deg, transparent ${rangeValue}%, #38a169 ${rangeValue}%, #e2e8f0 ${rangeValue + 1}%, transparent ${rangeValue + 1}%)`
                }}
            />
        </div>
    );
}

export default Slider;