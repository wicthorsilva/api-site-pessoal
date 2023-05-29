const portfolioRepositoty = require('../repositories/portfolioRepository');

exports.getPortfolio = async (req, res) => {
    const portfolio = await portfolioRepositoty.getPortfolio();
    res.json(portfolio);
};

exports.getProjetoById = async (req, res) => {
    const id = parseInt(req.params.id);
    const projeto = await portfolioRepositoty.getProjetoById(id);
    res.json(projeto);
}

exports.createProjeto = async (req, res) => {
    const projeto = req.body;
    const newProjeto = await portfolioRepositoty.createProjeto(projeto);
    res.json(newProjeto);
}

exports.updateProjeto = async (req, res) => {
    const id = parseInt(req.params.id);
    const projeto = req.body;
    const updatedProjeto = await portfolioRepositoty.updateProjeto(id, projeto);
    res.json(updatedProjeto);
}

exports.deleteProjeto = async (req, res) => {
    const id = parseInt(req.params.id);
    await portfolioRepositoty.deleteProjeto(id);
    res.json({message: `Projeto ${id} deletado`});
}