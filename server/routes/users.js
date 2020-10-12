const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.patch("/me", async function(req, res, next) {
    try {
        const dbResult = await User.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(dbResult);
    } catch (error) {
        console.log(error);
        next(error);
    }
});

module.exports = router;