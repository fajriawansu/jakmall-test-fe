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
import Utils from '@/utils/formatter'
import { useStore } from '@/store/Store'

export default function DeliveryResume() {
  const navigate = useNavigate();
  const [state, dispatch] = useStore();
  const dataBreadcrumbs = ["Delivery", "Payment", "Finish"];
  

  return (
    <Layout.MainWrapper>
      <WrapperStyle>
        <div className='breadcrumb-container'>
          <Breadcrumb data={dataBreadcrumbs} currentIdx={2} />
        </div>
        <div className='content'>
          <ContentStyle>
            <div>
                <Pagetitle title="Thank you" style={{ marginTop: 24 }} />
                <div style={{marginTop: 24}}>Order ID: <b>{state.orderId}</b></div>
                <div className='order-info'>Your order will be delivered today with {state.shipment.name}</div>
                <ButtonIcon icon={faArrowLeft} label="Go to homepage" onClick={() => {
                    navigate("/delivery/detail");
                    window.location.reload();
                }} />
            </div>
          </ContentStyle>
          <SummaryStyle>
            <DeliverySummary
             withDropshipper={state.sendAsDropshipper}
             payment={state.payment}
             shipment={state.shipment}
             disabled={!state.payment.name || !state.shipment.name}
             onContinue={() => {
              
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
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .order-info {
    opacity: 0.6;
    margin-bottom: 60px;
  }
`

const SummaryStyle = styled.div`
  width: 300px;
`