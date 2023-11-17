import express from "express";
import paperRouter from "./routes/index.js";

const app = express();

app.use(express.json());

app.use("/api", paperRouter);

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
