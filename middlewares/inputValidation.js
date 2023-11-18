import { body, validationResult } from "express-validator";

// Middleware for handling validation errors
export const handleValidationErrors = (req, res, next) => {
	const errors = validationResult(req);

	if (errors.isEmpty) {
		const errorMessages = errors.array().map((error) => error.msg);
		return res.status(400).json({ errors: errorMessages });
	}

	next();
};

// Middleware for validating input
export const validateInput = [
	body("marks")
		.isInt({ min: 0 })
		.withMessage("Marks must be a non-negative integer"),
	body("easy")
		.isInt({ min: 0 })
		.withMessage("Easy percentage must be a non-negative integer"),
	body("medium")
		.isInt({ min: 0 })
		.withMessage("Medium percentage must be a non-negative integer"),
	body("hard")
		.isInt({ min: 0 })
		.withMessage("Hard percentage must be a non-negative integer"),
	handleValidationErrors,
];
