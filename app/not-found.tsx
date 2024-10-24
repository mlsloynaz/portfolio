import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="no-content-page">
            <h2 className="py-10">Not Found</h2>
            <p className="pb-10">Could not find requested resource</p>
            <Link className="button-blue" href="/">
                Return Home
            </Link>
        </main>
    );
}
