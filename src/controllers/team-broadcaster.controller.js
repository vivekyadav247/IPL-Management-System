import ApiResponse from "../utils/api-responses.js";
import teamBroadcasterService, * as service from "../services/team-broadcaster.service.js";

const createTeamBroadcaster = async (req, res) => {
  const teamBroadcaster = await teamBroadcasterService.createTeamBroadcaster(
    req.body,
  );
  ApiResponse.created(
    res,
    teamBroadcaster,
    "Team Broadcaster created successfully",
  );
};

const getAllTeamBroadcasters = async (req, res) => {
  const teamBroadcasters =
    await teamBroadcasterService.getAllTeamBroadcasters();
  ApiResponse.success(
    res,
    teamBroadcasters,
    "Team Broadcasters fetched successfully",
  );
};

const getTeamBroadcasterById = async (req, res) => {
  const teamBroadcaster = await teamBroadcasterService.getTeamBroadcasterById(
    req.params.id,
  );
  ApiResponse.success(
    res,
    teamBroadcaster,
    "Team Broadcaster fetched successfully",
  );
};

const updateTeamBroadcasterById = async (req, res) => {
  const teamBroadcaster =
    await teamBroadcasterService.updateTeamBroadcasterById(
      req.params.id,
      req.body,
    );
  ApiResponse.success(
    res,
    teamBroadcaster,
    "Team Broadcaster updated successfully",
  );
};

const deleteTeamBroadcasterById = async (req, res) => {
  const teamBroadcaster =
    await teamBroadcasterService.deleteTeamBroadcasterById(req.params.id);
  ApiResponse.success(
    res,
    teamBroadcaster,
    "Team Broadcaster deleted successfully",
  );
};

export default {
  createTeamBroadcaster,
  getAllTeamBroadcasters,
  getTeamBroadcasterById,
  updateTeamBroadcasterById,
  deleteTeamBroadcasterById,
};
