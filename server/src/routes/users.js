import express from "express";
import sequelize from "../database/database.js";

const router = express.Router();

/**
 * Request Objects
 * 
 * User
 * username
 * password
 * first_name
 * last_name
 * email
 * phone
 */

// GET /?username
router.get("/", async (req, res) => {
    if (req.query.username) {
        try {
            const usersRaw = await sequelize.model("User_Table").findAll({
                where: {
                    User_Table_username: req.query.username
                }
            });

            if (!usersRaw) {
                return res.status(204).json([]);
            }

            const users = usersRaw.map((x) => x.dataValues);

            res.status(200).json(users);
        }
        catch (e) {
            res.status(500).send(e.message);
        }
    }
    else {
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
    }
});

// GET /:id
router.get("/:id", async (req, res) => {
    if (isNaN(parseInt(req.params.id))) {
        return res.sendStatus(400);
    }
    
    try {
        const userRaw = await sequelize.model("User_Table").findOne({
            where: {
                User_Table_id: req.params.id
            }
        });

        if (!userRaw) {
            return res.sendStatus(400);
        }

        const user = userRaw.dataValues;

        res.status(200).json(user);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});

// POST /
router.post("/", async (req, res) => {
    const user = req.body.user;

    if (!user) {
        return res.sendStatus(400);
    }

    try {
        await sequelize.model("User_Table").create({
            User_Table_username: user.username,
            User_Table_password: user.password,
            User_Table_firstName: user.first_name,
            User_Table_lastName: user.last_name,
            User_Table_email: user.email,
            User_Table_phone: user.phone
        });

        res.sendStatus(200);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});

// PUT
// This functionality is not needed

// DELETE
// This functionality is not needed

export default router;