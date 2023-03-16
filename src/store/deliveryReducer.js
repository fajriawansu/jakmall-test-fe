export const initialState = {
  deliveryEmail: "",
  deliveryPhone: "",
  deliveryAddress: "",
  sendAsDropshipper: false,
  dropshipperName: "",
  dropshipperPhone: "",
  shipment: {},
  payment: {},
  orderId: ""
};

export const deliveryReducer = (state = initialState, action ) => {
  switch (action.type) {
    case "SET_DELIVERY_DETAIL":
      return {
        ...state,
        deliveryEmail: action.payload.deliveryEmail,
        deliveryPhone: action.payload.deliveryPhone,
        deliveryAddress: action.payload.deliveryAddress,
        sendAsDropshipper: action.payload.sendAsDropshipper,
        dropshipperName: action.payload.dropshipperName,
        dropshipperPhone: action.payload.dropshipperPhone,
      };
    case "SET_SHIPMENT_PAYMENT":
        return {
            ...state,
            shipment: action.payload.shipment,
            payment: action.payload.payment,
        }
    case "SET_ORDER_ID":
        return {
            ...state,
            orderId: action.payload
        }
    default:
      return state;
  }
};
