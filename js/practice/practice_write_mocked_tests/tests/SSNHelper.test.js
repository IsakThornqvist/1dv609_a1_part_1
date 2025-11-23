  import { SSNHelper } from '../src/correct/SSNHelper'; 

 //import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowDayUpTo30'; 
//import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowMonth0'; 

// Maybe
//import { SSNHelper } from '../src/bugs/BuggySSNHelperIncorrectFormat'; 

//import { SSNHelper } from '../src/bugs/BuggySSNHelperMessyLuhn'; 
// import { SSNHelper } from '../src/bugs/BuggySSNHelperWrongLength'; 





describe('SSNHelpe Tests', () => {
    let ssnHelper

    const correctFormat = '890201-3286'
    const incorrectFormat = '123456-78901'

    beforeEach(() => {
        ssnHelper = new SSNHelper()
    })


    test('isValidDay Should Return True For Days Between 1 And 31', () => {
        for (let days = 1; days <= 31; days++) {
            const result = ssnHelper.isValidDay(days)
            expect(result).toBeTruthy()
        }
    })


    test('isValidMonth Should Return False For Month Below 1', () => {

        const result = ssnHelper.isValidMonth('0')

        expect(result).toBe(false)
    })

    test('isValidMonth Should Return True For Months Between 1 And 12', () => {
        for (let month = 1; month < 12; month++) {
            const result = ssnHelper.isValidMonth(month)
            expect(result).toBeTruthy()
        }
    })

        test('isCorrectFormat should return true if format is correct', () => {
        const result = ssnHelper.isCorrectFormat(correctFormat)

        expect(result).toBeTruthy()
    })

        test('isCorrectFormat should return false if format is wrong', () => {
        const result = ssnHelper.isCorrectFormat(incorrectFormat)

        expect(result).toBeFalsy()
    })

    test('isCorrectLength should return true for strings with exactly 11 characters', () => {
            const result = ssnHelper.isCorrectLength(correctFormat)
            expect(result).toBeTruthy()
    })

    test('isCorrectLength should return false for strings that are not 11 characters', () => {
            const result = ssnHelper.isCorrectLength(incorrectFormat)
            expect(result).toBeFalsy()
    })


    test('luhnisCorrect returns true for SSNs with valid Luhn checksum', () => {
        const result = ssnHelper.luhnisCorrect(correctFormat)

        expect(result).toBeTruthy()
    })


})
