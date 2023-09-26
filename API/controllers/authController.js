import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const secretKey = "Kunci_Rahasia";

const users = [];
const refreshTokens = [];

const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = users.find((user) => user.username === username);
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { username, password: hashedPassword };
    users.push(newUser);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Registration failed" });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = users.find((user) => user.username === username);
    if (!user) {
      return res.status(401).json({ error: "Authentication failed" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Authentication failed" });
    }
    const accessToken = jwt.sign({ username: user.username }, secretKey, {
      expiresIn: "5m",
    });
    const refreshToken = generateRefreshToken(user);
    res.json({ accessToken, refreshToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Login failed" });
  }
};

const generateRefreshToken = (user) => {
  const refreshToken = jwt.sign({ username: user.username }, secretKey);
  refreshTokens.push(refreshToken);
  return refreshToken;
};

const refreshAccessToken = (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken || !refreshTokens.includes(refreshToken)) {
    return res.status(403).json({ error: "Invalid refresh token" });
  }

  jwt.verify(refreshToken, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Invalid refresh token" });
    }
    const accessToken = jwt.sign({ username: user.username }, secretKey, {
      expiresIn: "30m",
    });
    res.json({ accessToken });
  });
};

export { register, login, refreshAccessToken, generateRefreshToken };
