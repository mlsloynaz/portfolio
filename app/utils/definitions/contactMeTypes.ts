export type EmailData = {
    name?: string;
    email: string;
    to?: string;
    subject?: string;
    message: string;
};

export enum ResultTypeEnum {
    SUCCESS = 'success',
    ERROR = 'error',
    WARNING = 'warning',
}
export type ResultType =
    | ResultTypeEnum.SUCCESS
    | ResultTypeEnum.ERROR
    | ResultTypeEnum.WARNING;
