import { EmailData } from '../definitions/contactMeTypes';
import transporter from './transporter';
import EmailToUserTemplate from './EmailToUserTemplate';

export async function sendEmailToMe(
    emailPayload: EmailData,
    htmlString?: string,
) {
    const { name = 'unknown', email, subject = '', message } = emailPayload;
    const payload = {
        from: `${name} <${email}>`,
        to: `${process.env.EMAIL_ADDRESS}`,
        subject,
        text: `${message}`,
        html: htmlString || '',
    };

    return await transporter.sendMail(payload);
}

export async function sendEmailToUser(emailPayload: EmailData) {
    const { email, subject = '', name = '' } = emailPayload;
    const emailTemplate = EmailToUserTemplate({ name, email });
    const payload = {
        from: `${process.env.EMAIL_NAME} <${process.env.EMAIL_ADDRESS}>`,
        to: `${email}`,
        subject,
        html: emailTemplate,
    };

    return await transporter.sendMail(payload);
}
