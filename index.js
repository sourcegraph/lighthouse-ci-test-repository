// This file is loaded in Lighthouse CI performance tests

const tokenA = 'Hello'
const tokenB = 'World!'

/** Log a 'Hello' message to the console */
const sayHello = () => {
    const message = `${tokenA} ${tokenB}`
    console.log(message);
}
