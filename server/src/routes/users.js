import express from "express";
import sequelize from "../database/database.js";

const router = express.Router();

/**
 * User Object
 * username
 * password
 * firstName
 * lastName
 * email
 * phone
 */

// Get
// Querys: username
router.get("/", async (req, res) => {
    try {
        const usersRaw = await sequelize.model("User_Table").findAll();

        if (!usersRaw) {
            return res.status(204).json([]);
        }

        const users = usersRaw.map((x) => x.dataValues);

        res.status(200).json(users);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});

// Get (by id)
router.get("/:username", async (req, res) => {
    try {
        const usersRaw = await sequelize.model("User_Table").findAll({
            where: {
                User_Table_username: req.params.username
            }
        });

        if (!usersRaw) {
            return res.sendStatus(400);
        }

        const users = usersRaw.map((x) => x.dataValues);

        res.status(200).json(users);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});

// Create
router.post("/", async (req, res) => {
    const user = req.body.user;

    if (!user) {
        return res.sendStatus(400);
    }

    try {
        await sequelize.model("User_Table").create({
            User_Table_username: user.username,
            User_Table_password: user.password,
            User_Table_firstName: user.firstName,
            User_Table_lastName: user.lastName,
            User_Table_email: user.email,
            User_Table_phone: user.phone
        });
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});

// Update
// This functionality is not needed

// Delete
// This functionality is not needed

export default router;