 // import { SSNHelper } from '../src/correct/SSNHelper'; 

 //import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowDayUpTo30'; 
//import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowMonth0'; 

// Maybe
//import { SSNHelper } from '../src/bugs/BuggySSNHelperIncorrectFormat'; 

import { SSNHelper } from '../src/bugs/BuggySSNHelperMessyLuhn'; 
// import { SSNHelper } from '../src/bugs/BuggySSNHelperWrongLength'; 





describe('SSNHelpe Tests', () => {
    let ssnHelper

    const correctFormat = '020304-1065'
    const incorrectFormat = '123456-78901'

    beforeEach(() => {
        ssnHelper = new SSNHelper()
    })


    test('Allow days to be between 1 and 31', () => {
        for (let days = 1; days <= 31; days++) {
            const result = ssnHelper.isValidDay(days)
            expect(result).toBeTruthy()
        }
    })


    // kolla senare
    test('Return false if the month is invalid', () => {

        const result = ssnHelper.isValidMonth('0')

        expect(result).toBe(false)
    })

    test('Return true if the month is between 1 and 12', () => {
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

    test('isCorrectLength should only allow the string input to equal 11', () => {
            const result = ssnHelper.isCorrectLength('020304-106527654')
            if(result.length !== 11) {
                expect(result).toBeFalsy()
            }
    })


})
