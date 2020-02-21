module.exports = class Api {
  constructor(app) {
    this.app = app;
    this.get();
    this.post();
    this.put();
    this.delete();
  }

  get() {
    this.app.get('/:id', (req, res) => {
      const found = users.some(user => user.id === parseInt(req.params.id));

      if (found) {
        res.json(users.filter(user => user.id === parseInt(req.params.id)));
      } else {
        res.status(400).json({ msg: `No users with the id of ${req.params.id}` });
      }
    });
  }

  post() {
    this.app.post('/', (req, res) => {
      const newUser = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
      };

      if (!newUser.name || !newUser.email) {
        return res.status(400).json({ msg: 'Please include a name and email' });
      }

      users.push(newUser);
      res.json(users);
      // res.redirect('/');
    });
  }

  put() {
    this.app.put('/:id', (req, res) => {
      const found = users.some(user => user.id === parseInt(req.params.id));

      if (found) {
        const updateUser = req.body;
        users.forEach(user => {
          if (user.id === parseInt(req.params.id)) {
            user.name = updateUser.name ? updateUser.name : user.name;
            user.email = updateUser.email ? updateUser.email : user.email;

            res.json({ msg: 'User updated', user: user });
          }
        });
      } else {
        res.status(400).json({ msg: `No user with the id of ${req.params.id}` });
      }
    });
  }

  delete() {
    this.app.delete('/:id', (req, res) => {
      const found = users.some(user => user.id === parseInt(req.params.id));

      if (found) {
        res.json({
          msg: 'User deleted',
          users: users.filter(user => user.id !== parseInt(req.params.id))
        });
      } else {
        res.status(400).json({ msg: `No user with the id of ${req.params.id}` });
      }
    });
  }
};
