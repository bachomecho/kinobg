import express from "express";
import cors from "cors";
import path from "path";
import { router } from "./lib/router.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", router);

app.use("/images", express.static("dist/app/assets/static/images"));
app.use(express.static("dist/app"));

app.get("*", (_req, res) => {
  const __dirname = process.cwd();
  res.sendFile(path.join(__dirname, "./dist/app/index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
