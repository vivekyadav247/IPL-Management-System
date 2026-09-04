import express from "express";
import ownerRoutes from "./routes/owner.routes.js";
import teamRoutes from "./routes/team.routes.js";
import playerRoutes from "./routes/player.routes.js";
import broadcasterRoutes from "./routes/broadcaster.routes.js";
import sponsorRoutes from "./routes/sponsor.routes.js";
import teamSponsorRoutes from "./routes/team-sponsor.routes.js";
import teamBroadcasterRoutes from "./routes/team-broadcaster.routes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/health", (req, res) => {
  ApiResponses.success(res, { status: "UP" }, "API is healthy");
});

app.use("/api/owners", ownerRoutes);
app.use("/api/teams", teamRoutes);
app.use("/api/players", playerRoutes);
app.use("/api/broadcasters", broadcasterRoutes);
app.use("/api/sponsors", sponsorRoutes);
app.use("/api/team-sponsors", teamSponsorRoutes);
app.use("/api/team-broadcasters", teamBroadcasterRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the IPL Management System API");
});

export default app;
