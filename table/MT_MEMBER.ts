export enum MEMBER_STATUS {
    APPLY = 0,
    APPROVE,
    REJECT,
    CANCEL,
}

export interface MT_MEMBER {
    country: number
    gestId: string
    groupId: string
    status: MEMBER_STATUS,
    createAt: number
    updateAt: number
}

