const { v4 } = require("uuid")

module.exports = async function (req, res) {
    res.status(200).json({
        uuid: v4()
    })

    // TEST
} 