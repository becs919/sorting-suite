import { expect } from 'chai';
import bubbleSort from '../scripts/bubble'


describe('buddle sort', () => {
  it('should return to me an array', ()=> {
    let array = [2, 1, 3, 5, 4];
    expect(bubbleSort(array)).to.deep.equal([1, 2, 3, 4, 5]);

  });
});
