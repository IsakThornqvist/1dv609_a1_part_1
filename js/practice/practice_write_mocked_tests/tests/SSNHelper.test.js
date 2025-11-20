 //import { SSNHelper } from '../src/correct/SSNHelper'; 

 import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowDayUpTo30'; 
//import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowMonth0'; 
//import { SSNHelper } from '../src/bugs/BuggySSNHelperIncorrectFormat'; 
//import { SSNHelper } from '../src/bugs/BuggySSNHelperMessyLuhn'; 
//import { SSNHelper } from '../src/bugs/BuggySSNHelperWrongLength'; 





describe('SSNHelpe Tests', () => {
    let ssnHelper

    beforeEach(() => {
        ssnHelper = new SSNHelper()
    })


    test('Allow a maximum of 31 days', () => {

        const result = ssnHelper.isValidDay('31')

        expect(result).toBe(true)
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

/*     test('Incorrect format test', () => {
        const result = ssnHelper.isCorrectFormat('123456-7890')
        const ssnRegex = /^\d{6}-\d{4}$/;

        expect.stringMatching(result | ssnRegex)
    }) */
});