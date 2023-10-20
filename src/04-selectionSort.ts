// Ordenamiento por selección
// O(n^2)

import { unsortedData } from "./data";

const data = unsortedData

const selectionSort = (data: number[]): number[] => {
    for (let i = 0; i < data.length; i++) {
        let min = i
        for (let j = i + 1; j < data.length; j++) {
            if (data[min] > data[j]) {
                min = j
            }
        }
        let temp = data[i]
        data[i] = data[min]
        data[min] = temp
    }
    return data
}
console.log(data)
console.log(selectionSort(data))