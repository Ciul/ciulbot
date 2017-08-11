import createMiddlewareStack from '../src/utils/applyresolvers'

const p1 = (next) => (store, action) => {
    console.log('P1: ', store, action)

    next('Action from P1')
}

const p2 = (next) => (store, action) => {
    console.log('P2: ', store, action)

    next('Action from P2')
}

const p3 = (next) => (store, action) => {
    console.log('P3: ', store, action)

    next('Action from P3')
}

const whatHandlersReceive = {
    request: {},
    reply: f => f
}

createMiddlewareStack(p1, p2, p3)(whatHandlersReceive)()