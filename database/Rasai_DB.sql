/*
	This script is for Assignment 2 
	Business Interpersonal Communications.
*/

-- The creation of the database.
CREATE DATABASE Rasai_DB;
GO

USE Rasai_DB;
GO

CREATE TABLE Booking_Type_Table(
Booking_Type_Table_ID INT IDENTITY(1,1) PRIMARY KEY,
Booking_Type_name VARCHAR(30),
);
GO

CREATE TABLE Menu_Table(
Menu_Table_ID INT IDENTITY(1,1) PRIMARY KEY,
Menu_Table_name VARCHAR(30),
Menu_Table_description VARCHAR(280)
);
GO

CREATE TABLE User_Table(
User_Table_ID INT IDENTITY(1,1) PRIMARY KEY,
User_Table_userName VARCHAR(40),
User_Table_userPassword VARCHAR(40),
User_Table_firstName VARCHAR(30),
User_Table_lastName VARCHAR(30),
User_Table_email VARCHAR(50),
User_Table_phone VARCHAR(12)
);
GO

CREATE TABLE Booking_Table(
Booking_Table_ID INT IDENTITY(1,1) PRIMARY KEY,
User_Table_ID INT,
FOREIGN KEY (User_Table_ID) REFERENCES User_Table(User_Table_ID),
Booking_Type_Table_ID INT,
FOREIGN KEY (Booking_Type_Table_ID) REFERENCES Booking_Type_Table(Booking_Type_Table_ID),
Booking_Table_date date,
Booking_Table_location VARCHAR(50),
Booking_Table_guests INT,
Booking_Table_notes VARCHAR(280),
Booking_Table_status VARCHAR(50)
);
GO

CREATE TABLE Booking_Menu_Table(
Booking_Table_ID INT,
Menu_Table_ID INT,
PRIMARY KEY (Booking_Table_ID, Menu_Table_ID),
FOREIGN KEY (Booking_Table_ID) REFERENCES Booking_Table(Booking_Table_ID),
FOREIGN KEY (Menu_Table_ID) REFERENCES Menu_Table(Menu_Table_ID)
);
GO