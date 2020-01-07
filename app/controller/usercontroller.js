const db=require('../config/dbconfig');
class usercontroller{
    create(req,res){
        console.log('shirt');
        let name=req.body.name;
         let mobile=req.body.mobile;
        db.run('"INSERT into user(cust_name,cust_mobile) "+"VALUES (name,mobile)"; ')
    };
}
module.exports={
    usercontroller,db
}