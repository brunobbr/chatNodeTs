import express, { request, response } from 'express';
import "./database";
const app = express();







app.get("/", (request, response) => {
    return response.json({
        message: "HELLO WORLD",
    });
});
app.post("", (request, response) => {

})
app.listen(3333, () => console.log("Server is running"));