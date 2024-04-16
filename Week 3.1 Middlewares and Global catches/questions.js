// Basic schema validation

// const express = require('express');
// const zod = require('zod');

// const app = express();

// const schema = zod.object({
//     name: zod.string(),
//     age: zod.number(),
//     email: zod.string(),
// })

// app.use(express.json());

// app.post('/zod-validation', (req, res) => {
//     const name = req.body.name;
//     const age = req.body.age;
//     const email = req.body.email

//     const response = schema.safeParse({name, age, email})

//     if(!response.success) {
//         res.status(411).json({
//             msg: 'Your inputs are wrong!'
//         })
//     } else{
//         res.send({
//             response
//         })
//     }

// })

// app.listen(3000, (req, res) => {
//     console.log('Server app listening on post 3000...')
// })

// Nested Schema Validation

// const express = require("express");
// const zod = require("zod");

// const app = express();

// const schema = zod.object({
//   brand: zod.string(),
//   model: zod.string(),
//   year: zod.number(),
//   owner: zod.object({
//     name: zod.string(),
//     age: zod.number(),
//   }),
// });

// app.use(express.json());

// app.post("/car-becho", (req, res) => {
//   const brand = req.body.brand;
//   const model = req.body.model;
//   const year = req.body.year;
//   const owner = req.body.owner;

//   const response = schema.safeParse({ brand, model, year, owner });

//   if (!response.success) {
//     res.status(411).json({
//       msg: "Somethings up with the inputs!",
//     });
//   } else {
//     res.send({
//       response,
//     });
//   }
// });

// app.listen(3000, (req, res) => {
//     console.log('Server app listening on port 3000...')
// })

// Custom Validation Logic

// const express = require("express");
// const zod = require("zod");

// const app = express();

// const schema = zod.object({
//   email: zod.string(),
//   password: zod.string().refine((value) => {
//     if (value.length < 8) {
//       throw new Error("Password must be at least 8 characters long!");
//     }
//     if (!/[A-Z]/.test(value)) {
//       throw new Error("Password must contain at least one uppercase letter");
//     }
//     if (!/[^A-Za-z0-9]/.test(value)) {
//       throw new Error("Password must contain at least one special character");
//     }
//     return true;
//   }),
// });

// app.use(express.json());

// app.post("/password-validation", (req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;

//   const response = schema.safeParse({email, password})

//   if(!response.success) {
//     res.status(411).json({
//         msg: 'Your inputs are wrong!'
//     })
//   } else{
//     res.send({
//         response
//     })
//   }
// });


// app.listen(3000, (req, res) => {
//     console.log('Server app listening on port 3000...')
// })


// Array Validation

// const express = require('express');
// const zod = require('zod');


// const app = express();

// const schema = zod.array(zod.number()).min(3);

// app.use(express.json())

// app.post('/array-validation', (req, res) => {
//     const array = req.body.array;
// const response = schema.safeParse(array)

// if(!response.success) {
//     res.status(411).json({
//         msg: 'somethings up with your inputs'
//     })
// } else{
//     res.send({
//         response
//     })
// }
// })

// app.listen(3000, (req, res) => {
//     console.log('Server app listening on port 3000...')
// })


// Optional and Nullable values

const express = require('express');
const zod = require('zod');

const app = express();


const schema = zod.object({
    name: zod.string(),
    price: zod.number(),
    description: zod.string().optional()
})

app.use(express.json());

app.post('/optional-validation', (req, res) => {
    const product = req.body.product;
    const response = schema.safeParse(product)

    if(!response.success) {
        res.status(411).json({
            msg: 'Your inputs are wrong!'
        })
    } else{
        res.send({
            response
        })
    }
})

app.listen(3000, (req, res) => {
    console.log('Server app listening on port 3000...')
})