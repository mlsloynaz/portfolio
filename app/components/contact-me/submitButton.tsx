'use client';

import { useFormStatus } from 'react-dom';
import { MLButton } from '../ml-button';

export function SubmitButton({ label }: { label: string }) {
    const { pending } = useFormStatus();
    return <MLButton type="submit" label={label} disabled={pending} />;
}
