//You are going to write tests for the examination.js 

  import { MusicTrack } from "./examination.js"; // Uncomment when Password class is added
 import { expect, jest } from '@jest/globals';



describe('Examination tests', () => {

    beforeEach(() => {

})

    test('placeholder', () => {
        expect(false).toBe(false);
    });

    test('constructor should throw an error if title length is 0', () => {


        const title = ''
        const artist = 'hej'
        const duration = 10

        expect(() => {
           new MusicTrack(title, artist, duration)
        }).toThrow('Title cannot be empty')

    })
    

});