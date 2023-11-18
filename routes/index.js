import express from "express";
import { questionStore } from "../data/questionStore.js";
import { generateQuestionPaper } from "../utils/questionPaperGenerator.js";
import { validateInputValues } from "../middlewares/inputValidation.js";

const paperRouter = express.Router();

// Endpoint for generating a question paper
paperRouter.post("/generate-paper", (req, res) => {
	const { marks, easy, medium, hard } = req.body;

	const validationError = validateInputValues(marks, easy, medium, hard);
	if (validationError) {
		return res.status(400).json({ error: validationError });
	}

	try {
		const difficultyDistribution = [
			{ difficulty: "Easy", percentage: easy },
			{ difficulty: "Medium", percentage: medium },
			{ difficulty: "Hard", percentage: hard },
		];

		const questionPaper = generateQuestionPaper(
			marks,
			difficultyDistribution,
			questionStore
		);

		res.status(200).json({ questionPaper });
	} catch (error) {
		res.status(500).json({ error: "Internal Server Error" });
	}
});

export default paperRouter;
