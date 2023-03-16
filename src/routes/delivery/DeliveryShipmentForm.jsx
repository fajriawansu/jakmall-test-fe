import { ButtonIcon } from '@/components/Buttonaction'
import Layout from '@/components/Layout'
import MyInput from '@/components/MyInput'
import Pagetitle from '@/components/Pagetitle'
import validatorHelper from '@/helper/validatorHelper'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import styled from 'styled-components'
import DeliverySummary from './DeliverySummary'
import Breadcrumb from '@/components/Breadcrumb'
import Boxcheck from '@/components/Boxcheck'
import { useNavigate } from 'react-router-dom'
import { useStore } from '@/store/Store'
import { setDeliveryShipment, setOrderId } from '@/store/deliveryAction'
import Utils from '@/utils/formatter'

export default function DeliveryShipmentForm() {
  const { control, handleSubmit, setValue, formState: { errors } } = useForm();
  const [state, dispatch] = useStore();
  const navigate = useNavigate();
  const [shipment, setShipment] = useState("");
  const [payment, setPayment] = useState("");
  const dataBreadcrumbs = ["Delivery", "Payment", "Finish"];
  const dataShipment = [
    {name: "GO-SEND", price: 15000, est: "Today"},
    {name: "JNE", price: 9000, est: "2 days"},
    {name: "Personal Courier", price: 29000, est: "1 day"}
  ]
  const dataPayment = [
    {name: "e-Wallet", label: "1.500.000 left"},
    {name: "Bank Transfer"},
    {name: "Virtual Account"}
  ]
  const submitRef = useRef();
  const onSubmit = (data) => {
    console.log({data});
    dispatch(setDeliveryShipment({...data}));
    dispatch(setOrderId(Utils.RandomString(5)))
    navigate("/delivery/final")

  };

  return (
    <Layout.MainWrapper>
      <WrapperStyle>
        <div className='breadcrumb-container'>
          <Breadcrumb data={dataBreadcrumbs} currentIdx={1} />
        </div>
        <ButtonIcon icon={faArrowLeft} label="Back to delivery" onClick={() => navigate("/delivery/detail")} />
        <div className='content'>
          <ContentStyle>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormGridder>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <Pagetitle title="Shipment" style={{ marginTop: 24 }} />
                  <Controller 
                    control={control}
                    name="shipment"
                    rules={{required: true}}
                    render={() => <>
                      <div style={{display: 'flex', gap: 10}}>
                        {dataShipment.map((v,k) => {
                            return <Boxcheck key={k} title={v.name} label={v.price} checked={shipment.name === v.name} 
                            onClick={() => {
                              setShipment(v);
                              setValue("shipment", v);
                            }} />
                        })}
                      </div>
                    </>}
                  />
                  
                  <Pagetitle title="Payment" style={{ marginTop: 24 }} />
                  <Controller 
                    control={control}
                    name="payment"
                    render={() => <>
                    <div style={{display: 'flex', gap: 10}}>
                      {dataPayment.map((v,k) => {
                              return <Boxcheck key={k} title={v.name} label={v.label} checked={payment.name === v.name} 
                              onClick={() => {
                                setPayment(v);
                                setValue("payment", v);
                              }} />
                      })}
                  </div>
                    </>}
                  />
                </div>
              </FormGridder>
              <input ref={submitRef} hidden type="submit" />
            </form>
          </ContentStyle>
          <SummaryStyle>
            <DeliverySummary
             labelContinue={payment ? `Pay with ${payment.name}` : ''}
             withDropshipper={state.sendAsDropshipper}
             payment={payment}
             shipment={shipment}
             disabled={!payment.name || !shipment.name}
             onContinue={() => {
              submitRef.current.click();
            }} />
          </SummaryStyle>
        </div>
      </WrapperStyle>
    </Layout.MainWrapper>
  );
}

const WrapperStyle = styled.div`
  width: 1100px;
  height: 550px;
  margin-top: 55px;
  padding: 30px 20px 20px 40px;
  background: #FFFFFF;
  box-shadow: 2px 10px 20px rgba(255, 138, 0, 0.1);
  border-radius: 4px;
  .content {
    display: flex;
    gap: 30px;
  }
  .breadcrumb-container {
    position: absolute;
    top: 20px;
    left: 50%;
    z-index: 20;
  }
`

const ContentStyle = styled.div`
  width: 800px;
`

const SummaryStyle = styled.div`
  width: 300px;
`

const FormGridder = styled.div`
  display: flex;
  justify-content: space-between;
`