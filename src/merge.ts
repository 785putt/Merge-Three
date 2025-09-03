export function merge(
    collection_1: number[],
    collection_2: number[],
    collection_3: number[]
  ): number[] {
    let i = 0; // pointer for collection_1 (ascending)
    let j = collection_2.length - 1; // pointer for collection_2 (descending)
    let k = 0; // pointer for collection_3 (ascending)
  
    const result: number[] = [];
  
    while (i < collection_1.length || j >= 0 || k < collection_3.length) {
      const val1 = i < collection_1.length ? collection_1[i] : Number.POSITIVE_INFINITY;
      const val2 = j >= 0 ? collection_2[j] : Number.POSITIVE_INFINITY;
      const val3 = k < collection_3.length ? collection_3[k] : Number.POSITIVE_INFINITY;
  
      const minVal = Math.min(val1, val2, val3);
  
      if (minVal === val1) {
        result.push(val1);
        i++;
      } else if (minVal === val2) {
        result.push(val2);
        j--;
      } else {
        result.push(val3);
        k++;
      }
    }
  
    return result;
  }
  