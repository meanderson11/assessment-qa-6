const {shuffleArray} = require('./utils')

const arr = [1, 2, 3, 4]

describe('shuffleArray should', () => {
    let testArray = shuffleArray(arr)
    test('return an array', () => {
        expect(Array.isArray(testArray)).toBeTruthy()
    })

    test('return an array same length as the argument passes', () => {
        expect(testArray.length).toEqual(arr.length)
    })

    test('return an array that contains the same items as the argument passed', () => {
        for(let i = 0; i < testArray.length; i ++){
            expect(arr.includes(testArray[i])).toBeTruthy()
        }
    })

    test('return an array with items not in order than the argument', () => {
        expect(testArray).not.toEqual(arr)
    })
})