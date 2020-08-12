const cloudinary = require('cloudinary')
module.exports = (req, res, next) => {
    try {
        //cloudinary configuration
        cloudinary.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.CLOUD_API_KEY,
            api_secret: process.env.CLOUD_API_SECRET

        })

        let file = req.files.file.path;
        //if there is ni file is selected then move the middleware
        if (!file) return res.status(400).send({
            status_code: 400,
            message: "Image Not Found."
        })

        //else upload the the file on cloudinary
        cloudinary.uploader.upload(file, (result) => {
            //set the response in req obj and moove to next middleware
            if (result.error) return res.status(result.error.http_code).send({
                status_code: result.error.http_code,
                message: result.error.message,

            })
            return res.status(200).send({
                status_code: 200,
                message: "Image uploaded.",
                result: result,
                imageUrl: {
                    public_id: result.public_id,
                    url: result.url
                }
            })
        }, {
            public_id: `${Date.now()}`,
            resource_type: 'auto'
        })
        //after successfull uploading of image 

    } catch (err) {
        return res.status(400).send({
            status_code: 400,
            message: err.message
        })
    }
}