export function twoNumberSum(array: number[], targetSum: number) {
    const numMap = new Map()

    for (let idx: number = 0; idx < array.length; idx++) {
        const currentRemainder: number = targetSum - array[idx];
        if (numMap.has(currentRemainder)) {
            return [currentRemainder, array[idx]]
        } else {
            numMap.set(array[idx], true)
        }

    }

    return []
}
