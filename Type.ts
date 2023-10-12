import { MEMBER_STATUS } from "./table/MT_MEMBER"

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
    status: MEMBER_STATUS
}

export interface getGroupOutPut {
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

export interface getMemberOutPut {
    gestId: string,
    name: string,
    mail: string,
    status: MEMBER_STATUS,
    createAt: number,
    updateAt: number,
}