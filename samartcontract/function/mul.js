const {createInstance}= require('../function/connection');

async function mul(num1,num2){
    var result=await createInstance();
    var account = result.account;
    var instance = result.instance;

    var mul= await instance.methods.mul(num1,num2);
    var result = await mul.call({from:account[0]});
    console.log('final result ',Number(result));
}

mul(5,4);

module.exports={mul};