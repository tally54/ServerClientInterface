export interface CHOICE {
    id: number,
    text: string
}

export interface MT_NOTIFICATION {
    country: number,
    notifyId: string,
    userId: string,
    name: string,
    choices: CHOICE[],
    createAt: number,
    updateAt: number,
}