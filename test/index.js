const p1 = (next) => ({ request, reply } = {}) => {
    console.log('P1: ', request, reply)

    next()
}

const p2 = (next) => ({ request, reply } = {}) => {
    console.log('P2: ', request, reply)

    next()
}

const p3 = (next) => ({ request, reply } = {}) => {
    console.log('P3: ', request, reply)

    next()
}

const whatHandlersReceive = {
    request: {},
    reply: f => f
}

const applyHandlersSolvers = (...handlers) => (payload) => {
    handlers = handlers.slice().reverse()
    const [firstHandler, ...restHandlers] = handlers

    const createPromise = (fn, data) =>
        new Promise((resolve, reject) => {
            fn(resolve)(data)
        })

    const r = restHandlers.reduce((prev, curr, i) => {
        return () =>
            createPromise(curr, payload)
                .then(() => {
                    prev()
                })

    }, () => createPromise(firstHandler, payload))

    return r
}

applyHandlersSolvers(p1, p2, p3)(whatHandlersReceive)()