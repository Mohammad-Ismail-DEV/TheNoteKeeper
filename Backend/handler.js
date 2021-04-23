'use strict'

module.exports = {
    signup: async (event, context) => {
        let newUser = {}
        try {
            newUser = JSON.parse(event.body)
        } catch (jsonError) {
            console.log('The Payload is not in JSON format', jsonError)
            return {
                statusCode: 400,
            }
        }
        if (
            typeof newUser.name === 'undefined' ||
            typeof newUser.email === 'undefined' ||
            typeof newUser.password === 'undefined'
        ) {
            console.log('Missing parameters')
            return {
                statusCode: 400,
            }
        } else {
            User.create({
                username: newUser.name,
                email: newUser.email,
                password: newUser.password,
            })
            console.log('User has been Created')
            return {
                statusCode: 200,
            }
        }
    },
    // login: async (event, context) => {},
    // createNote: async (event, context) => {},
    // comment: async (event, context) => {},
    // getOwn: async (event, context) => {},
    // getAll: async (event, context) => {},
    // update: async (event, context) => {},
    // delete: async (event, context) => {},
}
