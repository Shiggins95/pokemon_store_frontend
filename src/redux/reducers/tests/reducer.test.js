import reducer from '../';

describe('it should be able to alter cart', () => {
  beforeEach(() => {
    localStorage.removeItem('shopping_cart');
  });

  it('should add item to cart', () => {
    const items = [{ id: 1, name: 'item 1', cartQuantity: 1 }];
    const action = { type: 'ADD_TO_CART', itemId: 1, items };
    expect(reducer(undefined, action).cart).toEqual({ items, display: false });
  });

  it('should update existing item in carts quantity if it exists', () => {
    const items = [{ id: 2, name: 'item 1', cartQuantity: 1 }];
    const action = { type: 'ADD_TO_CART', itemId: 2, items };
    expect(
      reducer({ items: { items, filteredItems: items }, auth: false, cart: { items, display: false } }, action).cart
    ).toEqual({
      items: [{ id: 2, name: 'item 1', cartQuantity: 2 }],
      display: false
    });
  });

  it('should remove item from cart if reducing quantity will make it 0', () => {
    const items = [{ id: 1, name: 'item 1', cartQuantity: 1 }];

    const action = { type: 'REMOVE_FROM_CART', itemId: 1 };

    expect(reducer({ items, auth: false, cart: { items, display: false } }, action).cart).toEqual({
      items: [],
      display: false
    });
  });

  it('should reduce quantity of item in cart if exists', () => {
    const items = [{ id: 1, name: 'item 1', cartQuantity: 82 }];
    const action = { type: 'REMOVE_FROM_CART', itemId: 1 };
    expect(reducer({ items, auth: false, cart: { items, display: false } }, action).cart).toEqual({
      items: [{ id: 1, name: 'item 1', cartQuantity: 81 }],
      display: false
    });
  });

  it('should be able to update state to display', () => {
    const action = { type: 'SHOW_CART' };
    expect(reducer(undefined, action).cart).toEqual({ items: [], display: true });
  });

  it('should be able to update state to not display', () => {
    const action = { type: 'HIDE_CART' };
    expect(reducer({ auth: false, items: [], cart: { items: [], display: true } }, action).cart).toEqual({
      items: [],
      display: false
    });
  });
});
