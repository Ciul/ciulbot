let p = (next) => ({ request, reply }) => next()

let p1 = (next) => ({ request, reply } = {}) => {
    console.log('P1: ', request, reply)
    
    next()
}

let p2 = (next) => ({ request, reply } = {}) => {
    console.log('P2: ', request, reply)

    // next()
}

let p3 = (next) => ({ request, reply } = {}) => {
    console.log('P3: ', request, reply)

    next()
}

const d = {
    request:    'request',
    reply:      'reply'
}

console.log('---------------------------')
console.log('START')
new Promise((resolve, reject) => {
    p(resolve)(d)
})
    .then(() => {
        
        new Promise((resolve, reject) => {
            p1(resolve)(d)
        })
            .then(() => {
               
                new Promise((resolve, reject) => {
                    p2(resolve)(d)
                })
                    .then(() => {
                       
                        new Promise((resolve, reject) => {
                            p3(resolve)(d)
                        })
                            .then(() => {
                                console.log('all done') 
                            })

                    })

            })

    })

// const applyHandlers = (...handlers) => {
//     const [firstHandler, ...restHandlers] = handlers

//     handlers.reduce(
//         (previous, current, index, h) => {
//             return previous.then(
//                 new Promise((resolve, reject) => {
//                     h[index](resolve)(d)
//                 })
//             )
//         },
//         new Promise((resolve, reject) => firstHandler(resolve)(d))
//     )
// }

console.log('---------------------------')

// applyHandlers(p, p1, p2, p3)