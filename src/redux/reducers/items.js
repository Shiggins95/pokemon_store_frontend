import { getFilteredItems } from '../../helpers/Helpers';

const startingState = {
  items: [],
  filteredItems: [],
  filters: []
};
const itemsReducer = (state = startingState, action) => {
  const { items, filters } = state;
  switch (action.type) {
    case 'SET_ITEMS':
      return { items: action.items, filteredItems: action.items, filters: filters };
    case 'SET_FILTERED_ITEMS':
      return { ...state, filteredItems: action.items };
    case 'HIDE_OOS':
      return { ...state, filteredItems: state.filteredItems.filter(item => item.quantity > 0) };
    case 'FILTER_ITEMS':
      const { filteredItems, newFilters } = getFilteredItems(items, filters);
      return { items, filteredItems, filters: newFilters };
    case 'RESTORE_ITEMS':
      return { ...state, filteredItems: [...items] };
    case 'ADD_FILTER':
      return { ...state, filters: [...filters, action.newFilter] };
    case 'REMOVE_FILTER':
      return { ...state, filters: filters.filter(filter => filter !== action.filter) };
    case 'UPDATE_ITEM':
      const filtered = state.filteredItems;
      const newItems = filtered.map(item => {
        if (item.name === action.item.name) {
          item = action.item;
        }
        return item;
      });
      // console.log(newItems);
      return { ...state, filteredItems: newItems };
    default:
      return state;
  }
};

export default itemsReducer;
