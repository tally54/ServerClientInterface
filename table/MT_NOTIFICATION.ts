interface choice {
    id: number,
    text: string
}

export interface MT_NOTIFICATION {
    country: number,
    notifyId: string,
    name: string,
    choices: choice[],
    createAt: number,
    updateAt: number,
}