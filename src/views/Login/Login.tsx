import React, {
    SetStateAction,
    Dispatch,
    useState
} from 'react'
import {
    Typography
} from "@material-tailwind/react";
import { StarIcon } from '@heroicons/react/24/solid';

import { fetchSignIn } from '../../services/api';
import LoginError from './LoginError';

type LoginProps = {
    setUser: Dispatch<SetStateAction<string | null>>
}

export default function Login(
    { setUser }: LoginProps
) {
    const [email, setEmail] = useState<string>('')
    const [error, setError] = useState<Record<string, string> | string | null>(null)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value)
    }

    const handleSubmitButton = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        try {
            const { data } = await fetchSignIn({ email });

            localStorage.setItem('token', data.token)
            setUser(data.token)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            const errorData = err.response?.data;

            if (errorData?.error) {
                return setError(errorData.error);
            }
            if (errorData?.errors) {
                const errorMessages = errorData.errors.flatMap((errorObj: { [s: string]: string; } | ArrayLike<unknown>) =>
                    Object.values(errorObj)
                );
                return setError(errorMessages);
            }
        }
    };

    return (
        <div className='flex flex-col h-screen w-screen justify-center items-center'>
            {error &&
                <LoginError error={error} />
            }
            <div className='w-full flex flex-col items-center justify-center'>
                <StarIcon className='w-20 h-20 text-amber-400 text-center' />
                <Typography className='text-2xl font-bold font-sans text-gray-600'>AWARD</Typography>
            </div>
            <div className='flex flex-col gap-4 justify-center content-center items-center mt-10'>
                <label>Enter your email address to sign in and continue</label>
                <input
                    onChange={handleInputChange}
                    defaultValue={email}
                    className='border-2 rounded-md py-2 px-4 w-full'
                    placeholder='Email Address' />
                <button
                    onClick={handleSubmitButton}
                    onSubmit={handleSubmitButton}
                    className='bg-gray-600 w-1/3 py-2 px-4 text-white rounded-md drop-shadow-lg shadow-lg'>Sign in</button>
            </div>
        </div>
    )
}