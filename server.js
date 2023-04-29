const express = require("express");
const app = express();
const apiRoutes = require("./Develop/Routes/API_Routes/index");
const htmlRoutes = require("./Develop/Routes/HTML_Routes/index");

const PORT = process.env.PORT || 3001;
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


app.listen(PORT, () => 
console.log(`Server running at http://localhost:${PORT}`));