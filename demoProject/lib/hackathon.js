function hackathon() {
    return new Promise((resolve, reject) => {

        var developers = Array.from(arguments),
            aPromises = []

        for (const developer of developers) {
            aPromises.push(developer.code())
        }

        Promise.all(aPromises).then((values) => {
            resolve(values.join('\n'))
        })

    }).then(function (success) {
        return success
    }, function (error) {
        return error
    })
}

module.exports = hackathon