import express from "express";
import sequelize from "../database/database.js";

const router = express.Router();

/**
 * Request Objects
 * 
 * Booking
 * user_id
 * booking_type_id
 * created_at
 * date
 * location
 * guests
 * notes
 * status
 * menu_ids: []
 * 
 * User
 * username
 * password
 * first_name
 * last_last
 * email
 * phone
 * 
 * Menu Object
 * name
 * description
 * 
 * BookingUpdate
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

// GET /
router.get("/", async (req, res) => {
    try {
        const bookingsRaw = await sequelize.model("Booking_Table").findAll();

        if (!bookingsRaw || !bookingsRaw.length) {
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

// GET /:id
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

// GET /bookingTypes
router.get("/bookingTypes", async (req, res) => {
    try {
        const bookingTypesRaw = await sequelize.model("Booking_Type_Table").findAll();

        if (!bookingTypesRaw || !bookingTypesRaw.length) {
            return res.status(204).json([]);
        }

        const bookingTypes = bookingTypesRaw.map((x) => x.dataValues);

        res.status(200).json(bookingTypes);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});

// GET /bookingTypes/:id
router.get("bookingTypes/:id", async (req, res) => {
    if (isNaN(parseInt(req.params.id))) {
        return res.sendStatus(400);
    }

    try {
        const bookingTypeRaw = await sequelize.model("Booking_Type_Table").findOne({
            where: {
                Booking_Type_Table_id: req.params.id
            }
        });

        if (!bookingTypeRaw) {
            return res.sendStatus(400);
        }

        const bookingType = bookingTypeRaw.dataValues;

        res.status(200).json(bookingType);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});

// POST /
router.post("/", async (req, res) => {
    const booking = req.body.booking;

    if (!booking) {
        return res.sendStatus(400);
    }

    try {
        const bookingRaw = await sequelize.model("Booking_Table").create({
            User_Table_id: booking.user_id,
            Booking_Type_Table_id: booking.booking_type_id,
            Booking_Table_createdAt: new Date().toJSON(),
            Booking_Table_date: booking.date,
            Booking_Table_location: booking.location,
            Booking_Table_guests: booking.guests,
            Booking_Table_notes: booking.notes,
            Booking_Table_status: "PENDING"
        });

        // Many to Many Relation
        for (let i = 0; i < booking.menu_ids; i++) {
            await sequelize.model("Booking_Menu_Table").create({
                Booking_Table_id: bookingRaw.dataValues.Booking_Table_id,
                Menu_Table_id: booking.menu_ids[i]
            });
        }

        res.sendStatus(200);

        // Email Service Here
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});

// PUT /:id
router.put("/:id", async (req, res) => {
    if (isNaN(parseInt(req.params.id))) {
        return res.sendStatus(400);
    }

    const bookingUpdate = req.body.booking;

    if (!booking) {
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

        // BookingUpdate
        const bookingUpdateData = {}
        if (booking.date) bookingUpdateData.Booking_Table_date = bookingUpdate.date;
        if (ooking.location) bookingUpdateData.Booking_Table_location = bookingUpdate.location;
        if (booking.guests) bookingUpdateData.Booking_Table_guests = bookingUpdate.guests;
        if (booking.notes) bookingUpdateData.Booking_Table_notes = bookingUpdate.notes;
        if (booking.status) bookingUpdateData.Booking_Table_status = bookingUpdate.status;

        await bookingRaw.update(bookingUpdateData);

        // Cannot Update Booking Menus

        res.sendStatus(200);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});


// DELETE
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