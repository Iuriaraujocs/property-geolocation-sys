CREATE TABLE properties (
                            id INT AUTO_INCREMENT PRIMARY KEY,
                            address VARCHAR(255) NOT NULL,
                            lat DECIMAL(10,6),
                            lng DECIMAL(10,6),
                            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE notes (
                       id INT AUTO_INCREMENT PRIMARY KEY,
                       property_id INT NOT NULL,
                       content TEXT NOT NULL,
                       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                       FOREIGN KEY (property_id) REFERENCES properties(id)
);
