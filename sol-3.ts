export function twoNumberSum(array: number[], targetSum: number) {

    const arraySorted = [...array.sort((a, b) => a - b)]

    let leftPointer: number = 0;
    let rightPointer: number = arraySorted.length - 1;

    while (leftPointer < rightPointer) {

        const currentSum: number = (arraySorted[leftPointer] + arraySorted[rightPointer])

        if (currentSum === targetSum) {
            return [arraySorted[leftPointer], arraySorted[rightPointer]]
        } else if (currentSum < targetSum) {
            leftPointer++
        } else {
            rightPointer--
        }
    }

    return []
}

