import {
    Card,
    Typography,
} from "@material-tailwind/react";

import { Link } from "react-router-dom"

type Props = {
    isOpen: boolean
    onClose: () => void
    onLogout: () => void
}

export default function Sidebar({ isOpen, onClose, onLogout }: Props) {

    return (
        <>
            <div onClick={onClose} className={`${isOpen ? 'absolute' : 'hidden'} left-0 top-0 min-h-full min-w-full bg-black bg-opacity-40 z-[28]`}></div>
            <Card className={`bg-white fixed flex flex-col z-30 top-0 left-0 h-full py-4 px-6 w-64 shadow-xl shadow-blue-gray-900/5 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-row justify-between align-left text-lg font-semibold">
                    <Typography variant="h3">
                        Awards Menu
                    </Typography>
                </div>
                <div className="flex flex-col justify-start gap-4 mt-8">
                    <Typography variant="lead" className="w-full">
                        <Link className="w-full text-left " to='/' onClick={onClose}>Home</Link>
                    </Typography>
                    <Typography variant="lead" className="disabled w-full">
                        <button className="w-full text-left disabled:text-gray-500 cursor-not-allowed" disabled={true} onClick={onClose}>Cards</button>
                    </Typography>
                    <Typography variant="lead" className="w-full">
                        <button className="w-full text-left disabled:text-gray-500 cursor-not-allowed" disabled={true} onClick={onClose}>Profile</button>
                    </Typography>
                    <Typography variant="lead" className="disabled w-full">
                        <button className="w-full text-left " onClick={onLogout}>Logout</button>
                    </Typography>
                </div>
            </Card>
        </>
    )
}