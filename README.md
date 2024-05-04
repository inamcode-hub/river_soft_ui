# Application Name

This application is designed using various technologies and contains business logic inside the app. The application communicates with a REST API for data interaction.

The application is deployed on Vercel and the link to the live application is [river-soft.vercel.app](https://river-soft.vercel.app). It has a CI/CD pipeline set up for continuous integration and deployment.

## Documentation

Detailed documentation is available in the `docs` folder:

- [Technologies Used](docs/technologies.md)
- [Application Logic](docs/logic.md)

## Configuration

The application uses environment variables for configuration. These are stored in a `.env` file. Here's an example of what your `.env` file should look like:

```properties
# ================== Vite ==================
# ================== Node.js API ==================
VITE_API_HOST=https://localhost:3000/api/v1
# ================== Vercel ==================
VITE_VERCEL_URL=https://your-vite-app.vercel.app
# ================== Auth0 ==================
VITE_AUTH0_DOMAIN=your-auth0-domain
VITE_AUTH0_CLIENT_ID=your-auth0-client-id
# ================== System ==================
VITE_APP_NAME=Your App Name
VITE_APP_VERSION=1.0.0
VITE_APP_ENV=development

```

## Installation

Follow these steps to install and run the project:

1. **Clone the repository**

    Use git to clone the repository to your local machine:

    ```bash
    git clone https://github.com/inamdryermaster/river_soft_ui
    ```

2. **Navigate to the project directory**

    Change to the project directory:

    ```bash
    cd vite_frontend
    ```

3. **Install dependencies**

    Use npm (Node Package Manager) to install the project dependencies:

    ```bash
    npm install
    ```

4. **Build the application**

    Build the application using npm:

    ```bash
    npm run build
    ```

5. **Start the application**

    Start the application using npm:

    ```bash
    npm run dev
    ```

The application should now be running on `localhost:3000` (or your specified port).

## Contributing

Tony River Soft , Inam 

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.