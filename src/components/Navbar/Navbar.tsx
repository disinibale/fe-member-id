import { MouseEventHandler } from 'react'

type Props = {
    onClickLeftMenu?: MouseEventHandler<HTMLButtonElement>
    onClickRightMenu?: MouseEventHandler<HTMLButtonElement>
}

export default function Navbar({
    onClickLeftMenu,
    onClickRightMenu
}: Props) {
    return (
        <div className="flex justify-between items-center bg-blue-500 py-4 px-6">
            <button
                className="text-white font-bold"
                onClick={onClickLeftMenu}
            >
                ☰
            </button>
            <button
                className="text-white font-bold"
                onClick={onClickRightMenu}
            >
                Filter
            </button>
        </div>
    )
}