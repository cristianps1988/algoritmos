// Merge Sort

import { unsortedData } from "./data";

const data = unsortedData

const mergeSort = (array: number[]): number[] => {
    if (array.length <= 1) return array
    let mitad: any = Math.floor(array.length / 2)

    let izq: number[] = mergeSort(array.slice(0, mitad))
    let der: number[] = mergeSort(array.slice(mitad, array.length))

    const merge = (izq: number[], der: number[]): number[] => {
        let datos: any = []
        while (izq.length > 0 && der.length > 0) {
            datos.push(izq[0] <= der[0] ? izq.shift() : der.shift())
        }
        return datos.concat(izq).concat(der)
    }

    return merge(izq, der)
}

console.log(data)
console.log(mergeSort(data))