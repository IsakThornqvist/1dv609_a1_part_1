
// Select one of the Password versions to test

// import { Password } from '../src/BugDoesNotHash'
// import { Password } from '../src/BugDoesNotTrim'
// import { Password } from '../src/BugisPasswordAlwaysSame'
// import { Password } from '../src/BugMissingNumberCheck'
// import { Password } from '../src/BugMissingPasswordCheck'
// import { Password } from '../src/BugNeverContainsNumbers'
// import { Password } from '../src/BugToShortPassword'
// import { Password } from '../src/BugVeryShort'
// import { Password } from '../src/BugWrongHashingAlgorithm'
// import { Password } from '../src/BugWrongMessage'
 import { Password } from '../src/Correct'

describe('Password class, test suite', () => {
    //put constants here to increase readability
    
    beforeEach(() => {
        //password = new Password()
    })

        test('getPassWordHash_should_return_the_hashed_password', () => {
        
            // Arrange
            const superSecretPassword = 'secret123password123'
            const password = new Password(superSecretPassword)

            // Act
            const afterHash = password.getPasswordHash()

            // Assert
            expect(afterHash).not.toBe(superSecretPassword)
    })
    //Add your tests here
});