
const listServices = require('../services/listServices');

const listBuckets = async (req, res, next) => {
    try {
        const buckets = await listServices.listBuckets();
        res.json({result:buckets});
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const listObjects = async (req, res, next) => {
    try {
        const objects = await listServices.listObjects(req, res, next);
        res.json({result:objects});
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getObject = async (req, res, next) => {
    try {
        const { bucketName, objectKey } = req.params;
        const object = await listServices.getObject(bucketName, objectKey);
        if (!object) {
            return res.status(404).json({ error: 'Object not found' });
        }
        res.json({result:object});
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const putObject = async (req, res, next) => {
    try {
        const { bucketName, objectKey } = req.params;
        const { data } = req.body;
        await listServices.putObject(bucketName, objectKey, data);
        res.status(201).json({ message: 'Object stored successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const deleteObject = async (req, res, next) => {
    try {
        const { bucketName, objectKey } = req.params;
        await listServices.deleteObject(bucketName, objectKey);
        res.json({ message: 'Object deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    listBuckets,
    listObjects,
    getObject,
    putObject,
    deleteObject
};