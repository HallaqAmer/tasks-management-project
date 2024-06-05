import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import userRoutes from "./routes/userRoutes.js";
import boardRoutes from "./routes/boardRoutes.js";
import listRoutes from "./routes/listRoutes.js";



dotenv.config();


const app= express();

// Data coming from HTML forms
app.use(express.urlencoded({ extended: true }));

// Data coming as JSON - POSTMAN for instace 
app.use(express.json());

//Server app on the port 3000
const port = process.env.PORT || 3000;

app.listen(port,'0.0.0.0', () => {
    
    console.log(`Server running at http://localhost:${port}`);
});



app.get('/', (req, res) => {
    res.json('Welcome to our Tasks Management Back End Server');
});


//use routes in the routes folder
app.use("/api/users",userRoutes);
app.use("/api/boards",boardRoutes);
app.use("/api/lists",listRoutes);


//if api not available
app.use((req,res,err) => {
    console.log(err)
    res.status(404).send('Page not found')
});


export default app;