const request = {
    one: 1
}

const reply = {
    two: 2
}

const handler1 = ({ request, reply }, next) => {
    console.log('Handler1: ', request, reply)
    
    next()

    return 'handler1'
}

const handler2 = ({ request, reply }, next) => {
    console.log('Handler2: ', request, reply)

    next()

    return 'handler2'
}

const HandlersIterator = ({ request, reply }) => (handlers) => {
    let i = 0
    
    return {
        next: (f) => {
            let done = true, value

            function next() {
                done = false
            }
            
            if(f === undefined) {
                done    = false
                value   = ({ request, reply })
            } else {
                done    = done || (i >= handlers.length)
                value   = !done ? handlers[i++]({ request, reply }, next) : undefined
            }
            console.log('Value: ', value, ' Done: ',  done)

            return {
                done,
                value
            }
        }
    }
}

const run = (...handlers) => (createIterator) => ({ request, reply }) => {
    let task = createIterator({ request, reply })(handlers)
    let result = task.next()
    
    function step() {
        if(!result.done) {
            result = task.next(result.value)
            step()
        }
    }

    step()

}

run(handler1, handler2)(HandlersIterator)({ request, reply })