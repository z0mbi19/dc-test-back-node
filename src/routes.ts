import { Router } from "express";
import {
  allPerson,
  deletePerson,
  indexPerson,
  storePerson,
  updatePerson,
} from "./controllers/personController";

const router = Router();

//Person
router.get("/person", allPerson);
router.get("/personid", indexPerson);
router.post("/person", storePerson);
router.put("/personid", updatePerson);
router.delete("/personid/:id", deletePerson);

export default router;
