import express from "express";

import * as feedController from '../controllers/feed.js';

const router = express.Router();


//GET Requests
router.get('/projects', feedController.getAllProjects);
router.get('/single-project/:projectId', feedController.getSingleProject);

//POST Requests
router.post('/create-project', feedController.createProject)
router.post('/project-matching', feedController.projectMatching)
router.post('/delete-project-request/:projectId', feedController.deleteProjectRequest)

export default router;
