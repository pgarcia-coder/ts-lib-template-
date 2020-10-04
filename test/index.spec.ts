import { expect } from "chai"

import { sayHello } from '../src/index'

describe('Test index/sayHello', () => {
    it('should return Hello', () => {
        expect(sayHello()).to.be.equals('Hello');
    });
});