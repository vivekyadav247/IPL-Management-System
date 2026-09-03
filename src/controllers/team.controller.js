import ApiResponses from "../utils/api-responses.js";
import teamService, * as services from "../services/team.service.js";

const createTeam = async (req, res) => {
  const team = await teamService.createTeam(req.body);
  ApiResponses.created(res, team, "Team created successfully");
};

const getAllTeams = async (req, res) => {
  const teams = await teamService.getAllTeams();
  ApiResponses.success(res, teams, "Teams fetched successfully");
};

const getTeamById = async (req, res) => {
  const team = await teamService.getTeamById(req.params.id);
  ApiResponses.success(res, team, "Team fetched successfully");
};

const updateTeamById = async (req, res) => {
  const team = await teamService.updateTeamById(req.params.id, req.body);
  ApiResponses.success(res, team, "Team updated successfully");
};

const deleteTeamById = async (req, res) => {
  const team = await teamService.deleteTeamById(req.params.id);
  ApiResponses.success(res, team, "Team deleted successfully");
};

export default {
  createTeam,
  getAllTeams,
  getTeamById,
  updateTeamById,
  deleteTeamById,
};
