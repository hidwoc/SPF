import { Router } from "express";
import sunscreensRoutes from "./sunscreens.js";
import usersRoutes from "./users.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the SPF api root!"));

router.use("/", usersRoutes);
router.use("/", sunscreensRoutes);

export default router;
