import { MouseEventHandler } from 'react'

import {
    Navbar,
} from "@material-tailwind/react";
import { Bars4Icon, FunnelIcon } from '@heroicons/react/24/solid';

type Props = {
    onClickLeftMenu?: MouseEventHandler<HTMLButtonElement>
    onClickRightMenu?: MouseEventHandler<HTMLButtonElement>
}

export default function PageNavbar({
    onClickLeftMenu,
    onClickRightMenu
}: Props) {
    return (
        <Navbar className='sticky top-0 z-20 py-5 px-4 lg:px-8 text-black flex flex-row justify-between'>
            <button onClick={onClickLeftMenu}>
                <span>
                    <Bars4Icon className='h-5 w-5' />
                </span>
            </button>
            <button onClick={onClickRightMenu}>
                <span>
                    <FunnelIcon className='h-5 w-5' />
                </span>
            </button>
        </Navbar>
    )
}