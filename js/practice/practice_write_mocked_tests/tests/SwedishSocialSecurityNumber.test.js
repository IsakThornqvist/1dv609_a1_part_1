import { expect, jest } from '@jest/globals';

 import { SwedishSocialSecurityNumber } from '../src/correct/SwedishSocialSecurityNumber'
//import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoLenCheck'
//import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoTrim'
//import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecutityNumberWrongYear'

// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecutityNumberNoLuhn'




//NOTE THESE TESTS SHOULD NOT BE DEPENDENT ON SSNHelper BUT USE MOCKING
describe('SwedishSocialSecurityNumber Tests', () => {
    let ssnHelperMock


    const correctFormat = '890201-3286'
    const incorrectFormat = '123456-78901'
    const withSpaces = ' 890201-3286 '
    
     beforeEach(() => {
         
         ssnHelperMock = {
             isCorrectLength: jest.fn(),
             isCorrectFormat: jest.fn(),
             isValidMonth: jest.fn(),
             isValidDay: jest.fn(),
             luhnisCorrect: jest.fn(),
             
            }
    }) 

    // KOLLA IGEN
    test('isCorrectLength should throw error if length is not 11 ', () => {
        // Arrange
        ssnHelperMock.isCorrectLength.mockReturnValue(false)
        ssnHelperMock.isCorrectFormat.mockReturnValue(true)

        // Act
        // Assert
        expect(() => {
            new SwedishSocialSecurityNumber(correctFormat, ssnHelperMock)
        }).toThrow('To short, must be 11 characters')
        
    })


    test('constructor trims input string', () => {
        
    const result = new SwedishSocialSecurityNumber(withSpaces, ssnHelperMock)

    expect(result.getMonth()).toBe('02')

    })

    test('getYear returns first two digits of SSN', () => {
        const result = new SwedishSocialSecurityNumber(correctFormat, ssnHelperMock)

        expect(result.getYear()).toBe('89')
    })


})
