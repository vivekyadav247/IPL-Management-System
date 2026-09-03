import express from "express";
import ownerRoutes from "./routes/owner.routes.js";
import teamRoutes from "./routes/team.routes.js";
import playerRoutes from "./routes/player.routes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/owners", ownerRoutes);
app.use("/api/teams", teamRoutes);
app.use("/api/players", playerRoutes);

export default app;
