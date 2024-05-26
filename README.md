# Advisor App (Front-end)

This is the front-end part of the Advisor App, built with Angular. It provides a user interface for managing advisors and their details.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js (version 14 or later)
- Angular CLI (version 14 or later)

## Installation

1. Clone the repository:

2. Navigate to the project directory:

3. Install the dependencies:

## Configuration

Before running the application, you need to configure the API endpoint. Open the `environment.ts` file and update the `apiUrl` property with the URL of your API:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5000/api' // Replace with your API URL
};

Development Server
To start the development server, run the following command:

ng serve

This will start the Angular development server and open the application in your default browser at http://localhost:4200/. The app will automatically reload if you make any changes to the source files.

Build
To build the project for production, run the following command:

ng build

The build artifacts will be stored in the dist/ directory. You can then deploy these files to a web server or hosting platform.