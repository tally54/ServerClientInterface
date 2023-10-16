export enum ErrorCode {
    NONE = 0,
    USER_ADD_FAILED_USER_EXIST,
    USER_ADD_FAILED,
    USER_LOGIN_FAILED_USER_NONE,
    USER_LOGIN_FAILED,
    GROUP_ADD_FAILED,
    EXCEPTION_FAILED,
}

export enum MemberStatus {
    APPLY = 0,
    APPROVE,
    REJECT,
    CANCEL,
}

export interface Error {
    code: ErrorCode,
    error: any
}

export interface ServerResponseJson {
    result: boolean,
    data: any,
    error: {
        code: ErrorCode
        data: any
    }
}

export interface AddGestOutPut {
    gestId: string
}

export interface GroupMember {
    gestId: string,
    status: MemberStatus
}

export interface getGroupHostOutPut {
    country: number,
    groupId: string,
    name: string,
    userId: string,
    invi: {
        id: string,
        password: string,
    },
    createAt: number,
    updateAt: number,
    member: GroupMember[]
}

export interface getGroupGestOutPut {
    country: number,
    groupId: string,
    name: string,
    createAt: number,
    updateAt: number,
    status: MemberStatus
}

export interface getMemberOutPut {
    gestId: string,
    name: string,
    mail: string,
    status: MemberStatus,
    createAt: number,
    updateAt: number,
}