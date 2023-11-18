# Question Paper Generator

## Overview

This is a Node.js application that generates question papers based on specified criteria such as total marks and difficulty distribution. The application stores a set of questions in a Question Store, each having attributes like question, subject, topic, difficulty, and marks.

## Features

- Generate question papers with specified total marks and difficulty distribution.
- Modular and extensible design for easy scalability.
- Handles edge cases and input validation.
- Built with Node.js and Express.js.

## Project Structure

- `routes`: Contains the Express.js routes.
- `data`: Stores the question store data.
- `utils`: Contains utility functions, such as the question paper generator.
- `middlewares`: Includes input validation middleware.
- `index.js`: Main server file.

## Setup

1. Clone the repository: `git clone https://github.com/rakesh-kumar-18/question-paper-generator.git`.
2. Navigate to the project directory: `cd question-paper-generator`.
3. Install dependencies: `npm install`.
4. Run the server: `npm start`.

## Usage
1. Open postman or any other API platform and navigate to http://localhost:3000.
2. Use the provided API endpoint to generate question papers based on your requirements.

### API Endpoint

- **POST** `/api/generate-paper`

  Generates a question paper based on the provided input.

  Example Request Body:

  ```json
  {
    "marks": 100,
    "easy": 20,
    "medium": 50,
    "hard": 30
  }
  ```
  Adjust the percentages as per your requirements.
  
- **Sample Response**:

  ```json
  {
    "questionPaper": [
        {
            "question": "What is the speed of light",
            "subject": "Physics",
            "topic": "Waves",
            "difficulty": "Easy",
            "marks": 5
        },
        // ... other generated questions
    ]
  }
  ```

## Dependencies

- `express`: Web framework for Node.js.
- `nodemon`: Monitor for any changes in your source and automatically restart your server.

## Additional Notes

- Ensure Node.js and npm is installed on your machine.
