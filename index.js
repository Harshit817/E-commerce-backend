const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')
const app = express()
app.use(express.static(__dirname));
app.get("/*", function (req, res) {
   res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
})
app.use(cors({
    origin: (origin, callback) => {
        callback(null, origin); // Reflect the request origin in the CORS response
    },
    credentials: true
}));
app.use(express.json())
app.use(cookieParser())

app.use("/api",router)

const PORT = 8080 || process.env.PORT


connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connnect to DB")
        // console.log(process.env.MONGODB_URI);
        console.log("Server is running "+PORT)
    })
})
