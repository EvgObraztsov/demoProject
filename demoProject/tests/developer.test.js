const Developer = require('../lib/developer.js')
const expect = require('chai').expect

describe('Developer', () => {

    describe('constructor', () => {
        it('should accept a single Object with two properties: name and language', () => {
            var jObject = { name: 'Nicole', language: 'nodejs' }

            const developer = new Developer(jObject)

            expect(developer.name).to.eq('Nicole')
            expect(developer.language).to.eq('nodejs')
        })

        it('the class should provide respective getter and setter methods', () => {

            var jObject = { name: 'Nicole', language: 'nodejs' }

            const developer = new Developer(jObject)

            developer.setName('John')
            developer.setLanguage('java')

            expect(developer.name).to.eq('John')
            expect(developer.language).to.eq('java')
            expect(developer.getName()).to.eq('John')
            expect(developer.getLanguage()).to.eq('java')

        })

        it("code()/name: Nicole, language: nodejs", () => {

            var developer = new Developer({ name: 'Nicole', language: 'nodejs' })

            return developer.code().then(result => {
                console.log(result)
                expect(result).to.eq('console.log("Hello, Nicole!")')
            })

        })

        it("code()/name: John, language: java", () => {

            var developer = new Developer({ name: 'John', language: 'java' })

            return developer.code().then(result => {
                console.log(result)
                expect(result).to.eq('System.out.println("Hello, John!")')
            })

        })

        it("code()/name: Pete, language: python", () => {

            var developer = new Developer({ name: 'Pete', language: 'python' })

            return developer.code().then(result => {
                console.log(result)
                expect(result).to.eq('print("Hello, Pete!")')
            })

        })

        it("code()/name: Anna, language: abap", () => {

            var developer = new Developer({ name: 'Anna', language: 'abap' })

            return developer.code().then(result => {
                console.log(result)
                expect(result).to.eq('Unsupported language: abap')
            })

        })

        it("code()/name: Shannon, language: swift", () => {

            var developer = new Developer({ name: 'Shannon', language: 'swift' })

            return developer.code().then(result => {
                console.log(result)
                expect(result).to.eq('Unsupported language: swift')
            })

        })

        it("code()/name: Robert, language: rust", () => {

            var developer = new Developer({ name: 'Robert', language: 'rust' })

            return developer.code().then(result => {
                console.log(result)
                expect(result).to.eq('Unsupported language: rust')
            })

        })
    })
})