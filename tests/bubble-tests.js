import { expect } from 'chai';
import bubbleSort from '../scripts/bubble'


describe('bubble sort function', () => {
  it('should return to me an array', () => {
    expect(Array.isArray(bubbleSort([]))).to.be.true
  });

  it('should return an array with same length', () => {
    let array = [2, 4, 1, 3, 5]
    expect(bubbleSort(array)).to.have.lengthOf(5);
  });

  it('should return to me a sorted array wuth numbers', ()=> {
    let array = [2, 1, 3, 5, 4];
    expect(bubbleSort(array)).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it('should return to me a sorted array with letter', ()=> {
    let array = ['c', 'b', 'd', 'a'];
    expect(bubbleSort(array)).to.deep.equal(['a', 'b', 'c', 'd']);
  });

});
