const express = require("express");
const router = express.Router();
const Item = require("../models/Item");

router.get("/", async function(req, res, next) {
    try {
        const dbResult = await Item.find();
        //console.log(dbResult);
        res.status(200).json(dbResult);
    } catch (error) {
        console.log(error);
        next(error);
    }
});

router.get("/:id", async function(req, res, next) {
    try {
        const dbResult = await Item.findById(req.params.id);
        res.status(200).json(dbResult);
    } catch (error) {
        console.log(error);
        next(error);
    }
});

router.post("/", async function(req, res, next) {
    if (true) { //req.session.currentUser) {
        try {
            //const currentUser = req.session.currentUser._id;
            //req.body.id_user = currentUser;
            console.log(req.body);
            const dbResult = await Item.create(req.body);
            res.status(200).json(dbResult);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
            next(error);
        }
    }
});

router.patch("/:id", async function(req, res, next) {
    //if (req.session.currentUser) {
    try {
        //const currentUser = req.session.currentUser._id;
        //req.body.id_user = currentUser;
        const dbResult = await Item.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.status(200).json(dbResult);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
        next(error);
    }
    // }
});

router.delete("/:id", async function(req, res, next) {
    //if (req.session.currentUser) {
    try {
        const dbResult = await Item.findByIdAndDelete(req.params.id);
        res.status(200).json(dbResult);
    } catch (error) {
        console.log(error);
        next(error);
    }
    //}
});

module.exports = router;