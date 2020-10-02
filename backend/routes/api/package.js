const express = require('express');
const asyncHandler = require('express-async-handler');
// const { PackageBases } = require('../../../frontend/src/components/packages/PackageBases');
const { PackageBase } = require('../../db/models');
const {authenticated} = require('./security-utils')

const router = express.Router();

router.get('/bases', asyncHandler(async function(req, res) {
    const packageBases = await PackageBase.findAll();
    res.json(packageBases);
}));

router.get('/bases/:id', asyncHandler(async function(req, res) {
    const packageBase = await PackageBase.findByPk(req.params.id)
    res.json(packageBase);
}))

module.exports = router;
