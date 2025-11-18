
// Select one of the Password versions to test

// import { Password } from '../src/BugDoesNotHash'
 //import { Password } from '../src/BugDoesNotTrim'
 //import { Password } from '../src/BugisPasswordAlwaysSame'
// import { Password } from '../src/BugMissingNumberCheck'
 //import { Password } from '../src/BugMissingPasswordCheck'
 //import { Password } from '../src/BugNeverContainsNumbers'
 import { Password } from '../src/BugToShortPassword'
// import { Password } from '../src/BugVeryShort'
// import { Password } from '../src/BugWrongHashingAlgorithm'
// import { Password } from '../src/BugWrongMessage'
 //import { Password } from '../src/Correct'

describe('Password class, test suite', () => {
    //put constants here to increase readability
    const secretPassword = 'secret123password123'


    beforeEach(() => {
        //password = new Password()
    })

        test('getPassWordHash_should_return_the_hashed_password', () => {
        
            // Arrange
            const password = new Password(secretPassword)

            // Act
            const afterHash = password.getPasswordHash()

            // Assert
            expect(afterHash).not.toBe(secretPassword)
    })


    test('spaces_should_be_removed_from_the_start_and_the_end_of_the_password', () => {
        
        // Arrange
        const passwordWithSpaces = new Password(' secret123password123 ')

        const passwordNoSpaces = new Password('secret123password123')

        // Act
        const result = passwordNoSpaces.isPasswordSame(passwordWithSpaces)

        // Assert
        expect(result).toBe(true)

    })


    test('isPasswordSame_should_return_true_if_both_passwords_are_the_same', () => {
        // Arrange
        const password1 = new Password('supersecretpassword123')
        const password2 = new Password('supersecretpassword1234')

        // Act
        const result = password1.isPasswordSame(password2)

        // Assert
        expect(result).toBe(false)

    })

    test('missing_numbers_in_password_should_throw_an_error', () => {
        // Arrange
        const passwordWithOutNumber = 'superSecretPassword'

        // Act
        // Assert
        expect(() => {
            new Password(passwordWithOutNumber)
        }).toThrow('No number found')
    })

    test('password_length_less_than_12_is_not_allowed', () => {
        // Arrange
        const passwordToShort = 'shortPW1'

        // Act
        // Assert
        expect(() => {
            new Password(passwordToShort)
        }).toThrow('Too short password')
    })

    // never contains number

    // to short password
    test('isTooShort_should_not_allow_a_password_with_less_than_12_characters', () => {
        // Arrange
        const passwordElevenCharacters = new Password('secret12345')

        // Act
        expect(() => {
            new Password(passwordElevenCharacters)
        }).toThrow('Too short password')

        // Assert
    })

    // very short

    // wrong hashing algo

    // wrong message
    //Add your tests here
})