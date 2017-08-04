export default ({ request, reply }) => {
    const { query } = request
    
    if(query['hub.mode'] === 'subscribe') {
        if(query['hub.verify_token'] === 'ciulbot') {
            reply(request.query['hub.challenge']).code(200)
        } else {
            reply().code(403)
        }
    }

    return ({ request, reply })
}