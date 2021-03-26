const router = require('express').Router();

const apiRoutes = require('./api/');
const projectRoutes = require('./project-routes.js');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/project', projectRoutes);

module.exports = router;
