const express = require("express");
const connectDb = require('./config/db');
const auth = require("./middleware/auth");
const app = express();
require("dotenv").config("./.env/")
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", require("./routes/auth"));
app.use("/api", require("./routes/auth"));
app.get("/protected",auth,(req,res)=>{
    return res.status(200).json({...req.User._doc})
});


// app.get("/", (res, req) => {
//     res.send({
//         name:"baljeet SIngh",
//         age: 19
//     });
// }
// );

app.listen(PORT, () => {
    connectDb();
    console.log(`App listening in ${PORT}`);
});