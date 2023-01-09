const db =require("../models");
const ROLES = db.ROLES;
const User = db.user;

checkDuplicateUserOrEmail = (req, res, next) =>{
  //Check Username
  //Select * from Users where username=username
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((user) => {
    if (user) {
      res.status(400).send({
        message: "Failed! Username is alredyin use !",
      });
      return;
    }
  });

  //Check Email
  //Select * from Users where email = email
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((user) => {
    if (user) {
      res.status(400).send({
        message: "Failed! Email is alredyin use !",
      });
      return;
    }
    next();
  });
};

checkRolesExisted = (req, res, next) =>{
    if(req.body.roles){
        for(let i=0; i< req.body.role.length; i++){
            if(!ROLES.includes(req.body.roles[i])){
                res.status(400).send({
                    message: "Failed! Role dose not exist = " + req.body.roles[i]
                });
                return;
            }
        }
    }
    next();
}

const verifySingUp = {
    checkDuplicateUserOrEmail : checkDuplicateUserOrEmail,
    checkRolesExisted : checkRolesExisted
}

module.exports = verifySingUp;