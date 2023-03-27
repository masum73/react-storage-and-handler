// use local storage to manage cart data

const addToDb = id => {

    // local storage a setItem with meaningful name & object
    let shoppingCart = {};
    //get the shopping cart from local storage 
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    //add quantity 
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }else{
        shoppingCart[id] = 1; 
        
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

    // local storage a setItem 
    // const quantity = localStorage.getItem(id);
    // if(quantity){
    //     console.log('already exits');
    //     const newQuantity = parseInt(quantity) + 1;
    //     localStorage.setItem(id, newQuantity)
    // }else{
    //     console.log('new quantity');
    //    localStorage.setItem(id,1)
    // }
}

const removeFromDb = (id) => {
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if ( id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}
export {addToDb, removeFromDb, deleteShoppingCart}