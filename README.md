# Property Management System (Vanilla PHP + Vanilla JS)

## Overview
This project is a lightweight **Property Management System** built entirely with **vanilla PHP** and **vanilla JavaScript**, without any frameworks or bundlers.

The system was designed for maximum browser compatibility, including full support for **Internet Explorer 11**, following strict rules:

- No ES6 features (only `var`, classic functions, XMLHttpRequest)
- Strict modularization using a custom `moduleManager.js`
- Single Responsibility Principle for each module
- Zero external dependencies except:
  - Google Geocoding API
  - Leaflet.js for map rendering

The architecture is clean, lightweight, and maintainable even under old-browser constraints.

## Features
- Property registration with address resolution
- Automatic latitude/longitude lookup via Google Geocoding API
- Notes system associated with each property
- Property map visualization using Leaflet.js
- Modular JavaScript architecture (core, shared, and page modules)
- IE11-compatible JavaScript
- Lightweight PHP backend for CRUD operations

## Technologies Used
- PHP 8.3
- MySQL 8
- JavaScript (ES5, IE11 compatible)
- Google Geocoding API
- Leaflet.js
- Docker (optional: Apache + MySQL)

## Installation

### 1) Start the environment
Run Docker Compose:

docker-compose up -d

Or configure Apache to point its DocumentRoot to the `src` directory.

### 2) Create the database
Run the SQL schema file.

From outside the container (recommended):

docker exec -i mysql8_db mysql -u root -proot myapp < src/sql/schema.sql

### 3) Access the application
http://localhost  
or  
http://localhost/public/property.html

## Browser Compatibility Notes
The entire project was built to work flawlessly even on **Internet Explorer 11**.

Because of this, the JavaScript follows strict compatibility limitations:

- No `let`, `const`, arrow functions, or classes
- No Promises or fetch API
- AJAX exclusively via `XMLHttpRequest`
- DOM manipulation via `innerText` and classic event listeners
- Simple modular structure inspired by SOLID principles

## Summary
This system delivers a structured, framework-free solution for property management, combining:

- Clean modular architecture
- Strong cross-browser compatibility
- External geocoding integration
- Interactive map visualization
- Maintainable vanilla codebase

It demonstrates that a real, professional system can be built with minimal dependencies while still applying modern engineering best practices.
