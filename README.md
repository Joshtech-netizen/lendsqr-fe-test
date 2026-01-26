# Lendsqr Frontend Engineering Assessment - Joshua

## 🔗 Project Links
- **Live Deployment:** [Insert Vercel/Netlify Link Here]
- **Documentation/Review of Work:** [Insert Google Doc/Notion Link Here]

## 🚀 Overview
This project is a high-fidelity implementation of the Lendsqr Admin Console, built as part of the Frontend Engineering Assessment. The application manages a user database of 500 records, providing a seamless interface for user management, filtering, and detailed data visualization.

## 🛠️ Tech Stack
As per the assessment requirements, the following technologies were utilized:
- **React**: For building a modular and efficient user interface.
- **TypeScript**: To ensure strict type safety across the 500-record data structure and application logic.
- **SCSS**: For professional-grade styling, leveraging mixins and variables to achieve pixel-perfect fidelity and mobile responsiveness.
- **Vite**: Used as the build tool for optimized development performance.

## ✨ Core Features
- **User Management Table**: Displays 500 records fetched from a mock API with custom pagination (10/20/100 records per page).
- **Advanced Filtering**: A functional filter popover for the user table, allowing searches by organization, status, and date.
- **Data Persistence**: Implementation of **Local Storage** to store and retrieve specific user details, ensuring data survives page refreshes.
- **Visual Fidelity**: Achieved a 100% pixel-perfect representation of the provided Figma design.
- **Responsiveness**: Fully optimized for mobile, tablet, and desktop views using SCSS media queries.

## 🏛️ Architectural Decisions
- **Component-Based Structure**: I organized the codebase into atomic components (UI, Layout, Pages) to promote reusability and maintainability.
- **State Management**: Utilized React hooks (`useState`, `useEffect`) and Local Storage for lightweight, efficient data persistence between the User List and User Details views.
- **Type Definitions**: Defined comprehensive TypeScript interfaces for the User objects to eliminate runtime errors and improve developer experience.
- **SCSS Modularity**: Implemented SCSS modules and a central `_variables.scss` file to ensure design consistency and prevent style leakage.

## 🛠️ Installation and Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Joshtech-netizen/lendsqr-fe-test.git

2. Install Dependencies:
    ```bash
    npm install

3. Start Development Server 
  ```bash
    npm run dev




## 👨‍💻 Author
Joshua Kwakye