let name="Siham";
let age=22;
let isgraduated=false;
let undef;
let empty=null;
let sym=Symbol("id");
let bignum=1234556778899088787665544321223246840373545839;

let primitives=[name,age,isgraduated,undef,empty,sym,bignum]

for (let item of primitives){
    console.log(typeof item);
}


{
    var x=2024;
}
console.log("Var x = ",x)
{
    let y=2025;
    console.log("Inside Block", y);
}
console.log("Outside Block", y);
const pi=3.14;
console.log("Const pi = ", pi)
pi=3.15;

