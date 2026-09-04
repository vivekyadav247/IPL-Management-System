# IPL Management System

Express and MongoDB API for managing IPL owners, teams, and players.

## Setup

Requirements: Node.js and Docker.

```bash
npm install
docker compose up -d
```

Create `.env`:

```env
MONGO_URL=mongodb://root:root@localhost:27018/ipl_management?authSource=admin
PORT=3000
```

Start the API:

```bash
npm start
```

The server runs on `http://localhost:3000`.

## API

All requests use JSON. Successful responses have this shape:

```json
{ "status": "success", "data": {}, "message": "..." }
```

### System

| Method | Endpoint      | Body |
| ------ | ------------- | ---- |
| GET    | `/`           | -    |
| GET    | `/api/health` | -    |

### Owners

| Method | Endpoint          | Body                                  |
| ------ | ----------------- | ------------------------------------- |
| POST   | `/api/owners`     | `{ "name": "...", "company": "..." }` |
| GET    | `/api/owners`     | -                                     |
| GET    | `/api/owners/:id` | -                                     |
| PUT    | `/api/owners/:id` | `{ "name": "...", "company": "..." }` |
| DELETE | `/api/owners/:id` | -                                     |

### Teams

| Method | Endpoint         | Body                                  |
| ------ | ---------------- | ------------------------------------- |
| POST   | `/api/teams`     | `{ "name": "...", "ownerId": "..." }` |
| GET    | `/api/teams`     | -                                     |
| GET    | `/api/teams/:id` | -                                     |
| PUT    | `/api/teams/:id` | `{ "name": "...", "ownerId": "..." }` |
| DELETE | `/api/teams/:id` | -                                     |

### Players

| Method | Endpoint           | Body                                                    |
| ------ | ------------------ | ------------------------------------------------------- |
| POST   | `/api/players`     | `{ "name": "...", "role": "Batsman", "teamId": "..." }` |
| GET    | `/api/players`     | -                                                       |
| GET    | `/api/players/:id` | -                                                       |
| PUT    | `/api/players/:id` | `{ "name": "...", "role": "Bowler", "teamId": "..." }`  |
| DELETE | `/api/players/:id` | -                                                       |

### Broadcasters

| Method | Endpoint                | Body                |
| ------ | ----------------------- | ------------------- |
| POST   | `/api/broadcasters`     | `{ "name": "..." }` |
| GET    | `/api/broadcasters`     | -                   |
| GET    | `/api/broadcasters/:id` | -                   |
| PUT    | `/api/broadcasters/:id` | `{ "name": "..." }` |
| DELETE | `/api/broadcasters/:id` | -                   |

### Sponsors

| Method | Endpoint            | Body                |
| ------ | ------------------- | ------------------- |
| POST   | `/api/sponsors`     | `{ "name": "..." }` |
| GET    | `/api/sponsors`     | -                   |
| GET    | `/api/sponsors/:id` | -                   |
| PUT    | `/api/sponsors/:id` | `{ "name": "..." }` |
| DELETE | `/api/sponsors/:id` | -                   |

### Team broadcasters

| Method | Endpoint                     | Body                                          |
| ------ | ---------------------------- | --------------------------------------------- |
| POST   | `/api/team-broadcasters`     | `{ "teamId": "...", "broadcasterId": "..." }` |
| GET    | `/api/team-broadcasters`     | -                                             |
| GET    | `/api/team-broadcasters/:id` | -                                             |
| PUT    | `/api/team-broadcasters/:id` | `{ "teamId": "...", "broadcasterId": "..." }` |
| DELETE | `/api/team-broadcasters/:id` | -                                             |

### Team sponsors

| Method | Endpoint                 | Body                                      |
| ------ | ------------------------ | ----------------------------------------- |
| POST   | `/api/team-sponsors`     | `{ "teamId": "...", "sponsorId": "..." }` |
| GET    | `/api/team-sponsors`     | -                                         |
| GET    | `/api/team-sponsors/:id` | -                                         |
| PUT    | `/api/team-sponsors/:id` | `{ "teamId": "...", "sponsorId": "..." }` |
| DELETE | `/api/team-sponsors/:id` | -                                         |

Player roles: `Batsman`, `Bowler`, `All-Rounder`, `Wicket-Keeper`.

## Postman test

Import [`postman/ipl-management.postman_collection.json`](postman/ipl-management.postman_collection.json) into Postman. Set `baseUrl` to `http://localhost:3000`, then run the collection. It creates linked test data, reads players, updates the player, and removes the test data.
