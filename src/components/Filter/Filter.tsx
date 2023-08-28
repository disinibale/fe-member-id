import React from "react";

import {
    Card,
    Typography,
} from "@material-tailwind/react";
import {
    XMarkIcon,
} from "@heroicons/react/24/solid";

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
    return (
        <Card className={`h-full w-full md:w-72 p-5 shadow-xl shadow-blue-gray-900/5 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} fixed top-0 right-0 z-30`}>
            <div className="flex flex-row justify-between">
                <Typography variant="h3" color="blue-gray">
                    Filters
                </Typography>
                <XMarkIcon onClick={onClose} className="h-5 w-5 cursor-pointer" />
            </div>
        </Card>
    )
}

export default Filter;