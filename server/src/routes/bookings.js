import express from "express";
import sequelize from "../database/database.js";

const router = express.Router();

/**
 * Booking Object
 * createdAt
 * date
 * location
 * guests
 * notes
 * status
 */

/**
 * User Object
 * username
 * password
 * firstName
 * lastName
 * email
 * phone
 */

/**
 * Menu Object
 * name
 * description
 */

// Get
router.get("/", async (req, res) => {
    try {
        const bookingsRaw = await sequelize.model("Booking_Table").findAll();

        if (!bookingsRaw) {
            return res.status(204).json([]);
        }

        const bookings = [];

        for (let i = 0; i < bookingsRaw.length; i++) {
            const fullBooking = {}
            
            const booking = bookingsRaw[i].dataValues;
            fullBooking.booking = booking;

            // Booking Type Foregin Key
            const bookingTypeRaw = await sequelize.model("Booking_Type_Table").findOne({
                where: {
                    Booking_Type_Table_id: booking.Booking_Type_Table_id
                }
            });

            const bookingType = bookingTypeRaw.dataValues;
            fullBooking.bookingType = bookingType;

            // User Foregin Key
            const userRaw = await sequelize.model("User_Table").findOne({
                where: {
                    User_Table_id: booking.User_Table_id
                }
            });

            const user = userRaw.dataValues;
            fullBooking.user = user;

            // Menu's Many to Many Relation
            const menusRaw = await sequelize.model("Booking_Menu_Table").findAll({
                where: {
                    Booking_Table_id: booking.Booking_Table_id
                }
            });

            const menus = menusRaw.map((x) => x.dataValues);
            fullBooking.menus = menus;

            bookings.push(fullBooking)
        }

        res.status(200).json(bookings);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});

// Get (by id)
router.get("/:id", async (req, res) => {
    try {
        const usersRaw = await sequelize.model("User_Table").findAll({
            where: { User_Table_username: req.params.username }
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
// This functionality is not built into the website

// Delete
// This functionality is not built into the website

export default router;