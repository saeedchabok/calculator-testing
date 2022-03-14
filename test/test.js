const { expect } = require('chai');
const chai = require('chai');
const { describe, it } = require('mocha');
const calculator = require('../src/index.js');

describe('calculator', () => 
{
    describe('Add to number', () => 
    {
        const addToNumber = calculator.add(5,2);
        const addToString = calculator.add('5','2')
        it('add to number', () => 
        {
            expect(addToNumber).to.equal(7)
        })
        it('add to string', () => 
        {
            expect(addToString).to.equal('error');
        })

    });
    
});
    describe('subtract', () => 
    {
        const subtractToNumber = calculator.subtract(10,5);
        const subtractToString = calculator.subtract('10','5')
        it('subtract to number', () => 
        {
            expect(subtractToNumber).to.equal(5)
        })
        it('subtract to string', () => 
        {
            expect(subtractToString).to.equal('error');
        })

    });
    describe('multiplication', () => 
    {
        const multiplicationToNumber = calculator.multiplication(10,5);
        const multiplicationToString = calculator.multiplication('10','5')
        it('multiplication to number', () => 
        {
            expect(multiplicationToNumber).to.equal(50)
        })
        it('multiplication to string', () => 
        {
            expect(multiplicationToString).to.equal('error');
        })

    });
    describe('division', () => 
    {
        const divisionToNumber = calculator.division(2,10);
        const divisionNumberAndZero = calculator.division(5,0);
        const divisionToString = calculator.division('2','10')
        it('division to number', () => 
        {
            expect(divisionToNumber).to.equal(5)
        })
        it('division to string', () => 
        {
            expect(divisionToString).to.equal('The second number is zero. This is not true!!');
        })
        it('division', () => 
        {
            expect(divisionNumberAndZero).to.equal('error');
        })

    });          
