/*
    https://medium.com/@dtipson/creating-an-es6ish-compose-in-javascript-ac580b95104a
*/

const compose = (fn, ...rest) =>
    rest.length === 0 ?
        fn :
        (...args) => fn(compose(...rest)(...args))

export default compose