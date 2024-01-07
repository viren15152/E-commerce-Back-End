const router = require('express').Router();
const { router: apiRoutes } = require('./api'); 

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;