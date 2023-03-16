import Buttonaction from '@/components/Buttonaction'
import Pagetitle from '@/components/Pagetitle'
import Utils from '@/utils/formatter'
import React from 'react'
import styled from 'styled-components'

export default function DeliverySummary({
    onContinue, labelContinue,
    payment,
    shipment,
    withDropshipper = false,
    disabled=false
}) {
  return (
    <SummaryStyle>
        <div className='content'>
            <BorderOpacity />
            <div className='info'>
                <div>
                    <Pagetitle title="Summary" underlined={false} type="md" />
                    <div className='items'>10 items purchased</div>
                    {shipment && <PaymentInfo title="Delivery estimation" value={`${shipment.est} by ${shipment.name}`} />}
                    {payment && <PaymentInfo title="Payment method" value={`${payment.name}`} />}
                </div>
                
                <div className='data-total'>
                    <InfoList label="Cost of goods" value={Utils.CurrencyFormatter(500000)} />
                    {withDropshipper && <InfoList label="Dropshipping fee" value={Utils.CurrencyFormatter(5900)} />}
                    {shipment && <InfoList label={<><b>{shipment.name}</b>&nbsp;shipment</>} value={Utils.CurrencyFormatter(shipment.price)} />}
                    <InfoList label="Total" value={Utils.CurrencyFormatter(500000 + (shipment ? shipment.price : 0) + (withDropshipper ? 5900 : 0))} isTotal />
                    {labelContinue && <div style={{width: 24, height: 24}} />}
                    {labelContinue && <Buttonaction style={{width: '100%'}} label={labelContinue} type="primary" size="lg"
                        onClick={() => {
                            if(onContinue)onContinue();
                        }}
                        disabled={disabled}
                    />}
                </div>
            </div>
        </div>
    </SummaryStyle>
  )
}

function InfoList({label, value, isTotal}){
    return <InfoListStyle isTotal={isTotal}>
        <div className='info-label'>{label}</div>
        <div className='info-value'>{value}</div>
    </InfoListStyle>
}

function PaymentInfo({title, value}){
    return <PaymentInfoStyle>
        <div className='separator' />
        <div className='title'>{title}</div>
        <div className='value'>{value}</div>
    </PaymentInfoStyle>
}

const PaymentInfoStyle = styled.div`
    margin-top: 22px;
    .separator {
        width: 80px;
        height: 1px;
        background: ${props => props.theme.colors.lightWhite};
        margin-bottom: 21px;
    }
    .title {
        font-size: 14px;
    }

    .value {
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: ${props => props.theme.colors.green};
    }
`

const InfoListStyle = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: ${props => props.isTotal ? "0px" : "12px"};
    margin-top: ${props => props.isTotal ? "24px" : "0px"};
    .info-label {
        color: ${props => props.theme.colors[props.isTotal ? "orange" : "black"]};
        opacity: ${props => props.isTotal ? 1 : 0.6};
        font-weight: ${props => props.isTotal ? 700 : 400};
        font-size: ${props => props.isTotal ? "24px" : "14px"};
    }
    .info-value {
        font-style: normal;
        font-weight: 700;
        font-size: ${props => props.isTotal ? "24px" : "14px"};
        text-align: right;
        color:  ${props => props.theme.colors[props.isTotal ? "orange" : "black"]};
    }
`

const SummaryStyle = styled.div`
    padding: 30px 0px 0px 0px;
    height: 500px;
    width: 300px;
    display: flex;
    .content {
        display: flex;
        gap: 20px;
        width: 100%;

        .info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
        }
        
        .items {
            font-size: 14px;
            color: #000000;
            mix-blend-mode: normal;
            opacity: 0.6;
            margin-top: 10px;
        }
    }
`

const BorderOpacity = styled.div`
    background: ${props => props.theme.colors.orange};
    opacity: 0.2;
    width: 1px;
    height: 500px;
`
