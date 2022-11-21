const getAll = (req, res) => {
    // get user from url
    if (req.query.user) {
        res.json({
            "status": "success",
            "message": `GETTING messages for  username ${req.query.user}`,
            "data": {
                "user": req.query.user,
                "message": "It's just me"
            }
        });
    } else {
        res.json({
            "status": "success",
            "message": "GETTING messages",
            "data": {
                "messages": [{
                "user": "John",
                "message": "Hello"
            },
            {
                "user": "Jane",
                "message": "Hi"
            }]
        }
    });
    }
}

const getId = (req, res) => {
    const id = req.params.id;
    let result = {
        status: "success",
        message: `GETTING message with id ${id}`,
        data: {
            messages: [
                {
                    "user" : "Lauren",
                    "message" : "It's just me"
                }
            ]
        }
    };
    res.json(result);
};

const create = (req, res) => {
    const result = {
        status: "success",
        message: "POSTING a new message for user Lauren",
        data: {
            messages: [
                {
                    "user" : "Lauren",
                    "message" : "It's just me"
                }
            ]
        }
    };
    res.json(result);
};

const update = (req, res) => {
    // get id from url
    const id = req.params.id;
    res.json({
        "status": "success",
        "message": "UPDATING message with id " + id,
        "data": {
            "messages": [{
                "user": "John",
                "message": "Correcting my message"
            }
            ]
        }
    })
}

const remove = (req, res) => {
    // get id from url
    const id = req.params.id;
    res.json({
        "status": "success",
        "message": "DELETING message with id " + id,
        "data": {
            "messages": [{
                "message": "Message deleted"
            }
            ]
        }
    })
}

module.exports.getAll = getAll
module.exports.getId = getId
module.exports.create = create
module.exports.update = update
module.exports.remove = remove