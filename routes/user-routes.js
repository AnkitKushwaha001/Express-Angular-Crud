const express = require("express");
const { addUser, getUsers, getUser, updateUser, deleteUser } = require("../handler/userHandler");
const router = express.Router();

router.post("/users",async (req, res) => {
    // user add operation
    console.log("req.body", req.body);
    const user = await addUser(req.body);
    // res.send("done");
    res.status(201).json({user})
  });
  
router.get("/users",async (req, res) => {
    // user get operation
    let users =  await getUsers();
    res.send(users);
  });

router.get("/users/:id", async (req, res) => {
    // user getById operation
    console.log("id", req.params["id"]);
    let user = await getUser(req.params["id"]);
    res.send(user);
});

router.put("/users/:id", async (req, res) => {
    console.log("id: ", req.params["id"]);
    await updateUser(req.params["id"], req.body);
    res.send();
});

router.delete("/users/:id", async(req, res) => {
    console.log("id:", req.params["id"]);
    await deleteUser(req.params["id"]);
    res.send();
});

module.exports = router;
