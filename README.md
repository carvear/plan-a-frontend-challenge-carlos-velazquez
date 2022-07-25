# Technical test - Plan A

# Task

**The project consists of two pages:**

    - A Login page for input validation and user authentication;

    - A home page showing the latest movie from an API already developed.

**Login page:**

**Implement a login form with the following:**

    - Email address (required and valid email address);

    - A Password field (required and at least 6 character long);

    - A button that only gets enabled when the form is valid;

    - Do the login using the following API with username and password (Create user session with login):
      https://developers.themoviedb.org/3/getting-started/introduction 
      PS1.: You can use the following API key: ------------------
      PS2.: You can use the username ------- and the password --------;

    - When the login is done correctly, then take the user to the home page;

    - Keep the user logged in.

**Home page:**

Implement a home page that

    - Show the latest movie from the same API used for the login.

    - The app should be responsive.


# Details

    - Programming language: Ionic.

    - Karma and Jazmine were used for the tests. They are in a separate file called tests.ts

# How to run

    - Run the ionic serve command