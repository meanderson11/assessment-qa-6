const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test("shows a return of an array", () => {
        let testArray = [1, 2, 3, 4, 5];
        let shuffleTest = shuffleArray(testArray);
        let showType = Array.isArray(shuffleTest);
        expect(showType).toBeTruthy();
    }),
    
    test("shows an array of the same length", () =>{
        let testArray = [1,2,3,4,5];
        let shuffleTest = shuffleArray(testArray);
        let sameLength = true;
        if (testArray.length === shuffleTest.length){
            sameLength = true;
        }
        else{
            sameLength = false;
        }
        expect(sameLength).toBeTruthy();
    })
})