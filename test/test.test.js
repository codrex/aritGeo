import { expect } from 'chai';
import aritGeo from '../src/main';

describe('Testing aritGeo function',()=>{
  it('should return Arithmetic',()=>{
    expect(aritGeo([1,2,3,4,5,6])).to.equal('Arithmetic');
  });
  it('should return Arithmetic',()=>{
    expect(aritGeo([10,8,6,4,2])).to.equal('Arithmetic');
  });
  it('should return Arithmetic',()=>{
    expect(aritGeo([10,8,6,2])).to.equal(-1);
  });
  it('should return Arithmetic',()=>{
    expect(aritGeo([-8,-6,-4,-2,0,2])).to.equal('Arithmetic');
  });
  it('should return Arithmetic',()=>{
    expect(aritGeo([5,10,15,20,25,30])).to.equal('Arithmetic');   
  });
  it('should return 0 for empty array',()=>{
    expect(aritGeo([])).to.equal(0);
  });
  it('should return undefined for arg type not array',()=>{
    expect(aritGeo('123456')).to.equal(undefined);
  });
  it('should return -1 ',()=>{
    expect(aritGeo([1,2,3,4,5,6,3,19])).to.equal(-1);
  });
  it('should return -1 ',()=>{
    expect(aritGeo([1,2,3,4,5,6,3,19])).to.equal(-1);
  });
  it('should return -1 ',()=>{
    expect(aritGeo([2])).to.equal(-1);
  });
  
  it('should return Geometric',()=>{
    expect(aritGeo([10, 30, 90, 270, 810, 2430])).to.equal('Geometric');
  });
  it('should return Geometric',()=>{
    expect(aritGeo([2, 4, 8, 16, 32, 64, 128, 256])).to.equal('Geometric');
  });
  it('should return -1 ',()=>{
    expect(aritGeo([2, 4, 8, 16, 32, 64, 129, 256])).to.equal(-1);
  });
   it('should return Geometric ',()=>{
    expect(aritGeo([4, 2, 1, 0.5, 0.25])).to.equal('Geometric');
  });
  
})