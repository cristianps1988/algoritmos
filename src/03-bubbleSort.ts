// bubble sort
// O(n^2)

import { unsortedData } from "./data";

const data = unsortedData

const bubbleSearch = (array: number[]): number[] => {
    const n = array.length
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < (n - i) - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
    return array
}

console.log(data)
console.log(bubbleSearch(data))