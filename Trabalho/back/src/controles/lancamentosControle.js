const mysql = require('mysql');

const conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "caixa"
});

function listarLancamentos(req, res) {
    let query = "SELECT * FROM lancamentos order by data DESC";

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

function listaLancamentos(req, res) {
    let query = `SELECT * FROM lancamentos WHERE data = '${req.params.data}'`;
    
    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(result).end();
        }else {
            res.status(400).json(err).end();
        }
    })
};

function cadastrarLancamentos(req, res) {
    let data = new Date()
    let query = `INSERT INTO lancamentos VALUES (DEFAULT, '${(data.getFullYear() + "-" + ((data.getMonth() + 1)) + "-" + (data.getDate() ))}', '${req.body.descricao}', ${req.body.valor}, '${req.body.tipo}')`;
    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(201).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

function excluirLancamentos(req, res) {
    let query = `DELETE FROM lancamentos WHERE n_lancamento = ${req.body.n_lancamento}`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

function editarLancamentos(req, res){
    let query = `UPDATE lancamentos SET n_lancamento = ${req.body.n_lancamento}, data = '${req.body.data}', descricao = '${req.body.descricao}', valor = ${req.body.valor}, tipo = '${req.body.tipo}' WHERE n_lancamento = ${req.body.n_lancamento}`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

module.exports = {
    listarLancamentos,
    listaLancamentos,
    cadastrarLancamentos,
    excluirLancamentos,
    editarLancamentos
}