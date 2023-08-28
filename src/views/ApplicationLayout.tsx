import { PropsWithChildren } from 'react'

type Props = {
    pageName?: string
}

function ApplicationLayout(props: PropsWithChildren<Props>) {
    return (
        <div
            id={props.pageName}
            className='py-8 px-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {props.children}
        </div>
    )
}

export default ApplicationLayout