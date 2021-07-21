import { Router } from "express";
import * as controllers from "../controllers/sunscreens.js";
// import restrict from "../helpers/restrict.js";

const router = Router();

router.get("/sunscreens", controllers.getSuncreens)
router.get("/sunscreens/:id", controllers.getOneSuncreen)
//restrict
router.post("/sunscreens", controllers.createSuncreen); 
router.put("/sunscreens/:id", controllers.editSuncreen);
router.delete("/sunscreens/:id", controllers.deleteSuncreen);

export default router;
