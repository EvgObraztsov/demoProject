var hackathon = require('../lib/hackathon.js')
const Developer = require('../lib/developer.js')
const expect = require('chai').expect

describe('Hackathon', () => {

    it("should return a Promise which resolves with a single String", () => {

        var developers = 
        [new Developer({ name: 'Nicole', language: 'nodejs' }),
        new Developer({ name: 'Shannon', language: 'swift' }),
        new Developer({ name: 'John', language: 'java' }),
        new Developer({ name: 'Pete', language: 'python' }),
        new Developer({ name: 'Anna', language: 'abap' }),
        new Developer({ name: 'Robert', language: 'rust' })]

        return hackathon(...developers).then(result => {
            console.log(result)
            expect(result).to.eq('console.log("Hello, Nicole!")\nUnsupported language: swift\nSystem.out.println("Hello, John!")\nprint("Hello, Pete!")\nUnsupported language: abap\nUnsupported language: rust')
        })

    })

})