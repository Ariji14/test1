const UserController = require('./controllers/UserController')
const UserAuthenController = require('./controllers/UserAuthenController')
const isAuthenController = require('./authen/isAuthenController')
const JewelryController = require('./controllers/JewelryController');

module.exports = (app) => {
    /* RESFUL Api for users management */
    // get all user
    app.get('/users',isAuthenController,UserController.index),

    // create user
    app.post('/user',UserController.create),

    // edit user, suspend, active
    app.put('/user/:userId', UserController.put)

    // delete user
    app.delete('/user/:userId',UserController.remove)

    // get user by id
    app.get('/user/:userId',UserController.show)

    // get all jewelry
  app.get('/jewelry', JewelryController.index);

  // create jewelry
  app.post('/jewelry', JewelryController.create);

  // edit jewelry
  app.put('/jewelry/:jewelryId', JewelryController.put);

  // delete jewelry
  app.delete('/jewelry/:jewelryId', JewelryController.remove);

  // get jewelry by id
  app.get('/jewelry/:jewelryId', JewelryController.show);

    app.post('/login',UserAuthenController.login)

}