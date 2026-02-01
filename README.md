# Lendsqr Frontend Engineering Assessment

This repository contains my submission for the Lendsqr Frontend Engineering Test. The application is a high-fidelity, pixel-perfect administrative dashboard built to manage 500+ user records with advanced filtering, pagination, and detailed profile views.

---

## 🚀 Live Demo
**URL:** [https://joshua-kwakye-lendsqr-fe-test.vercel.app](https://joshua-kwakye-lendsqr-fe-test.vercel.app)

---

## 🛠️ Tech Stack & Architecture
* **React (Vite)**: Chosen for its superior developer experience and fast build times.
* **TypeScript**: Implemented with strict type-safety to handle the nested structures of the 500-record mock dataset.
* **SCSS Modules**: Utilized to achieve 100% visual fidelity to the Figma design while ensuring styles are scoped and maintainable.
* **Vitest & React Testing Library**: Employed to conduct positive and negative scenario testing for data fetching and authentication flows.
* **Local Storage**: Used to persist state for individual user details, ensuring data remains populated on page refreshes.

---

## 📱 Features & Mobile Responsiveness
* **100% Pixel-Perfect Fidelity**: Matches the Figma design across all breakpoints, utilizing brand-specific colors like `#213F7D`.
* **Responsive Data Table**: Implemented a cross-browser horizontal scroll container to ensure the 500-record table is fully swipeable on mobile devices without breaking layout.
* **Adaptive Grid Layouts**: User Detail grids automatically transition from a 5-column desktop view to a 2-column mobile view for optimal readability.
* **Dynamic Filtering**: Advanced filtering system to search through the user dataset by organization, status, and registration date.

---

## 🧪 Testing Scenarios
This project includes unit tests for core functionality as required by the assessment:
* **Positive Scenario**: Verifying that the `userService` successfully fetches and processes 500 mock user records.
* **Negative Scenario**: Ensuring the Login button remains disabled when input fields are empty or invalid.
## 📂 Project Structure
Organized following industry best practices for scalability and maintainability:
* **src/api**: Data fetching logic and userService.
* **src/components**: Reusable UI components (Sidebar, Navbar, Cards).
* **src/pages**: Main view logic for Login, Dashboard, and User Details.
* **src/styles**: Global variables, SCSS mixins, and modular styles.
* **src/services/--test--**: Vitest and RTL test suites.

To run tests:
```bash
npm test

