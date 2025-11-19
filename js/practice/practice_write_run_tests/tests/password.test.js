
// Select one of the Password versions to test

import { Password } from '../src/Correct'
  
  // Done
//import { Password } from '../src/BugWrongHashingAlgorithm'
// import { Password } from '../src/BugNeverContainsNumbers'
// import { Password } from '../src/BugWrongMessage'
 // import { Password } from '../src/BugDoesNotHash'
 // import { Password } from '../src/BugDoesNotTrim'
 // import { Password } from '../src/BugisPasswordAlwaysSame'
 // import { Password } from '../src/BugMissingNumberCheck'
 // import { Password } from '../src/BugMissingPasswordCheck'
 // import { Password } from '../src/BugToShortPassword'
 //import { Password } from '../src/BugVeryShort'

describe('Password class, test suite', () => {
    //put constants here to increase readability
    const secretPassword = 'secret123password123'


    beforeEach(() => {
        //password = new Password()
    })

        test('getPasswordHash Should Return Hashed Password For Valid Password', () => {
        
            // Arrange
            const password = new Password(secretPassword)

            // Act
            const afterHash = password.getPasswordHash()

            // Assert
            expect(afterHash).not.toBe(secretPassword)
    })


    test('Constructor Should Remove Spaces From StartAndEnd Of Password', () => {
        
        // Arrange
        const passwordWithSpaces = new Password(' secret123password123 ')

        const passwordNoSpaces = new Password('secret123password123')

        // Act
        const result = passwordNoSpaces.isPasswordSame(passwordWithSpaces)

        // Assert
        expect(result).toBe(true)

    })


    test('isPasswordSame Should Return False For Different Passwords', () => {
        // Arrange
        const password1 = new Password('supersecretpassword123')
        const password2 = new Password('supersecretpassword1234')

        // Act
        const result = password1.isPasswordSame(password2)

        // Assert
        expect(result).toBe(false)
    })

    test('Throw An Exception When Comparing A Password Instance With A Non-Password Instance', () => {
        // Arrange
        const password = new Password(secretPassword)
        const nonInstancePassword = 'secret123password123'

        // Act
        // Assert
        expect(() => password.isPasswordSame(nonInstancePassword)).toThrow('Invalid argument')
    })

// negative test
test('Constructor Should Throw Error For Password Without Numbers', () => {
    // Arrange
    const passwordWithOutNumber = 'superSecretPassword'

    // Act
    // Assert
    expect(() => {
        new Password(passwordWithOutNumber)
    }).toThrow('No number found')
})

// positive test
test('Constructor Should Not Throw An Error For Passwords With Numbers', () => {
    // Arrange
    const passwordWithNumber = 'superSecretPassword123'

    // Act
    // Assert
    expect(() => {
        new Password(passwordWithNumber)
    }).not.toThrow('No number found')
})

    test('Constructor Should Throw An Error For Passwords Shorter Than 12', () => {
        // Arrange
        const passwordToShort = 'shortPW1234'

        // Act
        // Assert
        expect(() => {
            new Password(passwordToShort)
        }).toThrow('Too short password')
    })

test('getPasswordHash Should Return Number Greater Than 7 For Valid Password', () => {

    // Arrange
  const password = new Password(secretPassword)

  // Act
  const afterHash = password.getPasswordHash()

  if (typeof afterHash !== 'number') {
    return
  }

  // Assert
  expect(afterHash).toBeGreaterThan(7)
})

})