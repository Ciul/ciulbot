export default ({ request, reply }) => {
    const { payload: { object, entry: entries } } = request
    
    if(object === 'page') {
        // entries.forEach((entry) => {
        //     const pageID = entry.id
        //     const time   = entry.time
            
        //     entry.messaging.forEach((event) => {
        //         if(event.message) {
        //             console.log(`Received message for user ${event.sender.id} and page ${event.recipient.id} at ${event.timestamp} with message: ${event.message}`)
        //         }
        //     })
        // })

        reply().code(200)
    }
    

    return ({ request, reply })
}