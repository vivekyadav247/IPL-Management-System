import ApiResponse from "../utils/api-responses.js";
import teamSponserService, * as service from "../services/team-sponsor.service.js";

const createTeamSponser = async (req, res) => {
  const teamSponser = await teamSponserService.createTeamSponser(req.body);
  ApiResponse.created(res, teamSponser, "Team Sponser created successfully");
};

const getAllTeamSponsors = async (req, res) => {
  const teamSponsors = await teamSponserService.getAllTeamSponsors();
  ApiResponse.success(res, teamSponsors, "Team Sponsors fetched successfully");
};

const getTeamSponserById = async (req, res) => {
  const teamSponser = await teamSponserService.getTeamSponserById(
    req.params.id,
  );
  ApiResponse.success(res, teamSponser, "Team Sponser fetched successfully");
};

const updateTeamSponserById = async (req, res) => {
  const teamSponser = await teamSponserService.updateTeamSponserById(
    req.params.id,
    req.body,
  );
  ApiResponse.success(res, teamSponser, "Team Sponser updated successfully");
};

const deleteTeamSponserById = async (req, res) => {
  const teamSponser = await teamSponserService.deleteTeamSponserById(
    req.params.id,
  );
  ApiResponse.success(res, teamSponser, "Team Sponser deleted successfully");
};

export default {
  createTeamSponser,
  getAllTeamSponsors,
  getTeamSponserById,
  updateTeamSponserById,
  deleteTeamSponserById,
};
