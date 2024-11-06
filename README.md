# Finzy - Personal Finance Tracker

Finzy is a Personal Finance Tracker application built using the MERN stack (MongoDB, Express, React, Node.js). It enables users to manage and track their personal finances effectively.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Steps to Set Up the Project Locally](#steps-to-set-up-the-project-locally)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features
- Add, edit, and delete financial records.
- View expense trends and insights.
- Manage different expense categories.
- Responsive and user-friendly interface.

## Project Structure
```
Finzy/
├── backend/           # Backend code (Node.js, Express, MongoDB)
├── frontend/          # Frontend code (React)
├── package.json       # Root package file
└── README.md          # Project documentation
```

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js (>= v14)
- MongoDB (configured locally or in the cloud)

### Steps to Set Up the Project Locally

1. **Clone the Repository**
     ```bash
     git clone https://github.com/adghatkar/Finzy.git
     cd Finzy
     ```

2. **Install Backend Dependencies**
     ```bash
     cd backend
     npm install
     cd ..
     ```

3. **Install Frontend Dependencies**
     ```bash
     cd frontend
     npm install
     cd ..
     ```

4. **Configure Environment Variables**
     - In the backend directory, create a `.env` file.
     - Add your MongoDB URI and other required environment variables in this file:
         ```
         MONGO_URI=your_mongodb_uri
         PORT=5000
         ```

5. **Start the Application**
     - In the project root, run the following command to start both backend and frontend servers:
         ```bash
         npm install
         npm start
         ```
     - By default, the backend will run on `http://localhost:5000` and the frontend on `http://localhost:3000`.

## Usage
- Access the application by opening `http://localhost:3000` in your browser.
- Register and log in to start managing your personal finances.

## Contributing
Feel free to submit pull requests or report issues. Contributions are welcome!

## License
This project is open-source under the MIT License.
