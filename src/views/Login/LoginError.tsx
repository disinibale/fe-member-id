import React from 'react'

type Props = {
    error: Record<string, string> | string | null
}

export default function LoginError({
    error
}: Props) {
    const formatWords = (sentences: string) => {
        return sentences.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
    }

    return (
        <div className='flex flex-col bg-rose-400 p-4 drop-shadow-md rounded-md gap-2 mb-6'>
            {typeof error === 'string' && <p className='text-lead'>{formatWords(error)}</p>}
            {Array.isArray(error) && Object.values(error).map((err, index) => (<p className='text-lead' key={index}>{formatWords(err)}</p>))}
        </div>
    )
}