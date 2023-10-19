// Linear search
// O(n)

import { data } from "./data"

const array = data(100000000)
const target = 99999999

const linearSearch = (array: number[], target: number): boolean => {

    for (let i = 0; i < array.length; i++) {
        if (array[i] == target) {
            return true
        }
    }
    return false
}

console.log(linearSearch(array, target))