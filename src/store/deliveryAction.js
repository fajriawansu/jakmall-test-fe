export function setDeliveryEmail(data){
    return {
        type: "SET_DELIVERY_EMAIL",
        payload: data
    }
}

export function setDeliveryDetail(data){
    return {
        type: "SET_DELIVERY_DETAIL",
        payload: {
            deliveryEmail: data.email,
            deliveryPhone: data.phone_number,
            deliveryAddress: data.delivery_address,
            sendAsDropshipper: data.asDropshipper,
            dropshipperName: data.asDropshipper ? data.dropshipper_name : "",
            dropshipperPhone: data.asDropshipper ? data.dropshipper_phone_number : "",
        }
    }
}

export function setDeliveryShipment(data){
    return {
        type: "SET_SHIPMENT_PAYMENT",
        payload: {
            shipment: data.shipment,
            payment: data.payment
        }
    }
}

export function setOrderId(orderId){
    return {
        type: "SET_ORDER_ID",
        payload: orderId
    }
}