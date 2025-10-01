import { asyncHandler } from "@/middleware/asyncHandler";
import { getAllProfiles } from "@/services/profileService";
import { Router } from "express";

const router = Router();

router.get(
  "/",
  asyncHandler((req, res) => {
    const profiles = getAllProfiles();
    res.json(profiles);
  })
);

export default router;
