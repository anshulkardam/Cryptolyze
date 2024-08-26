# Cryptolyze

**Cryptolyze** is a web application designed to provide users with a comprehensive platform for analyzing and tracking cryptocurrency prices. The application includes features such as user authentication, watchlists, and real-time data visualization.

## Table of Contents

-   [Features](#features)
-   [Technologies Used](#technologies-used)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Contributions](#contributions)

## Features

-   **User Authentication**: Secure user authentication using Clerk.
-   **Watchlist**: Users can create and manage a watchlist of their favorite cryptocurrencies.
-   **Real-Time Data**: Up-to-date cryptocurrency prices and market data.
-   **Responsive Design**: Fully responsive layout for an optimal user experience across devices.
-   **Customizable Dashboard**: Users can customize their dashboard to focus on the cryptocurrencies and metrics that matter to them.

## Technologies Used

-   **Frontend**: React, Tailwind CSS, three.js, Material UI, Framer Motion, React Toastify, 
-   **Authentication**: Clerk
-   **Data Visualization**: Chart.js, 
-   **API**: coingeckoAPI

## Installation

To set up the project locally, follow these steps:

1.  **Clone the repository**: 
2.  **Install dependencies**: `npm install`
3.  **Set up environment variables**: Create a `.env.local` file in  `frontend` directory and add the necessary environment variables:
`VITE_CLERK_PUBLISHABLE_KEY: your clerk key`
`CLERK_SIGN_IN_URL: Redirect url after signin`
`CLERK_SIGN_IN_FORCE_REDIRECT_URL: Force Redirect url after signin`
`my_coingecko_apikey: your coingecko api key`

5.  **Run the application**:  `npm run dev`
6.  **Visit the application**: Open your web browser and go to `http://localhost:5173`.
    

## Usage

1.  **Sign Up / Sign In**: Create an account or sign in using Clerk authentication.
2.  **Add to Watchlist**: Browse cryptocurrencies and add them to your watchlist.
3.  **View Data**: Analyze real-time data and trends for selected cryptocurrencies.
4.  **Compare Data**: Adjust the dashboard to display preferred data and graphs.

## Contributions

Contributions are welcome! Please open an issue or submit a pull request


