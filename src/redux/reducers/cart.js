import { useDispatch, useSelector } from 'react-redux';

const startingLocalStorage = localStorage.getItem('shopping_cart');
let parsedStartingLocalStorage = [];
if (startingLocalStorage) {
  parsedStartingLocalStorage = JSON.parse(startingLocalStorage);
}

const startingState = { items: parsedStartingLocalStorage, display: false };
const cartReducer = (state = startingState, action) => {
  const { display } = state;
  switch (action.type) {
    case 'ADD_TO_CART':
      // bool to check if quantity has to be updated or if a completely new item has to be added
      let foundItem = false;

      // get item to add by filtering items in the overall items array and returning the one that matches the itemId
      // passed in via action
      const itemToAdd = action.items.filter(item => {
        return item.id.toString() === action.itemId.toString();
      })[0];
      // check for localstorage to update
      const currentStorage = localStorage.getItem('shopping_cart');
      let parsedStorage;
      if (currentStorage) {
        parsedStorage = JSON.parse(currentStorage);
      }
      // create new array using prev state
      let newArray = [];
      // const newArray = [...state.items];
      if (state.items.length > 0) {
        newArray = [...state.items];
      } else {
        newArray = [];
      }

      // add items from local stoage if they exist
      if (parsedStorage) {
        parsedStorage.forEach(item => {
          if (item.id.toString() === itemToAdd.id.toString()) {
            item.cartQuantity += 1;
            foundItem = true;
          }
        });
      }
      newArray.forEach(item => {
        if (item.id.toString() === itemToAdd.id.toString()) {
          item.cartQuantity += 1;
          foundItem = true;
        }
      });
      // add new item if no found item
      if (!foundItem) {
        itemToAdd.cartQuantity = 1;
        newArray.push(itemToAdd);
      }
      // set local storage with new array
      localStorage.setItem('shopping_cart', JSON.stringify(newArray));
      // return new state
      return { items: newArray, display };

    case 'REMOVE_FROM_CART':
      // create new array and remove the item that matches the id passed in via aciton
      const removedArray = state.items.filter(item => {
        // if item exists and reducing quantity will not make it 0 then reduce quantity (cartQuantity)
        const currentcartQuantity = item.cartQuantity;
        console.log('CURRENT ITEM: ', item);
        console.log('ITEM ID', action.itemId);
        if (currentcartQuantity > 1 && item.id.toString() === action.itemId.toString()) {
          item.cartQuantity -= 1;
          return item;
        }
        // else remove from cart
        return item.id.toString() !== action.itemId.toString();
      });

      // return new state and set local storage
      localStorage.setItem('shopping_cart', JSON.stringify(removedArray));
      return { items: removedArray, display };

    case 'SHOW_CART':
      return { ...state, display: true };
    case 'HIDE_CART':
      return { ...state, display: false };
    case 'CLEAR_CART':
      localStorage.removeItem('shopping_cart');
      return { items: [], display: false };
    default:
      return state;
  }
};

export default cartReducer;
