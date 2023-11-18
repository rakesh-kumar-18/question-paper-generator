// Function to shuffle an array
function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

// Function to generate a question paper based on input parameters
export function generateQuestionPaper(
	marks,
	difficultyDistribution,
	questionStore
) {
	const questionPaper = [];

	difficultyDistribution.forEach(({ difficulty, percentage }) => {
		var markForEach;

		if (difficulty === "Easy") {
			markForEach = 5;
		} else if (difficulty === "Medium") {
			markForEach = 10;
		} else {
			markForEach = 15;
		}

		const marksForDifficulty =
			Math.floor((percentage / 100) * marks) / markForEach;
		const questions = shuffleArray(
			questionStore.filter((q) => q.difficulty === difficulty)
		);

		questionPaper.push(...questions.slice(0, marksForDifficulty));
	});

	return questionPaper;
}
