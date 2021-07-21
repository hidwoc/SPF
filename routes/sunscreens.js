import { Router } from "express";
import * as controllers from "../controllers/sunscreens.js";
// import restrict from "../helpers/restrict.js";

const router = Router();
// console.log(controllers.getSuncreens)
router.get("/suncreens", controllers.getSuncreens)
router.get("/sunscreens/:id", controllers.getOneSuncreen)
// router.post("/sunscreens", restrict, controllers.createSunscreen);
// router.put("/sunscreens/:id", restrict, controllers.editSunscreen);
// router.delete("/sunscreens/:id", restrict, controllers.deleteSunscreen);

export default router;
