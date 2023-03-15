function one(call_two) {
    console.log("step one complete .please call step 2");
    call_two()
}
function two() {
    console.log("step two");
}

one(two);

let stocks={
    Fruits : ["apple","strawberry","grapes","banana"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"],
};



let order=(Fruit_name,call_production) => {

   setTimeout(()=>{
    console.log(`${stocks.Fruits[Fruit_name]} was selected `);

    call_production();

   },2000);
   
};

let production=() => {
    setTimeout(()=>{
            console.log("production has started");
            
        setTimeout(() => {
            console.log("fruit has been chopped ");

        setTimeout(()=>{
            console.log(`${stocks.liquid[0]}and ${stocks.liquid[1]} was added`);

        setTimeout(()=>{
                console.log("the machine was started");

        setTimeout(()=> {
                console.log(`ice cream was placed on ${stocks.holder[0]} `);

                setTimeout(()=> {
                    console.log(`${stocks.toppings[0]} was added `);

                    setTimeout(() => {
                        console.log("serve ice cream");
                    }, 2000);
                            },3000);

                        },2000);
                    },2000);
                },1000);
            },2000);
        },0000);
};

 order(0,production);

