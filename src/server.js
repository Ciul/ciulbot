import Hapi from 'hapi'
import Blipp from 'blipp'
import bot from './bot'

const server = new Hapi.Server()
server.connection({
    port: 9000,
    host: 'localhost'
})

async function init() {
    await server.register({
        register: Blipp
    })
    
    await bot(server)

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