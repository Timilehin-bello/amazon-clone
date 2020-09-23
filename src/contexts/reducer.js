export const initialState = {
  basket: [
    {
      id: "3254354345",
      title: "Apple iPhone 11 (256GB, Purple) [Locked] + Carrier Subscription",
      price: 986.99,
      rating: 5,
      image:
        "https://m.media-amazon.com/images/G/01/appcore/phone/AMZ_FamiyStripe_iPhone_11ProMax.png",
    },
    {
      id: "3254354345",
      title: "Apple iPhone 11 (256GB, Purple) [Locked] + Carrier Subscription",
      price: 986.99,
      rating: 5,
      image:
        "https://m.media-amazon.com/images/G/01/appcore/phone/AMZ_FamiyStripe_iPhone_11ProMax.png",
    },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id} as it's not in basket)`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};

export default reducer;
