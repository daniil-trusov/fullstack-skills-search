import cors from "cors";
import express from "express";

import { errorHandler } from "@/middleware/errorHandler";
import profiles from "@/routes/profiles";
import search from "@/routes/search";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use("/profiles", profiles);
app.use("/search", search);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
