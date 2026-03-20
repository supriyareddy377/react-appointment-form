const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();


app.use(cors());
app.use(express.json());

const appointmentRoutes = require("./routes/appointmentRoutes");

app.use("/api", appointmentRoutes);

mongoose.connect("mongodb+srv://supriyareddy377_db_user:SupriyaReddy@cluster0.ev26mfg.mongodb.net/appointmentsDB?retryWrites=true&w=majority")
.then(() => {
  console.log("MongoDB Atlas Connected");
})
.catch((err) => {
  console.log(err);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

