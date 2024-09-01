// fileUtils.js
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

async function readJsonFile(filePath) {
    try {
        let data = await readFile(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        throw new Error('读取文件失败');
    }
}

async function writeJsonFile(filePath, data) {
    try {
        await writeFile(filePath, JSON.stringify(data, null, 2));
    } catch (error) {
        throw new Error('写入文件失败');
    }
}

module.exports = {
    readJsonFile,
    writeJsonFile
};