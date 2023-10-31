const { Jewelry } = require("../models");

module.exports = {
  // get all jewelry
  async index(req, res) {
    try {
      const jewelry = await Jewelry.findAll();
      res.send(jewelry);
    } catch (err) {
      res.status(500).send({
        error: "The jewelry information was incorrect",
      });
    }
  },
  // create jewelry
  async create(req, res) {
    try {
      const jewelry = await Jewelry.create(req.body);
      res.send(jewelry.toJSON());
    } catch (err) {
      res.status(500).send({
        error: "Create Jewelry incorrect",
      });
    }
  },
  // edit jewelry, active
  async put(req, res) {
    try {
      await Jewelry.update(req.body, {
        where: {
          id: req.params.jewelryId,
        },
      });
      res.send(req.body);
    } catch (err) {
      res.status(500).send({
        error: "Update Jewelry incorrect",
      });
    }
  },
  // delete jewelry
  async remove(req, res) {
    try {
      const jewelry = await Jewelry.findOne({
        where: {
          id: req.params.jewelryId,
        },
      });

      if (!jewelry) {
        return res.status(403).send({
          error: "The Jewelry information was incorrect",
        });
      }

      await jewelry.destroy();
      res.send(jewelry);
    } catch (err) {
      res.status(500).send({
        error: "The Jewelry information was incorrect",
      });
    }
  },

  // get jewelry by id
  async show(req, res) {
    try {
      const jewelry = await Jewelry.findByPk(req.params.jewelryId);
      res.send(jewelry);
    } catch (err) {
      res.status(500).send({
        error: "The Jewelry information was incorrect",
      });
    }
  },
};
