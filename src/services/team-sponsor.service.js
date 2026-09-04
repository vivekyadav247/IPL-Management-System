import ApiError from "../utils/api-error.js";
import TeamSponsor from "../models/team-sponsor.model.js";

const createTeamSponsor = async ({ teamId, sponsorId }) => {
  const teamSponsor = await TeamSponsor({ teamId, sponsorId });
  return await teamSponsor.save();
};

const getAllTeamSponsors = async () => {
  const teamSponsors = await TeamSponsor.find();
  return teamSponsors;
};

const getTeamSponsorById = async (id) => {
  const teamSponsor = await TeamSponsor.findById(id);
  if (!teamSponsor) {
    throw new ApiError(404, "Team Sponsor not found");
  }
  return teamSponsor;
};

const updateTeamSponsorById = async (id, { teamId, sponsorId }) => {
  const teamSponsor = await TeamSponsor.findByIdAndUpdate(
    id,
    { teamId, sponsorId },
    { new: true, runValidators: true },
  );
  if (!teamSponsor) {
    throw new ApiError(404, "Team Sponsor not found");
  }
  return teamSponsor;
};

const deleteTeamSponsorById = async (id) => {
  const teamSponsor = await TeamSponsor.findByIdAndDelete(id);
  if (!teamSponsor) {
    throw new ApiError(404, "Team Sponsor not found");
  }
  return teamSponsor;
};

export default {
  createTeamSponsor,
  getAllTeamSponsors,
  getTeamSponsorById,
  updateTeamSponsorById,
  deleteTeamSponsorById,
};
