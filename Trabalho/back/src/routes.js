const Express = require('express');

const router = Express.Router();

const lancamentosControle = require("./controles/lancamentosControle.js");

router.get("/livroCaixa/lancamentos", lancamentosControle.listarLancamentos);
router.get("/livroCaixa/lancamentos/:data", lancamentosControle.listaLancamentos);
router.post("/livroCaixa/lancamentos", lancamentosControle.cadastrarLancamentos);
router.delete("/livroCaixa/lancamentos", lancamentosControle.excluirLancamentos);
router.put("/livroCaixa/lancamentos", lancamentosControle.editarLancamentos);


module.exports = router;