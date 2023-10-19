// binary search
//O(log n)

import { data } from "./data"

const array = data(100000000)
const target = 99999999

const binarySearch = (array: number[], target: number): number | boolean => {
    let left = 0
    let right = array.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (target == array[mid]) {
            return array[mid]
        }
        if (target < array[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return false
}

// usando recursividad

function binarySearchRecursive(arr: number[], target: number, left: number, right: number): number | boolean {
    if (left > right) return false
    let mid = Math.floor((left + right) / 2)
    if (target == arr[mid]) return target
    if (target > arr[mid]) {
        return binarySearchRecursive(arr, target, mid + 1, right)
    } else {
        return binarySearchRecursive(arr, target, left, mid - 1)
    }
}

console.log(binarySearch(array, target))
console.log(binarySearchRecursive(array, target, 0, array.length - 1))