import express from "express";
import { questionStore } from "../data/questionStore.js";
import { generateQuestionPaper } from "../utils/questionPaperGenerator.js";
import { validateInput } from "../middlewares/inputValidation.js";

const paperRouter = express.Router();

paperRouter.post("/generate-paper", validateInput, (req, res, next) => {
	const { marks, easy, medium, hard } = req.body;

	try {
		if (easy + medium + hard !== marks) {
			return res
				.status(400)
				.json({ error: "The sum of percentages must be equal to total marks" });
		}

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
		next(error);
	}
});

export default paperRouter;
