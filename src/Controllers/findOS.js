const os = require('os')
exports.OS = (req, res) => {
    try {
        return res.status(200).send({
            OS: os.platform(),
            Release: os.release()
        })
    } catch (error) {
        return res.status(400).send(error.message)
    }
}