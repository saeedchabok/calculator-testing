const add = (input1, input2) =>
{
    if (typeof input1 === 'string' || typeof input2 === 'string' )
    return 'error';
    else
    return input1+input2;
}
const subtract = (input1,input2) => 
{
    return input1 - input2;
}
const multiplication = (input1 , input2) =>
{
    return input1 * input2;
}
const division = (input1,input2) =>
{
    if (input2 === 0 )
    return 'The second number is zero. This is not true!!'
    else
    return input1 / input2;
}

module.exports = { add , subtract , multiplication , division };
