const getAll = (req, res) => {
    // check for query user
    if (req.query.user) {
        const user = req.query.user;
        const response = {
            status: 'success',
            message: `GETTING messages for user ${user}`,
            data: { user: user, message: 'Hello' }
        }
        res.json(response);
    } else {
        const response = {
            status: 'success',
            message: 'GETTING all messages',
            data: [{ user: 'John', message: 'Hello' }, { user: 'Jane', message: 'Hi' }]
        }
        res.json(response);
    }
};

const getById = (req, res) => {
    const id = req.params.id;
    const response = {
        status: 'success',
        message: `GETTING message with id ${id}`,
        data: { id: id, user: 'John', message: 'Hello' } 
    }
    res.json(response);
};

const create = (req, res) => {
    const response = {
        status: 'success',
        message: 'CREATING new message',
        data: { user: req.body.user, message: req.body.message }
    }
    res.json(response);
};

const update = (req, res) => {
    const id = req.params.id;
    const response = {
        status: 'success',
        message: `UPDATING message with id ${id}`,
        data: { id: id, user: req.body.user, message: req.body.message }
    }
    res.json(response);
}

