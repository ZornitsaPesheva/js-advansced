const { expect } = require('chai');
const { PaymentPackage } = require('./PaymentPackage')

describe('PaymentPackage', function() {

    it('throw error for missing parameters', () => {
        expect(() => new PaymentPackage('HR Services')).to.throw('Value must be a non-negative number');
    })

    it('throw error for unproper name type', () => {
        expect(() => new PaymentPackage(1, 1500)).to.throw('Name must be a non-empty string');
    })

    it('throw error for empty string for name', () => {
        expect(() => new PaymentPackage('',100)).to.throw('Name must be a non-empty string');
    })

    it('throw error for unproper type of value', () => {
        expect(() => new PaymentPackage('HR Services', 'string')).to.throw('Value must be a non-negative number');
    })

    it('throw error for negative number for value', () => {
        expect(() => new PaymentPackage('HR Services', -100)).to.throw('Value must be a non-negative number');
    })

    describe('getting and setting vakues', function() {
        it('get name', () => {
            let flagClass = new PaymentPackage('abc', 123);
            expect(flagClass.name).to.equal('abc');
        });
        it('get value', () => {
            let flagClass = new PaymentPackage('abc', 123);
            expect(flagClass.value).to.equal(123);
        });

        it('set name', () => {
            let flagClass = new PaymentPackage('abc', 123);
            expect(flagClass.name = 'def').to.equal(flagClass.name);
        });
        it('get value', () => {
            let flagClass = new PaymentPackage('abc', 123);
            expect(flagClass.valu = 345).to.equal(345);
        });
    })

    describe('VAT', function() {
        it('set VAT should throw errow when the new VAT is a string', () => {
            let flagClass = new PaymentPackage('abc', 123);
            expect(() => flagClass.VAT = 'abc').to.throw('VAT must be a non-negative number');
        });

        it('set VAT should throw errow when the new VAT is a negative number', () => {
            let flagClass = new PaymentPackage('abc', 123);
            expect(() => flagClass.VAT = -20).to.throw('VAT must be a non-negative number');
        });

        
    })

    describe('active', function() {
        it('set active should throw errow when the new value is not boolean', () => {
            let flagClass = new PaymentPackage('abc', 123);
            expect(() => flagClass.active = 'abc').to.throw('Active status must be a boolean');
        });
    })


})