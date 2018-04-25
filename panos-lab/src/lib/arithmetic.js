const arithmetic=module.exports={};
arithmetic.add=(num1,num2)=>{
    if(Number.isInteger(num1)&&Number.isInteger(num2))
{return(num1+num2);}
else{
    return(null);
}
};
arithmetic.sub=(num1,num2)=>{
    if(Number.isInteger(num1)&&Number.isInteger(num2))
{return(num1-num2);}
else{
    return(null);
}
};