'use client' // Error components must be Client Components

import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
    }, [error])

    return (
        <main className="no-content-page">
            <h2 className="py-10">Error</h2>
            <p className="pb-10">Something went wrong!</p>
            <button className="button-blue"
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </button>
        </main>
    )
}