-- Description: Script to create database RentACar and populate it with test data
-- create database RentACar
CREATE DATABASE RentACar;
GO

-- use database RentACar
USE RentACar;
GO

-- Tables creation

-- create table Vendedor
CREATE TABLE Vendedor (
    ID INT PRIMARY KEY,
    Nombre VARCHAR(50),
    Apellido VARCHAR(50),
    FechaContrato DATE
);

-- create table MarcaAuto
CREATE TABLE MarcaAuto (
    ID INT PRIMARY KEY,
    Nombre VARCHAR(50)
);

-- create table ModeloAuto
CREATE TABLE ModeloAuto (
    ID INT PRIMARY KEY,
    Nombre VARCHAR(50),
    MarcaID INT,
    FOREIGN KEY (MarcaID) REFERENCES MarcaAuto(ID)
);

-- create table Solicitudes
CREATE TABLE Solicitudes (
    ID INT PRIMARY KEY,
    VendedorID INT,
    ModeloID INT,
    FechaSolicitud DATE,
    Precio DECIMAL(10, 2), -- Nuevo campo Precio
    FOREIGN KEY (VendedorID) REFERENCES Vendedor(ID),
    FOREIGN KEY (ModeloID) REFERENCES ModeloAuto(ID)
);

-- Inject test data

-- Insert test records into Vendedor
INSERT INTO Vendedor (ID, Nombre, Apellido, FechaContrato)
VALUES
    (1, 'Juan', 'Perez', '2023-01-01'),
    (2, 'Maria', 'Gomez', '2022-06-15'),
    (3, 'Pedro', 'Lopez', '2022-12-10'),
    (4, 'Laura', 'Rodriguez', '2023-02-28'),
    (5, 'Carlos', 'Gonzalez', '2023-03-10'),
    (6, 'Luis', 'Hernandez', '2023-04-20'),
    (7, 'Ana', 'Martinez', '2023-05-15');

-- Insert test records into MarcaAuto
INSERT INTO MarcaAuto (ID, Nombre)
VALUES
    (1, 'Toyota'),
    (2, 'Chevrolet'),
    (3, 'Ford'),
    (4, 'Honda'),
    (5, 'Volkswagen'),
    (6, 'BMW'),
    (7, 'Mercedes-Benz'),
    (8, 'Audi');

-- Insert test records into ModeloAuto
INSERT INTO ModeloAuto (ID, Nombre, MarcaID)
VALUES
    (1, 'Corolla', 1),
    (2, 'Cruze', 2),
    (3, 'Focus', 3),
    (4, 'Civic', 4),
    (5, 'Golf', 5),
    (6, 'X5', 6),
    (7, 'Clase C', 7),
    (8, 'A4', 8),
    (9, 'Camry', 1),
    (10, 'Equinox', 2),
    (11, 'Fiesta', 3),
    (12, 'Accord', 4),
    (13, 'Tiguan', 5);

-- Insert test records into Solicitudes
INSERT INTO Solicitudes (ID, VendedorID, ModeloID, FechaSolicitud, Precio)
VALUES
    (1, 1, 2, '2023-07-01', 20000.00),
    (2, 2, 2, '2023-07-02', 25000.00),
    (3, 3, 3, '2023-07-03', 18000.00),
    (4, 1, 4, '2023-07-04', 22000.00),
    (5, 2, 2, '2023-07-05', 19000.00),
    (6, 3, 5, '2023-07-06', 21000.00),
    (7, 4, 6, '2023-07-07', 35000.00),
    (8, 5, 7, '2023-07-08', 23000.00),
    (9, 1, 8, '2023-07-09', 19500.00),
    (10, 2, 9, '2023-07-10', 28000.00),
    (11, 3, 10, '2023-07-11', 32000.00),
    (12, 4, 11, '2023-08-01', 20000.00),
    (13, 5, 12, '2023-08-02', 25000.00),
    (14, 6, 13, '2023-08-03', 18000.00),
    (15, 1, 5, '2023-08-04', 22000.00),
    (16, 2, 6, '2023-08-05', 19000.00),
    (17, 3, 7, '2023-08-06', 21000.00),
    (18, 4, 8, '2023-08-07', 35000.00),
    (19, 5, 9, '2023-08-08', 23000.00),
    (20, 1, 10, '2023-08-09', 19500.00);

-- Stored procedures creation

-- Create stored procedure ObtenerMarcasMasSolicitadas
CREATE PROCEDURE ObtenerMarcasMasSolicitadas
AS
BEGIN
    SELECT TOP 3 m.Nombre AS Marca, COUNT(s.ID) AS CantidadSolicitudes
    FROM MarcaAuto m
    LEFT JOIN ModeloAuto ma ON m.ID = ma.MarcaID
    LEFT JOIN Solicitudes s ON ma.ID = s.ModeloID
    GROUP BY m.ID, m.Nombre
    ORDER BY COUNT(s.ID) DESC;
END;

-- Create stored procedure ObtenerVendedoresMenosSolicitudes
CREATE PROCEDURE ObtenerSolicitudesMesActual
AS
BEGIN
    DECLARE @FechaInicio DATE, @FechaFin DATE;
    SET @FechaInicio = DATEADD(MONTH, DATEDIFF(MONTH, 0, GETDATE()), 0);
    SET @FechaFin = DATEADD(MONTH, 1, @FechaInicio);
    
    SELECT *
    FROM Solicitudes
    WHERE FechaSolicitud >= @FechaInicio AND FechaSolicitud < @FechaFin;
END;

-- Create stored procedure ObtenerVendedoresMenosSolicitudes
CREATE PROCEDURE ObtenerVendedorMenosSolicitudes
AS
BEGIN
    DECLARE @FechaActual DATE;
    SET @FechaActual = GETDATE();
    
    SELECT TOP 1 v.Nombre + ' ' + v.Apellido AS Vendedor, COUNT(s.ID) AS CantidadSolicitudes
    FROM Vendedor v
    LEFT JOIN Solicitudes s ON v.ID = s.VendedorID
    WHERE s.FechaSolicitud >= DATEADD(DAY, -30, @FechaActual)
    GROUP BY v.ID, v.Nombre, v.Apellido
    ORDER BY COUNT(s.ID) ASC;
END;

-- Create stored procedure ObtenerModelosSinSolicitudes
CREATE PROCEDURE ObtenerModelosSinSolicitudes
AS
BEGIN
    SELECT m.Nombre AS Modelo
    FROM ModeloAuto m
    LEFT JOIN Solicitudes s ON m.ID = s.ModeloID
    WHERE s.ID IS NULL;
END;

-- Create stored procedure ObtenerMesesMasDineroVentas
CREATE PROCEDURE ObtenerMesesMasDineroVentas
AS
BEGIN
    SELECT TOP 3 FORMAT(s.FechaSolicitud, 'yyyy MMMM') AS Mes, SUM(s.Precio) AS TotalVentas
    FROM Solicitudes s
    INNER JOIN ModeloAuto m ON s.ModeloID = m.ID
    INNER JOIN MarcaAuto ma ON m.MarcaID = ma.ID
    GROUP BY FORMAT(s.FechaSolicitud, 'yyyy MMMM')
    ORDER BY SUM(s.Precio) DESC;
END;