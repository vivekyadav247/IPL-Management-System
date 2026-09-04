import sponsorService, * as service from "../services/sponsor.service.js";
import ApiResponses from "../utils/api-responses.js";

const createSponsor = async (req, res) => {
  const sponsor = await sponsorService.createSponsor(req.body);

  ApiResponses.created(res, sponsor, "Sponsor created successfully");
};

const getAllSponsors = async (req, res) => {
  const sponsors = await sponsorService.getAllSponsors();

  ApiResponses.success(res, sponsors, "Sponsors fetched successfully");
};

const getSponsorById = async (req, res) => {
  const sponsor = await sponsorService.getSponsorById(req.params.id);

  ApiResponses.success(res, sponsor, "Sponsor fetched successfully");
};

const updateSponsorById = async (req, res) => {
  const sponsor = await sponsorService.updateSponsorById(
    req.params.id,
    req.body,
  );

  ApiResponses.success(res, sponsor, "Sponsor updated successfully");
};

const deleteSponsorById = async (req, res) => {
  const sponsor = await sponsorService.deleteSponsorById(req.params.id);

  ApiResponses.success(res, sponsor, "Sponsor deleted successfully");
};

export default {
  createSponsor,
  getAllSponsors,
  getSponsorById,
  updateSponsorById,
  deleteSponsorById,
};
