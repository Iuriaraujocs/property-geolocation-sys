CREATE TABLE properties (
                            id INT AUTO_INCREMENT PRIMARY KEY,
                            name VARCHAR(255) NOT NULL,
                            address VARCHAR(255) NOT NULL,
                            latitude DECIMAL(10,6),
                            longitude DECIMAL(10,6),
                            extra_field VARCHAR(255),
                            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE notes (
                       id INT AUTO_INCREMENT PRIMARY KEY,
                       property_id INT NOT NULL,
                       note TEXT NOT NULL,
                       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                       FOREIGN KEY (property_id) REFERENCES properties(id)
);
