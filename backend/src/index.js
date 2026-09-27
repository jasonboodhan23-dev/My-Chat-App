import express from "express"; 
import "dotenv/config";


const app = express();

app.get("/", (req, res) => {
  res.send("OK!!!!");
});

const PORT = process.env.PORT; 

app.listen(PORT, () => console.log("server is running on port: ", PORT));


