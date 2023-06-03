const express = require('express');

const projectsController = require('../controllers/projectsController');

const router = express.Router();

router.get('/', projectsController.getprojects);
router.get('/:id', projectsController.getProjectById);
router.post('/', projectsController.createProject);
router.put('/:id', projectsController.updateProject);
router.delete('/:id', projectsController.deleteProject);

module.exports = router;