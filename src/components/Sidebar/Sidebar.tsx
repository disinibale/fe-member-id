// import { Link } from "react-router-dom"

import { Link } from "react-router-dom"

type Props = {
    isOpen: boolean
    onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: Props) {

    return (
        <div className={`fixed flex flex-col z-10 top-0 left-0 h-full py-4 px-6 w-64 bg-gray-800 text-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex flex-row justify-between align-left text-lg font-semibold">
                Awards Menu
                <button className="text-white font-bold" onClick={onClose}>×</button>
            </div>
            <div className="flex flex-col justify-start gap-4 mt-8">
                <div>
                    <Link to='/home' onClick={onClose}>Home</Link>
                </div>
                <div>
                    <Link to='/cards' onClick={onClose}>Cards</Link>
                </div>
                <div>
                    <Link to='/profile' onClick={onClose}>Profile</Link>
                </div>
                <div>
                    <Link to='/logout' onClick={onClose}>Logout</Link>
                </div>
            </div>
        </div>
    )
}