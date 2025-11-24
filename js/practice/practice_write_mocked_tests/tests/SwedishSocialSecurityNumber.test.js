import { jest } from '@jest/globals';

import { SwedishSocialSecurityNumber } from '../src/correct/SwedishSocialSecurityNumber'
//import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoLenCheck'
//import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoTrim'
//import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecutityNumberNoLuhn'
//import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecutityNumberWrongYear'




//NOTE THESE TESTS SHOULD NOT BE DEPENDENT ON SSNHelper BUT USE MOCKING
describe('SwedishSocialSecurityNumber Tests', () => {
    let ssnHelperMock


    const correctFormat = '890201-3286'
    const incorrectFormat = '123456-78901'
    
     beforeEach(() => {
         
         ssnHelperMock = {
             isCorrectLength: jest.fn(),
             isCorrectFormat: jest.fn(),
             isValidMonth: jest.fn(),
             isValidDay: jest.fn(),
             luhnisCorrect: jest.fn(),
             
            }
    }) 

    test('should throw error if length is not 11 ', () => {
        // Arrange
        ssnHelperMock.isCorrectLength.mockReturnValue(false)
        ssnHelperMock.isCorrectFormat.mockReturnValue(true)

        // Act
        // Assert
        expect(() => {
            new SwedishSocialSecurityNumber(correctFormat, ssnHelperMock)
        }).toThrow('To short, must be 11 characters')
        
    })





    //Add your tests here
})
