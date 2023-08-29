import { Card, Typography, Slider } from "@material-tailwind/react";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

type Props = {
    isOpen?: boolean,
    onClose?: () => void
}

function Filter(
    {
        isOpen,
        onClose
    }: Props
) {
    const [sliderValue, setSliderValue] = useState<number>(10000)

    const handleSliderValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSliderValue(parseInt(event.currentTarget.value))
    }

    return (
        <Card className={`h-full w-full flex flex-col justify-between md:w-72 p-5 shadow-xl shadow-blue-gray-900/5 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} fixed top-0 right-0 z-30`}>
            <div className="flex flex-col gap-6">
                <div className="flex flex-row justify-between">
                    <Typography variant="h3" color="blue-gray">
                        Filters
                    </Typography>
                    <XMarkIcon onClick={onClose} className="h-5 w-5 cursor-pointer" />
                </div>
                <div className="">
                    <div className="inline-block border-2 rounded-md p-2 m-1">Hello Ada saya disini</div>
                    <div className="inline-block border-2 rounded-md p-2 m-1">Hello kalo disini ada saya</div>
                    <div className="inline-block border-2 rounded-md p-2 m-1">Hello sama saya</div>
                    <div className="inline-block border-2 rounded-md p-2 m-1">Hello Lagi</div>
                </div>
                <div className="flex flex-col gap-4">
                    <span className="text-lead font-medium">Poin Needed : {sliderValue}</span>
                    <div className="flex flex-row justify-between">
                        <span className="text-md text-blue-500 font-semibold">IDR 10.000</span>
                        <span className="text-md text-blue-500 font-semibold">IDR 500.000</span>
                    </div>
                    <Slider 
                        onChange={handleSliderValue}
                        value={sliderValue}
                        step={10000} 
                        min={10000} 
                        max={500000} />
                </div>
            </div>
            <button className="text-center bg-blue-500 text-white p-2 rounded-md">Filter</button>

        </Card>
    )
}

export default Filter;