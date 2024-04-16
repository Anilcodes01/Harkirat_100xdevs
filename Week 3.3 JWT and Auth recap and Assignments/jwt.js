const jwt = require('jsonwebtoken');

const value = {
    name: 'Anil',
    accountNumber: 123123123
}

const token = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQW5pbCIsImFjY291bnROdW1iZXIiOjEyMzEyMzEyMywiaWF0IjoxNzEzMjg4MDAyfQ.2xcXSvx7PIz3uj5vWLvGkabcJTAlf9FOMJAGzxyn5YU", "secret");

console.log(token)
