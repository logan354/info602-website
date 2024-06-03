import express from "express";
import sequelize from "../database/database.js";

const router = express.Router();

/** REQUEST OBJECTS */

/**
 * Menu Object
 * name
 * description
 */

// Get
router.get("/", async (req, res) => {
    try {
        const menuRaw = await sequelize.model("Menu_Table").findAll();

        if (!menuRaw) {
            return res.status(204).json([]);
        }

        const menu = menuRaw.map((x) => x.dataValues);

        res.status(200).json(menu);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});

// Get (by id)
// This functionality is not needed

// Create
// This functionality is not needed

// Update
// This functionality is not needed

// Delete
// This functionality is not needed

export default router;