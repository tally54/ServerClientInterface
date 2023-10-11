export enum ErrorCode {
    NONE = 0,
    USER_ADD_FAILED_USER_EXIST,
    USER_ADD_FAILED,
    USER_LOGIN_FAILED_USER_NONE,
    USER_LOGIN_FAILED,
    GROUP_ADD_FAILED,
    EXCEPTION_FAILED,
}

export interface Error {
    code: ErrorCode,
    error: any
}