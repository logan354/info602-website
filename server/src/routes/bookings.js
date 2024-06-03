import express from "express";
import sequelize from "../database/database.js";

const router = express.Router();

/**
 * Booking Object
 * userId
 * bookingType
 * createdAt
 * date
 * location
 * guests
 * notes
 * status
 */

/**
 * Booking.status
 * PENDING
 * OPEN
 * CLOSED
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
            const booking = await getFullBooking(bookingsRaw[i].dataValues);
            bookings.push(booking);
        }

        res.status(200).json(bookings);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});

// Get <id>
router.get("/:id", async (req, res) => {
    if (isNaN(parseInt(req.params.id))) {
        return res.sendStatus(400);
    }

    try {
        const bookingRaw = await sequelize.model("Booking_Table").findOne({
            where: {
                Booking_Table_id: req.params.id
            }
        });

        if (!bookingRaw) {
            return res.sendStatus(400);
        }

        const booking = await getFullBooking(bookingRaw.dataValues);

        res.status(200).json(booking);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});

// Create
router.post("/", async (req, res) => {
    const booking = req.body.booking;
    const menuIds = req.body.menuIds;

    if (!booking || !menus) {
        return res.status(400);
    }

    try {
        const bookingRaw = await sequelize.model("Booking_Table").create({
            User_Table_id: booking.userId,
            Booking_Type_Table_id: booking.bookingTypeId,
            Booking_Table_createdAt: new Date().toJSON(),
            Booking_Table_date: booking.date,
            Booking_Table_location: booking.location,
            Booking_Table_guests: booking.guests,
            Booking_Table_notes: booking.notes,
            Booking_Table_status: "PENDING"
        });

        for (let i = 0; i < menuIds; i++) {
            await sequelize.model("Booking_Menu_Table").create({
                Booking_Table_id: bookingRaw.dataValues.Booking_Table_id,
                Menu_Table_id: menuIds[i].Menu_Table_ids
            });
        }

        res.status(201);
    }
    catch (e) {
        res.status(500);
    }
});

// Update


// Delete
// This functionality is not needed

async function getFullBooking(booking) {
    const fullBooking = {}

    // Booking
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

    // Menu Many to Many Relation
    // Booking Menu
    const bookingMenusRaw = await sequelize.model("Booking_Menu_Table").findAll({
        where: {
            Booking_Table_id: booking.Booking_Table_id
        }
    });

    const bookingMenus = bookingMenusRaw.map((x) => x.dataValues);

    // Menu
    const menus = [];

    for (let i = 0; i < bookingMenus.length; i++) {
        const menuRaw = await sequelize.model("Menu_Table").findOne({
            where: {
                Menu_Table_id: bookingMenus[i].Menu_Table_id
            }
        });

        const menu = menuRaw.dataValues;
        menus.push(menu);
    }

    fullBooking.menus = menus;

    return fullBooking;
}

export default router;