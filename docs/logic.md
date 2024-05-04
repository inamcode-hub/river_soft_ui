# Application Logic

## Favicons and Manifest

The application uses custom icons created using the [Favicons](https://favicon.io/) website. These icons are used in various places such as the tab icon in web browsers and the app icon when installed on a device.

A manifest file is also included in the application. This is a JSON file that provides information about the application such as the name, author, icon, and description. It's used by browsers when the user wants to add the application to their home screen.

## Progressive Web App (PWA)
The application is a PWA, which means it can be installed on a user's device and run offline. Users can download the app on their mobile devices by visiting the website in their browser, then selecting "Add to Home Screen" from the browser menu. The application will then be available as an app on the device's home screen, and can be used offline.

In the `index.html` file, there is a script that registers a service worker, which is a script that your browser runs in the background, separate from a web page, opening the door to features that don't need a web page or user interaction. The service worker is registered with the scope of the root directory (`'/'`), meaning it can control requests from all the pages on your domain.

```html
<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/sw.js', { scope: '/' })
      .then(() => console.log('Service Worker registered successfully.'))
      .catch((error) =>
        console.log('Service Worker registration failed:', error)
      );
  }
</script>

```

## Login System

### Google OAuth 2.0 API

The login system of the application requires a [Google OAuth 2.0 API](https://developers.google.com/identity/protocols/oauth2) account. To obtain this, you need to create a project in the [Google Cloud Console](https://console.cloud.google.com/) and enable the OAuth 2.0 API. Once the API is enabled, you can create credentials that your application can use to authenticate requests.

When setting up the OAuth 2.0 credentials, you need to specify the authorized JavaScript origins and redirect URIs. For this application, you should add the addresses of Auth0 and localhost to the list of authorized JavaScript origins. This ensures that only requests from these origins are allowed to access the API.

## reCAPTCHA Integration

The application also integrates Google's [reCAPTCHA](https://www.google.com/recaptcha/admin/site/701545478) to protect against automated abusive activities and to ensure only humans can perform certain actions. This adds an additional layer of security and helps to improve the overall user experience.

To set up reCAPTCHA, you need to register your site on the reCAPTCHA admin console. Once registered, you will receive a site key and secret key. These keys are used to integrate reCAPTCHA into your application.



### Auth0 Configuration

After setting up the Google OAuth 2.0 API, you need to configure [Auth0](https://auth0.com/). In the Auth0 dashboard, create a new Single Page Application. This will generate a domain and client ID for your application. You can then use these values to authenticate requests from your application.

In the Auth0 dashboard, you can also set up a social connection for Google. This allows users to log in to your application using their Google accounts. You can customize the login page by adding your logo and other branding elements.

Once the user successfully logs in, Auth0 stores a session in the browser. The React application uses this session to manage user access and permissions.

## Business Logic

The application contains business logic to provide functionality.

## State Management

The application uses Redux Toolkit for efficient state management.