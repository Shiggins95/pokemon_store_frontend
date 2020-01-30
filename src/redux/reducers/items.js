const startingState = {
  items: [],
  filteredItems: [],
  filters: []
};
const itemsReducer = (state = startingState, action) => {
  const { items, filters } = state;
  switch (action.type) {
    case 'SET_ITEMS':
      // console.log('state', state.items);
      // console.log('action', action.items);
      return { items: action.items, filteredItems: action.items, filters: filters };
    case 'SET_FILTERED_ITEMS':
      // console.log('state', state.items);
      // console.log('action', action.items);
      return { ...state, filteredItems: action.items };
    case 'HIDE_OOS':
      return { ...state, filteredItems: state.filteredItems.filter(item => item.quantity > 0) };
    case 'FILTER_ITEMS':
      return { ...state, filteredItems: items.filter(item => filters.indexOf(item.type) !== -1) };
    case 'RESTORE_ITEMS':
      return { ...state, filteredItems: [...items] };
    case 'ADD_FILTER':
      return { ...state, filters: [...filters, action.newFilter] };
    case 'REMOVE_FILTER':
      return { ...state, filters: filters.filter(filter => filter !== action.filter) };
    default:
      return state;
  }
};

export default itemsReducer;
