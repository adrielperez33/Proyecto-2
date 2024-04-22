const Movies = require("../middlewares/classMovies");
const User = require("../models/Movie");

module.exports = {
    getPeliculas: async () => {
        const users = await User.find();
        return users;
    } 
};
