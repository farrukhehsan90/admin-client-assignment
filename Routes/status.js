const express = require("express");
const router = express.Router();
const User = require("../Models/user");

router.get("/", async (req, res) => {
  const { userId } = req.query;

  try {
    const user = await User.findOne({ userId: userId });
    console.log(user);
    if (user) {
      res.send({ statusCode: 200, isauth: user.isAuthenticated });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
