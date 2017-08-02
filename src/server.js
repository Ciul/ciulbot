import Hapi from 'hapi'

const server = new Hapi.Server()
server.connection({
    port: 9000,
    host: 'localhost'
})

async function init() {
    const blipp = await import('./blipp')
    blipp.default(server)

    return server;
}

init()
    .then((server) => {
        server.start((err) => {
            if(err) {
                throw err
            }

            console.log(`Server running at: ${server.info.uri}`)
        })
    })