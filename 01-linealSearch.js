// Linear search
// O(n)

const array = [1, 3, 5, 6, 8, 10, 13, 15, 23]
const target = 22

const linearSearch = (array, target) => {

    for (let i = 0; i < array.length; i++) {
        if (array[i] == target) {
            return true
        }
    }
    return false
}

console.log(linearSearch(array, target))