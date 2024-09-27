class HashTable {
    constructor(size) {
        this.data = new Array(size);
        //this.record = new record{this.item, this.amount};
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) %
            this.data.length;
        }
        return hash;
    }

    set(item, amount) {
        new record = {};
        this.item = record.item;
        this.amount = record.amount;

       

        this.item = record.item;
        this.amount = record.amount;

        console.log('Item:', record.item);
        console.log('Amount:', record.amount);
        console.log('Record:' , record);

        this.data.push(record);
    }

    get() {
        console.log('This is the get function...');
        // return this.data;
        console.log(this.item);
        console.log(this.amount);
    }
}

const myHashTable = new HashTable(50);
// myHashTable.set('grapes', 10000);
// myHashTable.get('grapes');
console.log(myHashTable._hash('1232'));
// console.log(myHashTable.set('grapes', 1000));
myHashTable.set('grapes', 1000);
myHashTable.set('melons', 50);

myHashTable.get();

