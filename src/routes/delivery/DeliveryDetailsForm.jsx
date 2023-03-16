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
import { useStore } from '@/store/Store'
import { setDeliveryDetail, setDeliveryEmail } from '@/store/deliveryAction'
import { useNavigate } from 'react-router-dom'

export default function DeliveryDetailsForm() {
  const { control, handleSubmit, setValue, formState: { errors } } = useForm();
  const [state, dispatch] = useStore();
  const navigate = useNavigate();
  const [asDropshipper, setAsDropshipper] = useState(false);
  const dataBreadcrumbs = ["Delivery", "Payment", "Finish"]
  const submitRef = useRef();
  const onSubmit = (data) => {
    dispatch(setDeliveryDetail({
      ...data,
      asDropshipper
    }));
    navigate("/delivery/shipment")
  };

  useEffect(() => {
    console.log({state});
    setAsDropshipper(state.sendAsDropshipper)
    setValue("email", state.deliveryEmail)
    setValue("phone_number", state.deliveryPhone)
    setValue("dropshipper_name", state.dropshipperName)
    setValue("dropshipper_phone_number", state.dropshipperPhone)
    setValue("delivery_address", state.deliveryAddress)
  }, [state])

  return (
    <Layout.MainWrapper>
      <WrapperStyle>
        <div className="breadcrumb-container">
          <Breadcrumb data={dataBreadcrumbs} currentIdx={0} />
        </div>
        <ButtonIcon icon={faArrowLeft} label="Back to cart" />
        <div className="content">
          <ContentStyle>
            <TitleWrapper>
              <Pagetitle title="Delivery Details" style={{ marginTop: 24 }} />
              <MyInput.Checkbox
                label="Send as dropshipper"
                onChange={(val) => setAsDropshipper(val)}
                defaultChecked={asDropshipper}
              />
            </TitleWrapper>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormGridder>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <Controller
                    name="email"
                    control={control}
                    rules={{
                      required: true,
                      pattern: validatorHelper.emailRegex,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <MyInput.Inputfield
                        label="Email"
                        value={value}
                        isError={errors.email}
                        onChange={(v, el) => {
                          onChange(v);
                        }}
                        type="email"
                      />
                    )}
                  />

                  <Controller
                    name="phone_number"
                    control={control}
                    rules={{
                      required: true,
                      pattern: validatorHelper.phoneRegex,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <MyInput.Phonenumber
                        label="Phone number"
                        value={value}
                        isError={errors.phone_number}
                        onChange={(v, el) => {
                          onChange(v);
                        }}
                      />
                    )}
                  />

                  <Controller
                    name="delivery_address"
                    control={control}
                    rules={{
                      required: true,
                      pattern: validatorHelper.addressRegex,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <MyInput.Addressfield
                        label="Delivery address"
                        value={value}
                        isError={errors.delivery_address}
                        onChange={(v, el) => {
                          onChange(v);
                        }}
                      />
                    )}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <Controller
                    name="dropshipper_name"
                    control={control}
                    rules={{ required: asDropshipper }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <MyInput.Inputfield
                        label="Dropshipper name"
                        value={value}
                        isError={errors.dropshipper_name}
                        onChange={(v, el) => {
                          onChange(v);
                        }}
                        width="300px"
                        disabled={!asDropshipper}
                      />
                    )}
                  />

                  <Controller
                    name="dropshipper_phone_number"
                    control={control}
                    rules={{
                      required: asDropshipper,
                      pattern: validatorHelper.phoneRegex,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <MyInput.Phonenumber
                        label="Dropshipper phone number"
                        width="300px"
                        value={value}
                        isError={errors.dropshipper_phone_number}
                        onChange={(v, el) => {
                          onChange(v);
                        }}
                        disabled={!asDropshipper}
                      />
                    )}
                  />
                </div>
              </FormGridder>
              <input ref={submitRef} hidden type="submit" />
            </form>
          </ContentStyle>
          <SummaryStyle>
            <DeliverySummary
              labelContinue={"Continue to Payment"}
              withDropshipper={asDropshipper}
              onContinue={() => {
                submitRef.current.click();
              }}
            />
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

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const FormGridder = styled.div`
  display: flex;
  justify-content: space-between;
`