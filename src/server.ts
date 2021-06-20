import express from "express";

import { categoriesRoutes } from "./routes/categories";

const APP = express();
const PORT = 3333;

APP.use(express.urlencoded({ extended: true }));
APP.use(express.json());

APP.get("/", (_req, res) => {
    return res.json({ api: "OK" });
});

APP.use("/categories", categoriesRoutes);

APP.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
});
