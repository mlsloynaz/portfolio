import { ContactMe as t } from '@/utils/resourceContent';

function EmailToUserTemplate({
    name,
    email,
}: {
    name?: string;
    email: string;
}) {
    const from = name || email;
    return `<html lang="en">
            <body>
                <h2>${t.emailContent.toUserHeader} ${from}. </h2>
                <p>${t.emailContent.toUserLine1}</p>
                <p>${t.emailContent.toUserLine2}</p>
                <p>${process.env.EMAIL_NAME}</p>
            </body>
        </html>`;
}

export default EmailToUserTemplate;
