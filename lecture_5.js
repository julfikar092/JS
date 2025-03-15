/*function myF(){
    console.log("Hello from custom function");
}

function myF2(){
    console.log("Hello from function 2");
}

myF();
myF2();
*/

/*function addition(a,b){
    return a+b;
}

let in1 = parseInt(prompt("Enter a value: "));

let in2 = parseInt(prompt("Enter b value: "));

let value = addition(in1,in2);

console.log(value);
*/

// Practice

/*function vowelCount(str){
    let count =0;

    // for(let i=0; i<str.length; i++){
    //     if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){

    //     count = count + 1;
    //     }
    // }

    for(let char of str){
        if( char=="a"||
            char=="e"||
            char=="i"||
            char=="o"||
            char=="u"){
                count = count + 1;
            }
    }

    console.log(count);
}*/

// let count = vowelCount("Hello Julfikar");

// console.log(`Total vowel in the sentence: ${count}`);

const vowelCountArrow = (str) =>{
    let count =0;

    // for(let i=0; i<str.length; i++){
    //     if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){

    //     count = count + 1;
    //     }
    // }

    for(let char of str){
        if( char=="a"||
            char=="e"||
            char=="i"||
            char=="o"||
            char=="u"){
                count = count + 1;
            }
    }

    return count;
}

let count = vowelCountArrow("Hello Julfikar Rahman Shimul");

console.log(`Total vowel in the sentence: ${count}`);