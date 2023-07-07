require("dotenv").config()


const express = require("express")
const cors = require("cors")
//reconoce la connecion
const dbConnect = require ('./config/mongo')


const app = express()
app.use(cors())
app.use(express.json())

app.use(express.static("storage"))



const port = process.env.PORT || 3501

//app.use("/api", require("./routes/tracks"))
app.use("/api", require("./routes"))


app.listen( port, () => {
    console.log('tu app esta lista http://localhost:'+port)
})

dbConnect()