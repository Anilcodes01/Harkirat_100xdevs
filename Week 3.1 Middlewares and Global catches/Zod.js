const express = require('express');
const zod = require('zod')
const app = express();


// const mySchema = zod.object({
//     email: zod.string(),
//     password: zod.string(),
//     country: zod.literal('IN').or(zod.literal('US')),
//     kidneys: zod.array(zod.number())
// })

const mySchema = zod.array(zod.number())


app.use(express.json());

app.post('/health-checkup', (req, res) => {
const kidneys = req.body.kidneys;
const response = mySchema.safeParse(kidneys)

if(!response.success) {
    res.status(411).json({
        msg: 'Somethings up with your inputs!'
    })
} else{
    res.send({
        response
    })
}

})

app.listen(3000, (req, res) => {
    console.log('Server app listening on post 3000...')
})