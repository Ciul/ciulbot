import hooks from './hooks'

const botPlugin = (server, options, next) => {

    server.route({
        path:   '/webhook',
        method: 'GET',
        config: {
            description: 'Bot GET entry point',
            handler: (request, reply) => {
                hooks({ request, reply })
            }
        }
    })

    server.route({
        path:   '/webhook',
        method: 'POST',
        config: {
            description: 'Bot POST entry point',
            handler: (request, reply) => {
                reply().code(200)
            }
        }
    })

    next()
}

botPlugin.attributes = {
    name:       'bot',
    version:    '1.0.0'
}

export default (server) =>
    server.register({
        register: botPlugin,
        options: {}
    })
