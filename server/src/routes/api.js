import express from "express";

const router = express.Router();

// Get
router.get("/", (req, res) => {
    res.sendStatus(200);
});

export default router;