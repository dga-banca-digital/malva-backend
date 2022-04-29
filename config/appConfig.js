
// backend
// let backend= process.env.BACK_ENDPOINT
// let loginEndpoint = process.env.LOGIN_ENDPOINT

// if(!backend) {
//     backend = "http://localhost:8081/"
// }
// if(!loginEndpoint) {
//     loginEndpoint = "http://localhost:3000"
// }

let backend = "http://localhost:8081/"
let loginEndpoint = "http://localhost:3000"


console.log({ backend, loginEndpoint })

let config = {
    backEndpoint: backend,
    frontEndpoint: loginEndpoint
};

module.exports = config;