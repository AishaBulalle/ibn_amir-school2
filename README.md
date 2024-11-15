Frontend - README

Frontend of Ibn Amer School Application
This is the frontend part of the Ibn Amir School application. It is built using React and TypeScript and communicates with the backend via API requests.

Deployment

The frontend is deployed on Azure, here is the link: https://witty-grass-01616631e.5.azurestaticapps.net

Installation

1. Clone the repository:https://github.com/AishaBulalle/ibn_amir-school2.git

2. Navigate to the frontend directory: cd frontend

3. Install dependencies: npm install

4. Create environment variables,in the frontend folder, create a .env.local file and add the following variable for local development: VITE_BACKEND_URL=http://localhost:5001

5. For production, create a .env.production file and add: VITE_BACKEND_URL=https://ibnamer-backend-arghgkfthtbjbzcs.swedencentral-01.azurewebsites.net

6. Run the application locally: npm run dev

7. Your frontend will be running at http://localhost:5173


Backend - README

Backend of Ibn Amer School Application
This is the backend part of the Ibn Amir School application. It is built using Express.js and MySQL.

Deployment

The backend is deployed on Azure and connected to a MySQL database, , here is the link: https://ibnamer-backend-arghgkfthtbjbzcs.swedencentral-01.azurewebsites.net/

Installation

1. Open a new terminal and navigate to the backend directory: cd backend

2. Install dependencies: npm install

3. Create environment variables, In the backend folder, create a .env.local file for local development and add the following:
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=aisha123
MYSQL_DATABASE=ibn_amir_school2
PORT=5001

4. For production (Azure deployment), create a .env.production file:
MYSQL_HOST=ibn-amir-school-db.mysql.database.azure.com
MYSQL_USER=adminroot
MYSQL_PASSWORD=Aisha123
MYSQL_DATABASE=ibn-amir-school-db
PORT=8080

5. Run the server locally: node server.js

6. Your backend will be running on http://localhost:5001


   





