// Ordenamiento por inserción
// O(n^2)

import { unsortedData } from "./data";

const data = unsortedData

const insertionSort = (array: number[]): number[] => {
    for (let i = 1; i < array.length; i++) {
        let actual = array[i]
        let j = i - 1
        while (j >= 0 && array[j] > actual) {
            array[j + 1] = array[j]
            j--
        }
        array[j + 1] = actual
    }
    return array
}

console.log(data)
console.log(insertionSort(data))