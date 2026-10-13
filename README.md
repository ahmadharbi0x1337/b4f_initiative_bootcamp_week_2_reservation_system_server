# b4f_initiative_bootcamp_week_2_reservation_system_server

a collaborative project, reservation system, nodejs, mongodb, and express (backend/server), react (front-end)

## Team Members

- Team-Leader: Ehsan Alsos
- Front-End: Badria Orabi
- Front-End: Malak Khalousy
- Back-End: Hasan Dayoub
- Back-End: Ahmad Alharbi

## Quick Start

### 1. Navigate To server directory, and install packages, and start server

```bash
$ cd server/
$ npm i
```

### 2. Configure Environment Variables (.env)

- Enter Values for PORT & MONGO_URI (connection string)

### 3. Start Server

```bash
$ npm run dev
```

### 4. Navigate To client directory, install packages, and start server (See Client Repo)

```bash
$ cd client/
$ npm i
$ npm run dev
```

## Project Structure

### Server

```bash
server/
├── app.js
├── config/
            ├── mongodb.js
├── controllers/
            ├── service.controller.js
            ├── appointment.controller.js
├── models/
            ├── service.model.js
            ├── appointment.model.js
├── routes/
            ├── service.routes.js
            ├── appointment.routes.js
└── server.js
```

### Client

#### Go to the client repo to see details

[Front-End Repo](https://github.com/ahmadharbi0x1337/b4f_initiative_bootcamp_week_2_reservation_system_client)
