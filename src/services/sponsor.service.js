import ApiError from "../utils/api-error.js";
import Sponsor from "../models/sponsor.model.js";

const createSponsor = async ({ name, company }) => {
  const sponsor = await Sponsor({ name, company });
  return await sponsor.save();
};

const getAllSponsors = async () => {
  const sponsors = await Sponsor.find();
  return sponsors;
};

const getSponsorById = async (id) => {
  const sponsor = await Sponsor.findById(id);

  if (!sponsor) {
    throw new ApiError(404, "Sponsor not found");
  }

  return sponsor;
};

const updateSponsorById = async (id, { name, company }) => {
  const sponsor = await Sponsor.findByIdAndUpdate(
    id,
    { name, company },
    { new: true, runValidators: true },
  );

  if (!sponsor) {
    throw new ApiError(404, "Sponsor not found");
  }

  return sponsor;
};

const deleteSponsorById = async (id) => {
  const sponsor = await Sponsor.findByIdAndDelete(id);

  if (!sponsor) {
    throw new ApiError(404, "Sponsor not found");
  }

  return sponsor;
};

export default {
  createSponsor,
  getAllSponsors,
  getSponsorById,
  updateSponsorById,
  deleteSponsorById,
};
