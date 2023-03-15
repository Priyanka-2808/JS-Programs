// const { resolveUrl } = require("wd/lib/utils");
// console.log(" eat ");
// setTimeout(()=>{
//     console.log(" ice cream ");
// },4000);
// console.log("with a ");
// console.log(" spoon ");


let stocks={
    Fruits : ["apple","strawberry","grapes","banana"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"],
};

let is_shop_open=true;

let order = () => {
    return new Promise((resolve,reject)=>{
        if(true ) {
            resolve()

        }
        else {
            reject()
        }
    } )
}

// order()
// .then()
// .then()
// .then()
// .catch()
// .finally()

async function order () {
    try{
        await abc;
    } catch(error){
        console.log("abc doesn't exist",error);
    } finally{
        console.log("runs code anyways ");
    }
}

order().then(()=>{
    console.log("ergtrhyt");
});












