/**
 * @param {Array} iterable
 * @return {Promise<Array>}
 */
export default function promiseAll(iterable: Array<any>): Promise<Array<any>> {
    return new Promise((resolve, reject) => {
      const len = iterable.length;
      const result = new Array(len);
      let unresolved = len;
      if(unresolved === 0) {
        resolve(result);
        return;
      }
  
      iterable.forEach((item, index) => {
        Promise.resolve(item).then((value) => {
          result[index] = value;
          unresolved -=1;
          if(unresolved === 0) {
            resolve(result);
          }
        }, (error) => {
          reject(error);
        })
      })
    });
  }