import { Router } from "express";
import * as controllers from "../controllers/sunscreens.js";
import restrict from "../helpers/restrict.js";

const router = Router();

router.get("/sunscreens", controllers.getAllSunscreens);
router.get("/sunscreens/:id", controllers.getOneSunscreen);
router.post("/sunscreens", restrict, controllers.createSunscreen);
router.put("/sunscreens/:id", restrict, controllers.editSunscreen);
router.delete("/sunscreens/:id", restrict, controllers.deleteSunscreen);

export default router;
