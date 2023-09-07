# Softec Practical Assessment

This is an Angular 16 web application that demonstrates the display of Products, Orders, and Customer data from JSON files. It also includes features like adding new orders and handling HTTP requests with an HTTP Interceptor.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [HTTP Interceptor](#http-interceptor)
- [Adding New Orders](#adding-new-orders)
- [Styling](#styling)

## Features

- Data Display: Easily view Products, Orders, and Customer data at your fingertips.
- Inventory Alerts: Quickly identify products with low quantities for timely action.
- Effortless Ordering: Seamlessly add new orders by selecting products with a user-friendly interface.
- Efficient HTTP Handling: Enjoy smooth communication with APIs thanks to our built-in HTTP Interceptor.
- Best Practices: Benefit from a well-organized codebase adhering to Angular 16's best practices.
- Responsive Design: Experience consistent performance on both large and small screens.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your development machine.
- Angular CLI (Command Line Interface) installed globally. You can install it with:
  npm install -g @angular/cli

## Getting Started

To get a local copy of this project up and running, follow these steps:

1. Clone the repository to your local machine:

       git clone https://github.com/Ehab-Ezzat/softec-practical-assessment.git

2. Navigate to the project's root directory:

       cd softec-practical-assessment

3. Install the project dependencies:

       npm install

4. Start the development server:

       ng serve

5. Open your web browser and access the application at `http://localhost:4200`.

## Project Structure

The project follows a well-structured organization. Here are the main directories:

- `src/app`: Contains Angular components, and core directory.
- `src/app/core`: A dedicated space for reusable Angular components, services, interfaces, and interceptors.
- `src/assets`: Includes static assets like images and JSON files.
- `src/styles`: Contains SCSS stylesheets for styling.

## HTTP Interceptor

The application uses an HTTP Interceptor to handle API calls. This centralizes error handling and can be customized to add headers or tokens if needed.

## Adding New Orders

To add a new order, follow these steps:

1. Navigate to the "Products Page."
2. Select the products you want to order by clicking on the cart icon in each product.
3. Click Cart Icon in the navbar and provide the necessary customer and payment details.
4. The order will be added to the system.

## Styling

The application's styling is enhanced with the use of Bootstrap in addition to SCSS. Bootstrap provides a robust set of CSS and JavaScript components that facilitate the creation of responsive and visually appealing user interfaces. This combination of SCSS and Bootstrap ensures a seamless and visually pleasing user experience while maintaining ease of maintenance through modular stylesheets and variables.
