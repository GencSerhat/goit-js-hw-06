class Storage {
    #items;
  
    constructor (initialElements){
this.#items = initialElements;
    }

    getItems (){
        return this.#items;

    }
    addItem (newItem){
        this.#items.push(newItem);

    }
    removeItem (removeToItem){
        const removeIndex = this.#items.indexOf(removeToItem); // silinecek ögenin indexini buldum.
        this.#items.splice(removeIndex, 1);
            }
}
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]