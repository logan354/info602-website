/*
	This script is for Assignment 2 
	Business Interpersonal Communications.
	Server	DESKTOP-2D6F3SO\SQLEXPRESS
*/

-- The creation of the database.
CREATE DATABASE Rasai_DB;
GO

USE Rasai_DB;
GO

CREATE TABLE Booking_Type_Table(
Booking_Type_Table_id INT IDENTITY(1,1) PRIMARY KEY,
Booking_Type_name VARCHAR(30),
);
GO

CREATE TABLE Menu_Table(
Menu_Table_id INT IDENTITY(1,1) PRIMARY KEY,
Menu_Table_name VARCHAR(30),
Menu_Table_description VARCHAR(280)
);
GO

CREATE TABLE User_Table(
User_Table_id INT IDENTITY(1,1) PRIMARY KEY,
User_Table_username VARCHAR(40),
User_Table_password VARCHAR(40),
User_Table_firstName VARCHAR(30),
User_Table_lastName VARCHAR(30),
User_Table_email VARCHAR(50),
User_Table_phone VARCHAR(12)
);
GO

CREATE TABLE Booking_Table(
Booking_Table_id INT IDENTITY(1,1) PRIMARY KEY,
User_Table_id INT,
FOREIGN KEY (User_Table_id) REFERENCES User_Table(User_Table_id),
Booking_Type_Table_id INT,
FOREIGN KEY (Booking_Type_Table_id) REFERENCES Booking_Type_Table(Booking_Type_Table_id),
Booking_Table_createdAt date,
Booking_Table_date date,
Booking_Table_location VARCHAR(50),
Booking_Table_guests INT,
Booking_Table_notes VARCHAR(280),
Booking_Table_status VARCHAR(50)
);
GO

CREATE TABLE Booking_Menu_Table(
Booking_Table_id INT,
Menu_Table_id INT,
PRIMARY KEY (Booking_Table_id, Menu_Table_id),
FOREIGN KEY (Booking_Table_id) REFERENCES Booking_Table(Booking_Table_id),
FOREIGN KEY (Menu_Table_id) REFERENCES Menu_Table(Menu_Table_id)
);
GO

INSERT INTO Booking_Type_Table (Booking_Type_name)
VALUES
('Wedding'),
('Birthday'),
('Conference'),
('Corporate Event'),
('Private Dinner');
GO

INSERT INTO Menu_Table (Menu_Table_name, Menu_Table_description)
VALUES
('Rice and Curry Feast', 'A traditional Sri Lankan spread with rice, a variety of curries, sambols, and pickles.'),
('Seafood Special', 'A selection of Sri Lankan seafood dishes including prawn curry, fish ambul thiyal, and devilled squid.'),
('Vegetarian Spread', 'A variety of Sri Lankan vegetarian dishes including dhal curry, jackfruit curry, and mallung.'),
('Hoppers Night', 'A mix of Sri Lankan hoppers (appa), string hoppers (idiyappam), and accompaniments like pol sambol and lunu miris.'),
('BBQ Sri Lankan Style', 'Grilled meats and vegetables with Sri Lankan spices and side dishes.');
GO

Select * from Menu_Table;

INSERT INTO User_Table (User_Table_userName, User_Table_password, User_Table_firstName, User_Table_lastName, User_Table_email, User_Table_phone)
VALUES
('kperera', 'srilanka123', 'Kamal', 'Perera', 'kamal.perera@example.lk', '0771234567'),
('dmendis', 'lankapass', 'Dilani', 'Mendis', 'dilani.mendis@example.lk', '0777654321'),
('nfernando', 'passwordSL', 'Nimal', 'Fernando', 'nimal.fernando@example.lk', '0711231234'),
('sjayawardena', 'supersecure', 'Saman', 'Jayawardena', 'saman.jayawardena@example.lk', '0704321432'),
('gwijesinghe', 'cater123', 'Gayan', 'Wijesinghe', 'gayan.wijesinghe@example.lk', '0755555555');
GO

Select * from User_Table;

INSERT INTO Booking_Table (User_Table_id, Booking_Type_Table_id, Booking_Table_createdAt, Booking_Table_date, Booking_Table_location, Booking_Table_guests, Booking_Table_notes, Booking_Table_status)
VALUES
(1, 1, '2024-01-01', '2024-06-15', 'Galle Face Hotel', 150, 'Traditional wedding ceremony', 'Confirmed'),
(2, 2, '2024-02-01', '2024-07-20', 'Mount Lavinia Hotel', 50, 'Birthday celebration with close family and friends', 'Pending'),
(3, 3, '2024-03-01', '2024-08-10', 'Shangri-La Colombo', 300, 'Annual business conference', 'Confirmed'),
(4, 4, '2024-04-01', '2024-09-25', 'Cinnamon Grand', 100, 'Corporate event with international guests', 'Cancelled'),
(5, 5, '2024-05-01', '2024-10-05', 'Private Beach Villa', 20, 'Private dinner for high-profile clients', 'Confirmed');
GO

Select * from Booking_Table;

INSERT INTO Booking_Menu_Table (Booking_Table_id, Menu_Table_id)
VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(1, 3), -- Adding multiple menus for some bookings
(2, 4),
(3, 1),
(4, 5),
(5, 2);
GO

Select * from Booking_Menu_Table;

INSERT INTO User_Table (User_Table_userName, User_Table_password, User_Table_firstName, User_Table_lastName, User_Table_email, User_Table_phone)
VALUES
('amunasinghe', 'password123', 'Amara', 'Munasinghe', 'amara.munasinghe@example.lk', '0761234567'),
('rwije', 'securepass', 'Ruwan', 'Wijekoon', 'ruwan.wijekoon@example.lk', '0717654321'),
('kfernando', 'fernando99', 'Kasun', 'Fernando', 'kasun.fernando@example.lk', '0721231234');
GO

Select * from User_Table;
GO

INSERT INTO Booking_Table (User_Table_id, Booking_Type_Table_id, Booking_Table_createdAt, Booking_Table_date, Booking_Table_location, Booking_Table_guests, Booking_Table_notes, Booking_Table_status)
VALUES
(1, 2, '2024-06-01', '2024-11-15', 'The Kingsbury', 100, 'Birthday celebration', 'Confirmed'),
(2, 3, '2024-07-01', '2024-12-20', 'Hilton Colombo', 250, 'Corporate annual meeting', 'Pending'),
(3, 4, '2024-08-01', '2025-01-10', 'Jetwing Blue', 150, 'Product launch event', 'Confirmed'),
(6, 1, '2024-09-01', '2025-02-25', 'Paradise Road The Villa Bentota', 200, 'Wedding celebration', 'Confirmed'),
(7, 5, '2024-10-01', '2025-03-05', 'Heritance Kandalama', 30, 'Private dinner with close friends', 'Pending'),
(8, 2, '2024-11-01', '2025-04-10', 'Galadari Hotel', 80, 'Birthday party for a child', 'Confirmed'),
(5, 3, '2024-12-01', '2025-05-15', 'Cinnamon Lakeside', 400, 'Business conference', 'Confirmed'),
(4, 4, '2025-01-01', '2025-06-20', 'Amaya Beach', 120, 'Corporate retreat', 'Cancelled'),
(1, 5, '2025-02-01', '2025-07-25', 'Galle Face Hotel', 25, 'Private dinner for executives', 'Confirmed'),
(3, 1, '2025-03-01', '2025-08-30', 'Mount Lavinia Hotel', 175, 'Wedding reception', 'Confirmed');
GO

Select * from Booking_Table;
GO

INSERT INTO Booking_Menu_Table (Booking_Table_id, Menu_Table_id)
VALUES
(20, 1),
(21, 2),
(22, 3),
(23, 4),
(24, 5),
(20, 3), -- Adding multiple menus for some bookings
(21, 4),
(22, 1),
(23, 5),
(24, 2),
(25, 2),
(26, 3),
(27, 4),
(28, 1),
(29, 3);
GO

Select * from Booking_Menu_Table;
GO
