const router = require("express").Router();
const { requireLogin } = require("../middlewares/route-guard");

router.use(requireLogin);
const renderProfilePage = (req, res) => {
  res.render("profile", { user: req.session.currentUser });
};
router.get("/profile", renderProfilePage);



module.exports = router;