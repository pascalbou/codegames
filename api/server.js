const express = require('express');
const codegamesRouter = require('../codegames/router');

const server = express();

server.use(express.json());
server.use('/api/words', codegamesRouter);

server.get('/', (req, res) => {
	res.send("It's working!");
});

module.exports = server;
