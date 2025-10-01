import { asyncHandler } from "@/middleware/asyncHandler";
import { searchProfiles } from "@/services/profileService";
import { Router } from "express";

const router = Router();

router.post(
  "/",
  asyncHandler((req, res) => {
    const { skills } = req.body;

    if (!Array.isArray(skills)) {
      return res.status(400).json({ error: "skills must be an array" });
    }

    const results = searchProfiles(skills);

    res.json(results);
  })
);

export default router;
