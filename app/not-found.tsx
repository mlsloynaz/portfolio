import Link from 'next/link'

export default function NotFound() {
    return (
        <main className="my-10 flex flex-col justify-center items-center">
            <h2 className="text-3xl py-10" >Not Found</h2>
            <p className="pb-10">Could not find requested resource</p>
            <Link className="button-blue" href="/">Return Home</Link>
        </main>
    )
}