import { merge } from '../src/merge';

describe('merge()', () => {
  it('merges three non-empty arrays', () => {
    const a = [1, 3, 5];
    const b = [6, 4, 2]; // descending
    const c = [0, 7, 8];
    expect(merge(a, b, c)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('handles empty collection_2', () => {
    expect(merge([1, 2], [], [0, 3])).toEqual([0, 1, 2, 3]);
  });

  it('handles empty collection_1 or 3', () => {
    expect(merge([], [3, 1], [])).toEqual([1, 3]);
    expect(merge([], [], [])).toEqual([]);
  });

  it('works with duplicates', () => {
    expect(merge([1, 2, 2], [3, 2, 1], [2, 3])).toEqual([1, 1, 2, 2, 2, 2, 3, 3]);
  });

  it('works with negative numbers', () => {
    expect(merge([-5, 0], [1, -1, -2], [-3, 2]))
      .toEqual([-5, -3, -2, -1, 0, 1, 2]);
  });
});
