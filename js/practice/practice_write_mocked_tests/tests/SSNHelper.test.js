 import { SSNHelper } from '../src/correct/SSNHelper'; 

// import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowDayUpTo30'; 
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


    test('Allow a month between 1 and 12', () => {

        const result = ssnHelper.isValidMonth('0')

        expect(result).toBe(false)
    })

});