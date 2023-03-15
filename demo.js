let stocks={
    FRUITS:["a","b","c"],
    toppings:["choco","straw"],
};

let shop_is_open=true;

let order=(time,work)=> {
    return new Promise((resolve,reject)=>{
        if(shop_is_open){
            setTimeout(()=> {
                resolve(work() );
                },time);
            }
            else {
                reject(console.log("our shop is closed"))
            }
        });
    };
    