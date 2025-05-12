# 🌿 Natours

Natours is a full-stack tour-booking app with a RESTful API backend (Node.js, Express, MongoDB/Mongoose) and a server-side rendered frontend (Pug, Vanilla JS, CSS).

## 🔨 Teck Stack

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/)
[![PUG](https://img.shields.io/badge/%F0%9F%90%B6-%20PUG-73930a)](https://pugjs.org/api/getting-started.html)
[![nodemon](https://img.shields.io/badge/nodemon-7aea0c?logo=nodemon&label=%20%20%20%20%20%20%20%20&labelColor=gray)](https://www.npmjs.com/package/nodemon/)
[![Express](https://img.shields.io/badge/Express-4.x-lightgrey)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0-blue)](https://www.mongodb.com/)
[![Axois](https://img.shields.io/badge/%F0%9F%94%97-Axios-2e377f)](https://www.axios.com/)
[![Stripe](https://img.shields.io/badge/Stripe-Payments-blueviolet)](https://stripe.com/)
[![Deployed on Railway](https://img.shields.io/badge/Deployed-Railway-6441a5)](https://railway.app)
[![npm](https://img.shields.io/badge/npm-red?logo=npm&label=%20%20%20%20%20%20%20%20&labelColor=gray)](https://www.npmjs.com/)
[![JWT](https://img.shields.io/badge/JWT-token-000000)](https://jwt.io/)

## 🌍 Live Demo

<a href="https://natours-samer.up.railway.app/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Deployed_on-Railway-6441a5?logo=railway" alt="Railway"></a>

## 🏗️ Architecture

- ### Backend:
  - REST API with filtering, sorting, pagination, and aliasing
  - **Stack:** Node.js, Express
  - **Endpoints:** `/tours`, `/users`, `/reviews`, `/bookings`
  - **Auth & Security:** JWT (HTTP-only cookies), rate limiting (100 req/hr), Helmet headers, NoSQL sanitization
  - **Responses:** JSON, proper HTTP status codes
- ### Frontend:
  - **Templating:** Pug
  - **Bundling & ES6:** Webpack, modern JavaScript
  - **API Calls:** Axios

## ✨ Features

- ### Security

  - JWT-based login/signup (bcrypt-hashed passwords)
  - Rate limiting, Helmet, data sanitization

- ### Email Notifications

  - Nodemailer (Gmail) for welcome, password reset & booking confirmations

- ### Payments

  - Stripe checkout, webhook listener → booking creation

- ### Geospatial

  - Radius search & distance calculations
  - Leaflet map integration

- ### Images
  - Multer + Sharp for upload, resize (500×500), JPEG conversion & optimization

## API Documentation

<a href="https://documenter.getpostman.com/view/42856951/2sB2jAbTKP" target="_blank" rel="noreferrer"><img src="https://run.pstmn.io/button.svg" alt="Run in Postman"></a>

## Installation

1. **Clone repository:**
   ```bash
   git clone https://github.com/SamerYaserr/Natours.git
   ```
2. **Initialize a Package.json File (if not already done):**
   ```bash
   npm init
   ```
3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Setting up env variables:**

   ```
   # Server Configuration
   NODE_ENV=development
   PORT=3000

   # Database Configuration
   DATABASE=<your_mongo_db_URL>
   DATABASE_PASSWORD=<your_mongo_db_password>

   # Authentication
   JWT_SECRET=<your_jwt_secret_key>
   JWT_EXPIRES_IN=<JWT_expiration_date>
   JWT_COOKIE_EXPIRES_IN=<JWT_cookie_expiration_date>

   # Email Services
   ## Mailtrap (Development)
   EMAIL_HOST=<sandbox.smtp.mailtrap.io>
   EMAIL_PORT=587
   EMAIL_USERNAME=<your_mailtrap_username>
   EMAIL_PASSWORD=<your_mailtrap_password>

   ## Gmail (Production)
   GMAIL_LOGIN=<your_gmail>
   GMAIL_PASSWORD=<your_gmail_app_key>

   # Payments
   STRIPE_SECRET_KEY=<your_stripe_secret_key>

   # General Settings
   EMAIL_FROM=<your_sender_email>
   ```
