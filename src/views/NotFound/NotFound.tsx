import {
    Typography,
} from "@material-tailwind/react";

export default function NotFound() {
    return (
        <div className="flex flex-col justify-center content-center min-h-screen min-w-screen text-center gap-8">
            <Typography variant="h1" className={"font-bold text-4xl md:text-6xl"}>
                <code><span className="bg-gray-200 py-2 px-4 rounded-md">404</span></code> Not Found
            </Typography>
            <Typography variant="h3" className="text-xl">The Page you are looking for is not exist.</Typography>
        </div>
    )
}