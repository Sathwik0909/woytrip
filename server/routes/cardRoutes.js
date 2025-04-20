import express from "express";
import { uploadImages } from "../middlewares/uploadMiddleware.js";
import {
  createCard,
  getCards,
  updateCard,
  deleteCard,
} from "../controllers/cardController.js";
import multer from "multer";
import { protect } from "../middlewares/authMiddleware.js";

const upload = multer({ storage: multer.memoryStorage() });
const router = express.Router();

router.post("/upload",protect, upload.array("images"), uploadImages(true), createCard);
router.get("/", getCards);
router.put("/:id",protect, upload.array("images"), uploadImages(false), updateCard);
router.delete("/:id",protect, deleteCard);

export default router;
