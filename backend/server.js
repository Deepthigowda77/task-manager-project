const app = require("./src/app");
const db = require("./src/config/db");
const taskRoutes = require("./src/routes/taskRoutes");

const PORT = 5000;

app.use("/api/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});