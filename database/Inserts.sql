USE Rasai_DB;
GO

INSERT INTO User_Table (User_Table_username, User_Table_password, User_Table_firstName, User_Table_lastName, User_Table_email, User_Table_phone, User_Table_isAdmin)
VALUES
('Rasai', 'youshallnotpass', 'Rasai', 'Catering', 'contact@rasaicatering.com', '1234567890', 1),
('kperera', 'srilanka123', 'Kamal', 'Perera', 'kamal.perera@example.lk', '0771234567', 0),
('dmendis', 'lankapass', 'Dilani', 'Mendis', 'dilani.mendis@example.lk', '0777654321', 0),
('nfernando', 'passwordSL', 'Nimal', 'Fernando', 'nimal.fernando@example.lk', '0711231234', 0),
('sjayawardena', 'supersecure', 'Saman', 'Jayawardena', 'saman.jayawardena@example.lk', '0704321432', 0),
('gwijesinghe', 'cater123', 'Gayan', 'Wijesinghe', 'gayan.wijesinghe@example.lk', '0755555555', 0),
('amunasinghe', 'password123', 'Amara', 'Munasinghe', 'amara.munasinghe@example.lk', '0761234567', 0),
('rwije', 'securepass', 'Ruwan', 'Wijekoon', 'ruwan.wijekoon@example.lk', '0717654321', 0),
('kfernando', 'fernando99', 'Kasun', 'Fernando', 'kasun.fernando@example.lk', '0721231234', 0);
GO

Select * from User_Table;
GO

INSERT INTO Menu_Table (Menu_Table_name, Menu_Table_description)
VALUES
('The Village Menu', ' '),
('The Hungry Lankan', ' '),
('Traditional Yellow Rice', ' '),
('Speciality Biriyani', ' '),
('Solely Vegetarian', ' '),
('Dutch Lamprais', ' '),
('String Hopper Menu', ' '),
('Roti Menu', ' '),
('Coconut Milk Rice', ' '),
('Finger Food Palette', ' '),
('Speciality Dishes', ' '),
('Desserts', ' '),
('Other', ' ');
GO

Select * from Menu_Table;
GO

INSERT INTO Booking_Type_Table (Booking_Type_Table_name)
VALUES
('Wedding'),
('Corporate Event'),
('Birthday Party'),
('Conference'),
('Private Dinner'),
('Other');
GO

Select * from Booking_Type_Table;
GO

INSERT INTO Booking_Table (User_Table_id, Booking_Type_Table_id, Booking_Table_createdAt, Booking_Table_date, Booking_Table_location, Booking_Table_guests, Booking_Table_notes, Booking_Table_status)
VALUES
(1, 1, '2024-01-01', '2024-06-15', 'Galle Face Hotel', 150, 'Traditional wedding ceremony', 'OPEN'),
(2, 3, '2024-02-01', '2024-07-20', 'Mount Lavinia Hotel', 50, 'Birthday celebration with close family and friends', 'PENDING'),
(3, 4, '2024-03-01', '2024-08-10', 'Shangri-La Colombo', 300, 'Annual business conference', 'OPEN'),
(4, 2, '2024-04-01', '2024-09-25', 'Cinnamon Grand', 100, 'Corporate event with international guests', 'CLOSED'),
(5, 5, '2024-05-01', '2024-10-05', 'Private Beach Villa', 20, 'Private dinner for high-profile clients', 'OPEN'),
(1, 3, '2024-06-01', '2024-11-15', 'The Kingsbury', 100, 'Birthday celebration', 'OPEN'),
(2, 2, '2024-07-01', '2024-12-20', 'Hilton Colombo', 250, 'Corporate annual meeting', 'PENDING'),
(3, 4, '2024-08-01', '2025-01-10', 'Jetwing Blue', 150, 'Product launch event', 'OPEN'),
(6, 1, '2024-09-01', '2025-02-25', 'Paradise Road The Villa Bentota', 200, 'Wedding celebration', 'OPEN'),
(7, 5, '2024-10-01', '2025-03-05', 'Heritance Kandalama', 30, 'Private dinner with close friends', 'PENDING'),
(8, 3, '2024-11-01', '2025-04-10', 'Galadari Hotel', 80, 'Birthday party for a child', 'OPEN'),
(5, 4, '2024-12-01', '2025-05-15', 'Cinnamon Lakeside', 400, 'Business conference', 'OPEN'),
(4, 2, '2025-01-01', '2025-06-20', 'Amaya Beach', 120, 'Corporate retreat', 'CLOSED'),
(1, 5, '2025-02-01', '2025-07-25', 'Galle Face Hotel', 25, 'Private dinner for executives', 'OPEN'),
(3, 1, '2025-03-01', '2025-08-30', 'Mount Lavinia Hotel', 175, 'Wedding reception', 'OPEN');
GO

Select * from Booking_Table;
GO

INSERT INTO Booking_Menu_Table (Booking_Table_id, Menu_Table_id)
VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(1, 3),
(2, 4),
(3, 1),
(4, 5),
(5, 2),
(15, 1),
(13, 2),
(10, 3),
(12, 4),
(11, 5),
(14, 3),
(9, 4),
(7, 1),
(8, 5),
(12, 2),
(6, 2),
(4, 3),
(3, 4),
(11, 1),
(2, 3);
GO

Select * from Booking_Menu_Table;
GO