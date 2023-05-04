# CTA Website With Register Membership Form

This project is a responsive web application that allows users to sign up for a free membership. The form collects user information and credit card details for verification. The application is built using React and Tailwind CSS.

## Project Structure

The project is organized into modular components, making it easy to maintain and understand the code structure.

### Components

The main components are:

1. `App.js`: The main container that renders all other components.
2. `Header.js`: Displays the header with a checkmark icon.
3. `FreeAccessIntroduction.js`: Provides information about the free membership and its cost.
4. `Features.js`: Lists the features available to users upon signing up for the membership.
5. `ClientInformationForm.js`: A form to collect user information and credit card details.
6. `ExplanationSection.js`: Explains why credit card information is required.

## Installation

To install and run the project, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project folder.
3. Run `npm install` to install the required dependencies.
4. Run `npm start` to start the development server.
5. Open your browser and go to `http://localhost:3000` to view the application.

## Usage

To use the application, simply enter a valid credit card number in the input field and click the 'Submit' button. If the credit card number is valid, the application will redirect you to the 1st-landing-page. If the number is invalid, an error message will be displayed.

Valid credit card numbers have the following characteristics:

- 13 to 19 digits in length
- Pass the Luhn algorithm check

> Note: This application is for demonstration purposes only and does not process actual credit card transactions.
> Note: Correct credit card number for test: 1234 5678 9012 3456

## Luhn Algorithm

The Luhn algorithm is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers. The algorithm works by calculating a check digit based on the input number and verifying that the calculated check digit matches the actual check digit included in the input.

## Dependencies

This project uses the following dependencies:

- React
- Tailwind CSS
- React Select
- react-icons

## Responsive Design

The application is designed to work on various screen sizes, including mobile, tablet, and laptop/desktop screens. The layout and appearance of components change responsively based on the screen size.

## Customization

To customize the application, you can modify the components and styles to fit your desired appearance and functionality. The modular structure of the project makes it easy to maintain and update individual components without affecting the overall application.