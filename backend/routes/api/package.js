const express = require('express');
const asyncHandler = require('express-async-handler');
// const { PackageBases } = require('../../../frontend/src/components/packages/PackageBases');
const { TextStyle, ImageStyle, PackageFace, PackageBase, SavedPackageDesign } = require('../../db/models');
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

router.post('/save', asyncHandler(async function(req, res) {
    const { userId, designState } = req.body;

    let packageFaces = designState.packageFaces
    const newSavedPackageDesign = await SavedPackageDesign.create({
        name: designState.name,
        userId: userId,
        packageBaseId: designState.packageBaseId
    });

    const textStyles = [];
    const imageStyles = [];
    const faces = [];

    for(let packageFace in packageFaces) {
        let attributes = {side: packageFace, packageDesignId: newSavedPackageDesign.id};

        const createdPackage = await PackageFace.create(attributes)
        faces.push(createdPackage);

        const thePackageFace = packageFaces[packageFace]
        if(thePackageFace.ImageStyle) {
            attributes = {url:thePackageFace.ImageStyle.url, packageFaceId: createdPackage.id}
            if(thePackageFace.ImageStyle.cover) attributes.cover = thePackageFace.ImageStyle.cover;
            imageStyles.push(await ImageStyle.create(attributes))
        }
        if(thePackageFace.textStyle) {
            attributes = {text:thePackageFace.textStyle.text , packageFaceId: createdPackage.id}
            if(thePackageFace.textStyle.fontSize) attributes.fontSize = thePackageFace.textStyle.fontSize;
            if(thePackageFace.textStyle.fontFamily) attributes.fontFamily = thePackageFace.textStyle.fontFamily;
            if(thePackageFace.textStyle.color) attributes.color = thePackageFace.textStyle.color;
            textStyles.push(await TextStyle.create(attributes));
        }
    }
    res.json({newSavedPackageDesign, imageStyles, textStyles, faces});
}))

module.exports = router;
