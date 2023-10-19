export const data = (numero: number): number[] => {
    const data = []
    for (let i = 1; i <= numero; i++) {
        data.push(i)
    }
    return data
}

export const unsortedData: number[] = [10, 14, 28, 11, 7, 16, 30, 50, 25, 18]