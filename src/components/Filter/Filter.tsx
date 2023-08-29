import { Card, Typography, Slider } from "@material-tailwind/react";
import React, { useEffect } from 'react'

import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import FilterCheckbox from "./FilterCheckbox";

type Props = {
    isOpen?: boolean;
    onClose?: () => void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleFilterButton: (filters: any) => void
}

function Filter(
    {
        // pointNeeded,
        // voucherType,
        handleFilterButton,
        isOpen,
        onClose
    }: Props
) {
    interface VoucherTypeOptions {
        all: boolean
        vouchers: boolean
        products: boolean
        others: boolean
    }

    const [filterOptions, setFilterOptions] = useState<{ pointNeeded: number, voucherType: VoucherTypeOptions }>({
        pointNeeded: 10000,
        voucherType: {
            all: false,
            vouchers: false,
            products: false,
            others: false
        }
    })

    const handleCheckboxValue = (option: keyof VoucherTypeOptions) => {
        if (option === 'all') {
            const allChecked = filterOptions.voucherType.all

            setFilterOptions((prevOptions) => ({
                ...prevOptions,
                voucherType: {
                    all: !allChecked,
                    vouchers: !allChecked,
                    products: !allChecked,
                    others: !allChecked
                }
            }));
        } else {
            setFilterOptions((prevOptions) => ({
                ...prevOptions,
                voucherType: {
                    ...prevOptions.voucherType,
                    [option]: !prevOptions.voucherType[option]
                }
            }))
        }
    }

    useEffect(() => {
        setFilterOptions(filterOptions)
    }, [filterOptions])

    return (
        <Card className={`bg-white h-full w-full flex flex-col justify-between md:w-72 p-5 shadow-xl shadow-blue-gray-900/5 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} fixed top-0 right-0 z-30`}>
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
                    <span className="text-lead font-medium">Poin Needed : {filterOptions.pointNeeded}</span>
                    <div className="flex flex-row justify-between">
                        <span className="text-md text-blue-500 font-semibold">IDR 10.000</span>
                        <span className="text-md text-blue-500 font-semibold">IDR 500.000</span>
                    </div>

                    <Slider
                        onChange={(event) => setFilterOptions({ ...filterOptions, pointNeeded: parseInt(event.currentTarget.value) })}
                        value={filterOptions.pointNeeded}
                        step={10000}
                        min={10000}
                        max={500000}
                        className="text-gray-200"
                        barClassName="rounded-md bg-transparent"
                        thumbClassName="[&::-moz-range-thumb]:rounded-md [&::-webkit-slider-thumb]:rounded-md"
                        trackClassName="[&::-webkit-slider-runnable-track]:bg-transparent [&::-moz-range-track]:bg-transparent rounded-md !bg-gray-200 border border-gray-200"
                    />

                </div>
                <FilterCheckbox options={filterOptions.voucherType} onChange={handleCheckboxValue} />
            </div>

            <button onClick={() => handleFilterButton(filterOptions)} className="text-center bg-blue-500 text-white p-2 rounded-md">Filter</button>
        </Card>
    )
}

export default Filter;