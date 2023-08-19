import express from "express"

const app = express()
const PORT = process.env.PORT || 9000;

app.get("/", (req, res) => {
    return res.status(200).send("Hello World!")
})


app.listen(PORT, () => {
    console.log(`😃 Express Server is Listening at ${PORT}`)
})

