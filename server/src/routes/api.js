import express from "express";

const router = express.Router();

// Get (all)
router.get("/", (req, res) => {
    res.sendStatus(200);
});

export default router;