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
