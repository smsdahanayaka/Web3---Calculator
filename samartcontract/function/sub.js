const {createInstance}= require('../function/connection');


async function sub(num1,num2){
    var result=await createInstance();
    var instance=result.instance;
    var account=result.account;
    // console.log('account',instance.methods)

    var sub=await instance.methods.sub(num1,num2);
    var resul_final=await sub.send({from:account[0]});
    var resul_final1=await sub.call({from:account[0]});
    console.log("final result is ",Number(resul_final1));
}
sub(5,2);
module.exports={sub}