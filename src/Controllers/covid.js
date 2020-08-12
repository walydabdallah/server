const Covid = require('../Models/covid')
exports.addData = async (req, res) => {
    try {
        let { date, country, state, cases, deaths } = req.body;
        let obj = {
            date: new Date(date),
            country,
            state,
            cases,
            deaths
        }
        let body = new Covid(obj);
        await body.save();
        return res.send("Saved.")
    } catch (error) {
        return res.status(400).send(error.message)
    }
}
exports.delete = async (req, res) => {
    try {
        let { id } = req.params;
        let response = await Covid.findByIdAndDelete(id).lean();
        if (response) return res.send("Deleted.");
    } catch (error) {
        return res.status(400).send(error.message)
    }
}
exports.fetch = async (req, res) => {
    try {
        let { date, country, state } = req.query;
        let query = {};

        if (date) query["date"] = new Date(date);
        if (state) query["state"] = new RegExp(state, 'i')
        if (country) query["country"] = new RegExp(country, 'i')
        let response = await Covid.aggregate([
            { $match: query },
        ])

        return res.send({
            response: response
        });
    } catch (error) {
        return res.status(400).send(error.message)
    }
} 