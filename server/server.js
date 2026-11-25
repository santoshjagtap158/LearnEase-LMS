const express = require("express");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");
const { protect } = require("./middleware/authMiddleware");
const mongoose = require("mongoose");
const { authorizeRoles } = require("./middleware/roleMiddleware");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        message: "LearnEase API is working!"
    });
});
app.get("/api/auth/profile", protect, (req, res) => {
    res.json({
        success: true,
        message: "Profile accessed successfully!",
        user: req.user
    });
});
app.get(
    "/api/admin/dashboard",
    protect,
    authorizeRoles("admin"),
    (req, res) => {
        res.json({
            success: true,
            message: "Welcome to Admin Dashboard!"
        });
    }
);
const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected Successfully!");

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log("MongoDB Connection Error:", error.message);
    });