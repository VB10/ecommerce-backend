function baseErrorMessage(statusCode, message) {

    return {
        "statusCode": statusCode,
        "message": message
    }
}

module.exports = baseErrorMessage