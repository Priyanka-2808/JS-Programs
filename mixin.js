let sayMixin = {
    say(phrase) {
        console.log(phrase);
    }
};

let sayHiMixin= {
    _proto_: sayMixin,

    sayHi() {
        super.say(`Hello ${this.name}`);
    },
    sayBye() {
        super.say(`Bye ${this.name}`);
    }
};

class User{
    constructor(name) {
        this.name=name;
    }
}
Object.assign(User.prototype,sayHiMixin);
new User("dude").sayHi();

