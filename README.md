# CIA Labs

![CIA Labs Logo](app/icon.jpg)

## Project Overview

Welcome to CIA Labs! This project is a web application designed to showcase featured events and challenges. It provides an engaging user experience with smooth animations and a responsive design, built using Next.js, React, and Tailwind CSS.

## Features

* **Dynamic Event Display:** Fetches and displays a list of featured events.
* **Interactive UI:** Smooth transitions and animations for a modern feel.
* **Responsive Design:** Optimized for various screen sizes, from mobile to desktop.
* **Dashboard Integration:** A prominent button to navigate to a "Dashboard" (currently linked to `www.google.com` as a placeholder).
* **Shadcn/ui Components:** Utilizes a variety of Shadcn/ui components for a consistent and accessible user interface.

## Technologies Used

* **Next.js:** React framework for server-side rendering and static site generation.
* **React:** JavaScript library for building user interfaces.
* **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
* **TypeScript:** Type-safe JavaScript.
* **Shadcn/ui:** Reusable UI components built with Radix UI and Tailwind CSS.
* **Lucide React:** A collection of open-source icons.
* **Firebase:** For potential future backend integrations (authentication, database).
* **Zod:** Schema declaration and validation library.
* **Date-fns:** Modern JavaScript date utility library.

## Installation and Setup

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd cialabhome
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

4.  **Build for production:**
    ```bash
    npm run build
    # or
    yarn build
    ```
    This will create an optimized production build.

## Project Structure

* `app/`: Contains the main application pages and layout.
    * `page.tsx`: The main home page component.
    * `layout.tsx`: The root layout for the application.
    * `globals.css`: Global styles for the application.
    * `icon.jpg`: The project icon.
* `components/`: Reusable React components (e.g., `MotionGateButton`, `EventCard`, `MotionGateLogo`).
* `data/`: Contains static data, such as `events.json`.
* `public/`: Static assets.

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests.

## License

[Specify your license here, e.g., MIT License]

## Designed for Delight by Harsh ♠️
