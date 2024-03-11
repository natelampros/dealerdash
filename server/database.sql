CREATE DATABASE dealerdash;

CREATE TABLE Dealerships (
    DealershipID SERIAL PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Address VARCHAR(255) NOT NULL,
    City VARCHAR(100) NOT NULL,
    Zip VARCHAR(20) NOT NULL,
    State VARCHAR(50) NOT NULL,
    ContactInfo VARCHAR(255)
);

CREATE TABLE Users (
    UserID SERIAL PRIMARY KEY,
    DealershipID INTEGER REFERENCES Dealerships(DealershipID),
    Username VARCHAR(255) UNIQUE NOT NULL,
    RoleID INTEGER, -- This will be defined as a FOREIGN KEY after creating Roles table
    Email VARCHAR(255) UNIQUE NOT NULL,
    ContactInfo VARCHAR(255)
);

CREATE TABLE Roles (
    RoleID SERIAL PRIMARY KEY,
    RoleName VARCHAR(100) NOT NULL,
    Permissions JSON NOT NULL
);

-- Now, add the FOREIGN KEY constraint to Users.RoleID
ALTER TABLE Users
ADD CONSTRAINT fk_role
FOREIGN KEY (RoleID) REFERENCES Roles(RoleID);

CREATE TABLE MetricsDefinitions (
    MetricID SERIAL PRIMARY KEY,
    MetricName VARCHAR(255) UNIQUE NOT NULL,
    Category VARCHAR(100) NOT NULL,
    Subcategory VARCHAR(100) NULL,
    Description TEXT
);

CREATE TABLE DealershipMetrics (
    DealershipMetricID SERIAL PRIMARY KEY,
    DealershipID INTEGER REFERENCES Dealerships(DealershipID),
    MetricID INTEGER REFERENCES MetricsDefinitions(MetricID),
    IsActive BOOLEAN NOT NULL
);

CREATE TABLE MetricsData (
    DataID SERIAL PRIMARY KEY,
    MetricID INTEGER REFERENCES MetricsDefinitions(MetricID),
    DealershipID INTEGER REFERENCES Dealerships(DealershipID),
    Date DATE NOT NULL,
    MTDValue DECIMAL NOT NULL,
    PACEValue DECIMAL NOT NULL,
    ProjectionValue DECIMAL NOT NULL,
    ActualValue DECIMAL NOT NULL,
    Variance DECIMAL NOT NULL
);
