let backend = "http://localhost:8081/"
let loginEndpoint = "https://bancadigital.azurewebsites.net"


console.log({ backend, loginEndpoint })

let config = {
    backEndpoint: backend,
    frontEndpoint: loginEndpoint
};

module.exports = config;