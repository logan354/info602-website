import express from "express";
import sequelize from "../database/database.js";

const router = express.Router();

/**
 * Request Objects
 * 
 * Menu
 * name
 * description
 */

// GET /?name
router.get("/", async (req, res) => {
    if (req.query.name) {
        try {
            const menuRaw = await sequelize.model("Menu_Table").findAll({
                where: {
                    Menu_Table_name: req.query.name
                }
            });

            if (!menuRaw || !menuRaw.length) {
                return res.status(204).json([]);
            }

            const menu = menuRaw.map((x) => x.dataValues);

            res.status(200).json(menu);
        }
        catch (e) {
            res.status(500).send(e.message);
        }
    }
    else {
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
    }
});

// GET /:id
router.get("/:id", async (req, res) => {
    if (isNaN(parseInt(req.params.id))) {
        return res.sendStatus(400);
    }
    
    try {
        const menuItemRaw = await sequelize.model("Menu_Table").findOne({
            where: {
                Menu_Table_id: req.params.id
            }
        });

        if (!menuItemRaw) {
            return res.sendStatus(400);
        }

        const menuItem = menuItemRaw.dataValues;

        res.status(200).json(menuItem);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});

// POST
// This functionality is not needed

// PUT
// This functionality is not needed

// DELETE
// This functionality is not needed

export default router;