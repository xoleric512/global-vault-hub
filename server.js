require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Schemas
const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  balance: { type: Number, default: 0 },
});

const transactionSchema = new mongoose.Schema({
  from: String,
  to: String,
  amount: Number,
  date: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);
const Transaction = mongoose.model("Transaction", transactionSchema);

// JWT middleware
const auth = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ error: "No token" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: "Invalid token" });
    req.userId = decoded.id;
    next();
  });
};

// Routes
app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  try {
    const user = await User.create({ email, password: hashed });
    res.json({ message: "Account created", userId: user._id });
  } catch {
    res.status(400).json({ error: "Email already exists" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: "User not found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ error: "Wrong password" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token, userId: user._id, balance: user.balance });
});

app.get("/balance", auth, async (req, res) => {
  const user = await User.findById(req.userId);
  res.json({ balance: user.balance });
});

app.post("/transfer", auth, async (req, res) => {
  const { toEmail, amount } = req.body;
  const sender = await User.findById(req.userId);
  const receiver = await User.findOne({ email: toEmail });

  if (!receiver) return res.status(404).json({ error: "Receiver not found" });
  if (sender.balance < amount) return res.status(400).json({ error: "Not enough balance" });

  sender.balance -= amount;
  receiver.balance += amount;
  await sender.save();
  await receiver.save();
  await Transaction.create({ from: sender.email, to: receiver.email, amount });

  res.json({ message: "Transfer successful" });
});

app.get("/transactions", auth, async (req, res) => {
  const user = await User.findById(req.userId);
  const tx = await Transaction.find({ $or: [{ from: user.email }, { to: user.email }] });
  res.json(tx);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(Backend running on port ${PORT}));
