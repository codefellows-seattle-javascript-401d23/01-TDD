'use strict';

const greet=module.exports={};

greet.hi=(name)=>{
    if(typeof(name)==='string'){
            return('Hello, ${name}!');
    }
    else{
        return null;
    }
};