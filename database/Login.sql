-- Create login
CREATE LOGIN RasaiBE WITH PASSWORD = 'youshallnotpass';

-- Add login to the sysadmin server role. This allows it to work with sequilize
EXECUTE sp_addsrvrolemember 'RasaiBE', 'sysadmin';

-- Use your desired database
USE Rasai_DB;

-- Add the login as a db_datareader and db_datawriter in the database
CREATE USER RasaiBE FOR LOGIN RasaiBE;
ALTER ROLE db_datareader ADD MEMBER RasaiBE;
ALTER ROLE db_datawriter ADD MEMBER RasaiBE;