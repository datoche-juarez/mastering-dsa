class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
      //   console.log('If block...');
    }
    this.data[address].push([key, value]);
    // console.log(this.value);
    // console.log(this.data);
    return this.value;
  } // O(1)

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    console.log("currentBucket", currentBucket);

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    } // O(1) if there are no collisions
    return undefined;
  }
}

const myHashTable = new HashTable(2);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 54);
myHashTable.get("grapes");
console.log(myHashTable.data);
