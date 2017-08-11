/*
    A resolver should have the shape:
    const resolver = (next) => ({ request, reply }) => {
        next()
    }

    The resolver should check for request and call reply if he is the one that is going to resolve it.
    Otherwise call next so next resolve can handle it.

    Order of resolvers is important
*/
export default (...resolvers) => (payload) => {
    resolvers = resolvers.slice().reverse()
    const [lastResolver, ...restResolvers] = resolvers

    const createPromise = (fn, store, action) =>
        new Promise((resolve, reject) => fn(resolve)(store, action))

    const r = restResolvers.reduce((prev, curr) =>
        (passedAction) =>
            createPromise(curr, payload, passedAction)
                .then((resolvedAction) => {
                    return prev(resolvedAction)
                })

    ,(passedAction) => createPromise(lastResolver, payload, passedAction))

    return r
}