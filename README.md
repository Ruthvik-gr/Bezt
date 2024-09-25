
# Bezt

This project is a Full Stack application that consists of a NestJS-based backend and a Next.js-based frontend. The backend uses PostgreSQL as the database and Prisma ORM for database operations. The frontend is built with Next.js, React Hook Form, TailwindCSS for styling, and Redux for state management. The application manages users and profiles, with the backend serving APIs and the frontend consuming these APIs for display and modification.

## Table of Contents

- [Overview](#overview)
- [Technologies](#technologies)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [License](#license)

## Overview

The project allows users to create, view, edit, and delete both user and profile information. The backend provides a RESTful API for handling requests, while the frontend interfaces with this API to render the necessary components.

## Technologies

- **Backend:**
  - [NestJS](https://nestjs.com/) - A progressive Node.js framework for building efficient and scalable server-side applications.
  - [PostgreSQL](https://www.postgresql.org/) - A powerful, open-source object-relational database system.
  - [Prisma ORM](https://www.prisma.io/) - A modern database toolkit to query databases in TypeScript/JavaScript.
  
- **Frontend:**
  - [Next.js](https://nextjs.org/) - A React framework for building server-rendered or statically exported React apps.
  - [React Hook Form](https://react-hook-form.com/) - A performant, flexible, and extensible form library for React.
  - [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework for creating custom designs.
  - [Redux](https://redux.js.org/) - A predictable state container for JavaScript apps.

## Backend Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Ruthvik-gr/Bezt.git
   cd backend
   ```

2. **Install Backend Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up .env File:**
   Create a `.env` file and configure your PostgreSQL database:
   ```bash
   DATABASE_URL="postgresql://user:password@localhost:5432/database"
   ```

4. **Run Prisma Migrations:**
   ```bash
   npx prisma migrate dev
   ```

5. **Start the NestJS Server:**
   ```bash
   npm run start:dev
   ```

## Frontend Setup

1. **Navigate to Frontend Folder:**
   ```bash
   cd frontend
   ```

2. **Install Frontend Dependencies:**
   ```bash
   npm install
   ```

3. **Start the Next.js Development Server:**
   ```bash
   npm run dev
   ```
## Usage

- **Create Users:** Navigate to the "Create User" page, fill out the form, and submit.
- **View Users:** Go to the "User List" page to see all users.
- **Edit Users:** Select a user to edit and update their details.
- **Delete Users:** Remove a user from the list.
- **Create Profiles:** Similarly, create and manage profiles for users.

