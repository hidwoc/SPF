import { Router } from "express";
import * as controllers from "../controllers/sunscreens.js";
import restrict from "../helpers/restrict.js";

const router = Router();

router.get("/sunscreens", controllers.getSuncreens)
router.get("/sunscreens/:id", controllers.getOneSuncreen)
router.post("/sunscreens",restrict, controllers.createSuncreen); 
router.put("/sunscreens/:id",restrict, controllers.editSuncreen);
router.delete("/sunscreens/:id",restrict, controllers.deleteSuncreen);

export default router;
