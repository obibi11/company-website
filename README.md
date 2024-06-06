# Company Website

This is a simple company website built using HTML, CSS, JavaScript, and Firebase Realtime Database. The website includes a homepage, about page, portfolio page, and contact page.


## Technologies Used

- HTML
- CSS
- JavaScript
- Firebase (Realtime Database)

## Setup Instructions

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your machine.
- Firebase project set up with Realtime Database enabled.

### Installation

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/obibi11/company-website.git
    ```

2. Navigate to the project directory:
    ```bash
    cd company-website
    ```

3. Install live-server globally to serve the application locally:
    ```bash
    npm install -g live-server
    ```

4. Open the project directory in your code editor.

5. Create a file named `firebase-config.js` in the `js` directory with your Firebase configuration:
    ```javascript
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
    import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

    const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        databaseURL: "YOUR_DATABASE_URL",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID"
    };

    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);
    export { db };
    ```

6. Replace the placeholder values in the `firebase-config.js` file with your actual Firebase project configuration values.

### Running the Application

7. Start the live server to serve the application:
    ```bash
    live-server
    ```

    The application should now be accessible at `http://127.0.0.1:8080`.

## Pages Description

- **Homepage**: Contains an overview of the company and a brief introduction with a call-to-action button.
- **About Page**: Provides detailed information about the company's mission, goals, and team.
- **Portfolio Page**: Showcases the company's projects with descriptions and images.
- **Contact Page**: Allows users to send messages to the company through a contact form.





