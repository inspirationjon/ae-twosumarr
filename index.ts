export function twoNumberSum(array: number[], targetSum: number) {

    if (array.length < 2) {
        return []
    }

    for (let idx: number = 0; idx < array.length; idx++) {
        for (let jdx = 0; jdx < array.length; jdx++) {

            if (idx === jdx) {
                jdx++
            }

            const isEqaulsTarget: boolean = array[idx] + array[jdx] === targetSum
            if (isEqaulsTarget) {
                return [array[idx], array[jdx]]
            }
        }
    }



    return [];
}
