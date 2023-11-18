// Function to validate input values for question paper generation
export function validateInputValues(marks, easy, medium, hard) {
	// Validate presence of required attributes
	if (
		marks === undefined ||
		easy === undefined ||
		medium === undefined ||
		hard === undefined
	) {
		return "Missing required attributes. Please provide values for marks, easy, medium, and hard";
	}

	// Validate input values
	if (
		typeof marks !== "number" ||
		typeof easy !== "number" ||
		typeof medium !== "number" ||
		typeof hard !== "number" ||
		marks < 0 ||
		easy < 0 ||
		medium < 0 ||
		hard < 0 ||
		marks % 1 !== 0 ||
		easy % 1 !== 0 ||
		medium % 1 !== 0 ||
		hard % 1 !== 0
	) {
		return "Invalid input values. Marks and percentages must be non-negative integers";
	}

	// Validate that the sum of percentages is equal to 100
	if (easy + medium + hard !== 100) {
		return "The sum of percentages must be 100%";
	}

	return null;
}
