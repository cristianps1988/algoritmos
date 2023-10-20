// Quicksort
// O(n*log(n)) en promedio, O(n^2) en el peor de los casos

import { unsortedData } from "./data";

const data = unsortedData

const quickSort = (array: number[]): number[] => {
    if (array.length <= 1) return array
    let pivot: any = array.pop()
    let der: number[] = []
    let izq: number[] = []
    let temp: number[] = []
    for (let i = 0; i < array.length; i++) {
        array[i] > pivot ? der.push(array[i]) : izq.push(array[i])
    }
    return temp.concat(quickSort(izq), pivot, quickSort(der))
}

console.log(data)
console.log(quickSort(data))