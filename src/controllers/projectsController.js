const projectsRepositoty = require('../repositories/projectsRepository');

exports.getprojects = async (req, res) => {
    const projects = await projectsRepositoty.getprojects();
    res.json(projects);
};

exports.getProjectById = async (req, res) => {
    const id = parseInt(req.params.id);
    const project = await projectsRepositoty.getProjectById(id);
    res.json(project);
}

exports.createProject = async (req, res) => {
    const project = req.body;
    const newProject = await projectsRepositoty.createProject(project);
    res.json(newProject);
}

exports.updateProject = async (req, res) => {
    const id = parseInt(req.params.id);
    const project = req.body;
    const updatedProject = await projectsRepositoty.updateProject(id, project);
    res.json(updatedProject);
}

exports.deleteProject = async (req, res) => {
    const id = parseInt(req.params.id);
    await projectsRepositoty.deleteProject(id);
    res.json({message: `Project ${id} deletado`});
}