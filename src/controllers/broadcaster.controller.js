import broadcasterService, * as service from "../services/broadcaster.service.js";
import ApiResponses from "../utils/api-responses.js";

const createBroadcaster = async (req, res) => {
  const broadcaster = await broadcasterService.createBroadcaster(req.body);

  ApiResponses.created(res, broadcaster, "Broadcaster created successfully");
};

const getAllBroadcasters = async (req, res) => {
  const broadcasters = await broadcasterService.getAllBroadcasters();

  ApiResponses.success(res, broadcasters, "Broadcasters fetched successfully");
};

const getBroadcasterById = async (req, res) => {
  const broadcaster = await broadcasterService.getBroadcasterById(
    req.params.id,
  );

  ApiResponses.success(res, broadcaster, "Broadcaster fetched successfully");
};

const updateBroadcasterById = async (req, res) => {
  const broadcaster = await broadcasterService.updateBroadcasterById(
    req.params.id,
    req.body,
  );

  ApiResponses.success(res, broadcaster, "Broadcaster updated successfully");
};

const deleteBroadcasterById = async (req, res) => {
  const broadcaster = await broadcasterService.deleteBroadcasterById(
    req.params.id,
  );

  ApiResponses.success(res, broadcaster, "Broadcaster deleted successfully");
};

export default {
  createBroadcaster,
  getAllBroadcasters,
  getBroadcasterById,
  updateBroadcasterById,
  deleteBroadcasterById,
};
