# React + Vite

# E-commerce App

This is a React-based e-commerce application built with Vite, featuring product pages, cart functionality, and routing.

## Features

- Product listing and detail pages
- Add to cart functionality with persistent local storage
- React Router for navigation
- Modular CSS for styling components
- Bootstrap for Responsive pages 

## Available Scripts
npm run dev: Starts the development server.
npm run build: Builds the app for production.
npm run preview: Previews the production build locally.

## Prerequisites

- [Node.js](https://nodejs.org/) and npm installed


## Setup Instructions
1. Clone the repository:

   ```bash
   git clone https://github.com/amirshabbir/ecommerce-app.git
   
   ```Set Up the Project Directory
   cd ecommerce-app

   ```Install Dependencies: Ensure all dependencies are installed by running:
   npm install

   ```Run the Application
   npm run dev

   ```Access the App in Your Browser:
   http://localhost:5173

## Project Structure
my-ecommerce-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   └── ...
│   ├── context/
│   │   └── CartContext.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── ProductPage.js
│   │   └── CartPage.js
│   ├── App.js
│   └── main.js
├── package.json
└── vite.config.js

