function EmailToUserTemplate({ name, email }: { name?: string; email: string }) {
    const from = name || email
    return (
        `<html lang="en">
            <body>
                <h2>Dear ${from}. </h2>
                <p>Thank you for reaching out to me! Your message has been received, and I highly appreciate your interest.</p>
                <p>Best regards,</p>
                <p>${process.env.EMAIL_NAME}</p>
            </body>
        </html>`
    );
}

export default EmailToUserTemplate;
