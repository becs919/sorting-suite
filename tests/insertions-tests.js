import { expect } from 'chai';
import insertionSort from '../scripts/insertion'

describe('insertion sort function', () => {
  it('should return to me an array', () => {
    expect(Array.isArray(insertionSort([]))).to.be.true
  });

  it('should return an array with same length', () => {
    let array = [2, 4, 1, 3, 5]
    expect(insertionSort(array)).to.have.lengthOf(5);
  });

  it('should return to me a sorted array with numbers', ()=> {
    let array = [2, 1, 3, 5, 4];
    expect(insertionSort(array)).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it('should return to me a sorted array with letter', ()=> {
    let array = ['c', 'b', 'd', 'a'];
    expect(insertionSort(array)).to.deep.equal(['a', 'b', 'c', 'd']);
  });
});
