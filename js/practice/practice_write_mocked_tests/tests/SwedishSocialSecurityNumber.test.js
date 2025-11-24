 import { SwedishSocialSecurityNumber } from '../src/correct/SwedishSocialSecurityNumber'
//import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoLenCheck'
//import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoTrim'
//import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecutityNumberNoLuhn'
//import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecutityNumberWrongYear'




//NOTE THESE TESTS SHOULD NOT BE DEPENDENT ON SSNHelper BUT USE MOCKING
describe('SwedishSocialSecurityNumber Tests', () => {
    let swedishSocialSecurityNumber
    let ssnHelperMock


    const correctFormat = '890201-3286'
    const incorrectFormat = '123456-78901'
    
     beforeEach(() => {
         
         ssnHelperMock = {
             correctLength: jest.fn()
             
            }
            swedishSocialSecurityNumber = new SwedishSocialSecurityNumber(ssnHelperMock)
    }) 

    test('Contructor should return error when ', () => {



    })


    //Add your tests here
})
