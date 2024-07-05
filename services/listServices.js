
let buckets = {}; 

const listBuckets = async () => {
    try {
        const bucketNames = Object.keys(buckets);
        return bucketNames;
    } catch (err) {
        console.error(err);
        throw new Error('Error listing buckets');
    }
};

const listObjects = async (req, res, next) => {
    try {
      const { bucketName } = req.params;

        if (!buckets[bucketName]) {
          return ({ error: 'Bucket not found' });
        }
        const objectKeys = Object.keys(buckets[bucketName]);
        return objectKeys;
    } catch (err) {
        console.error(err);
        return json({ error: 'Error listing objects' });
        // throw new Error('Error listing objects');
    }
};

const getObject = async (bucketName, objectKey) => {
    try {
        if (!buckets[bucketName] || !buckets[bucketName][objectKey]) {
            return null; // Object not found scenario
        }
        return buckets[bucketName][objectKey];
    } catch (err) {
        console.error(err);
        throw new Error('Error getting object');
    }
};

const putObject = async (bucketName, objectKey, data) => {
    try {
        if (!buckets[bucketName]) {
            buckets[bucketName] = {};
        }
        buckets[bucketName][objectKey] = data;
    } catch (err) {
        console.error(err);
        throw new Error('Error putting object');
    }
};

const deleteObject = async (bucketName, objectKey) => {
    try {
        if (!buckets[bucketName] || !buckets[bucketName][objectKey]) {
          return ({ error: 'Object not found' });
        }
        delete buckets[bucketName][objectKey];
    } catch (err) {
        console.error(err);
        throw new Error('Error deleting object');
    }
};

module.exports = {
    listBuckets,
    listObjects,
    getObject,
    putObject,
    deleteObject
};