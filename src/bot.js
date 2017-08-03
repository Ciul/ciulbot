const botPlugin = (server, options, next) => {

    server.route({
        path:   '/webhook',
        method: 'GET',
        config: {
            description: 'Bot entry main point',
            handler: (request, reply) => {
                reply('HERE')
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
