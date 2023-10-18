import { MemberStatus } from "../Type"

export interface MT_MEMBER {
    country: number
    memberId: string
    gestId: string
    groupId: string
    status: MemberStatus
    createAt: number
    updateAt: number
}
