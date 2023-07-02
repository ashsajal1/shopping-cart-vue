const items = [
    { id: 0, name: 'item 1', price: 10 },
    { id: 0, name: 'item 1', price: 10 },
    { id: 0, name: 'item 1', price: 10 },
    { id: 1, name: 'item 2', price: 70 },
    { id: 1, name: 'item 2', price: 70 },
    { id: 1, name: 'item 2', price: 70 },
    { id: 1, name: 'item 2', price: 70 },
    { id: 2, name: 'item 3', price: 40 },
    { id: 2, name: 'item 3', price: 40 },
];

const uniqueItems = items.filter((item, index) => {
    return index === items.findIndex(obj => {
        return JSON.stringify(obj) === JSON.stringify(item);
    });
});

console.log(uniqueItems);


// same items length

const items = [
    { id: 0, name: 'item 1', price: 10 },
    { id: 0, name: 'item 1', price: 10 },
    { id: 0, name: 'item 1', price: 10 },
    { id: 1, name: 'item 2', price: 70 },
    { id: 1, name: 'item 2', price: 70 },
    { id: 1, name: 'item 2', price: 70 },
    { id: 1, name: 'item 2', price: 70 },
    { id: 2, name: 'item 3', price: 40 },
    { id: 2, name: 'item 3', price: 40 },
];

const itemId = 1;
const sameItems = items.filter(item => item.id === itemId);
const sameItemsLength = sameItems.length;

console.log(sameItemsLength); // Output: 4


//removing last id 2

const items = [
    { id: 0, name: 'item 1', price: 10 },
    { id: 0, name: 'item 1', price: 10 },
    { id: 0, name: 'item 1', price: 10 },
    { id: 1, name: 'item 2', price: 70 },
    { id: 1, name: 'item 2', price: 70 },
    { id: 1, name: 'item 2', price: 70 },
    { id: 1, name: 'item 2', price: 70 },
    { id: 2, name: 'item 3', price: 40 },
    { id: 2, name: 'item 3', price: 40 },
];

const index = items.findIndex(item => item.id === 2);
if (index !== -1) {
    items.splice(index, 1);
}

console.log(items);