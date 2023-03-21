const {
    registerUser,
    loginUser,
    currentUser
} = require("../controller/userController");
const validateToken = require("../middleWare/validateTokenHandler");

module.exports = app => {
    app.post("/register", registerUser);
    app.post("/login",loginUser);
    app.get("/current", validateToken, currentUser)
     
}