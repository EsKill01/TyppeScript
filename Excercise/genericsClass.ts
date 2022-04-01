interface Identity<T, U> {
    value: T;
    message: U;
}

interface ProcessIdentity<T, U> {
    (value: T, message: U): T;
}
 interface ProcessIdentity2<T, U> {
     value: T;
     message: U;
     process(): T;
 }

 class processIdentityClass<X, Y> implements ProcessIdentity2<X, Y>{
     value: X;
     message: Y;

     constructor(val: X, msg: Y){
         this.value = val;
         this.message = msg;
     }
     process() : X {
         console.log(this.message);
         return this.value;
     }
 }

 //Class with out class

 class processIdentity3<T, U>{
     private _value: T;
     private _message: U;

     constructor(value: T, message: U){
         this._value = value;
         this._message = message;
     }

     getIdentity() : T{
         console.log(this._message);
         return this._value;
     }
 }

 let proces = new processIdentity3<number, string>(100, 'Hola');
 proces.getIdentity();

 let processNumb = new processIdentity3<string, string>('Hola', 'Mundo');
 let result = processNumb.getIdentity();
 console.log("El valor retornado es: "+result);

 let processo2 = new processIdentityClass<number, string>(100, 'Hello');
 processo2.process();
 //processo2.value = '100'; //Type check error


let returnNumber: Identity<string, number> = {
    value: 'Hello',
    message: 25
}

let returnString: Identity<string, number> = {
    value: 'Hello',
    message: 36
}

function processIdentity<T, U>(value: T, message: U) : T {
    console.log(message);
    return value
}

let processor: ProcessIdentity<number, string> = processIdentity;
let returnNumber1 = processor(100, 'Hello!');   // OK
//let returnString1 = processor('Hello!', 100);   // Type check error
