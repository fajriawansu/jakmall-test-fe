import validatorHelper from "@/helper/validatorHelper";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function Inputfield({ label, type, value, width = "400px", disabled, onChange, isError }){
    const labelRef = useRef();
    const inputRef = useRef();
    const [isTransform, setIsTransform] = useState(false);
    const [isValid, setIsValid] = useState(true);
    const onFocus = () => {
        setIsTransform(true);
    }

    const onBlur = (e) => {
        setIsTransform(e.target.value);
    }

    const handleOnChange = (e) => {
        onChange(e);
        setIsValid(type === "email" ? validatorHelper.emailRegex.test(e.target.value) : true)
    }

    useEffect(() => {
      setIsTransform(value?.length > 0)
    }, [value])

    return (
        <InputStyle disabled={disabled} notNull={value?.length > 0} isError={isError || !isValid} isTransform={isTransform} width={width}>
          <label ref={labelRef} onClick={() => inputRef.current?.focus()}>{label}</label>
          <input ref={inputRef} disabled={disabled} onFocus={onFocus} onBlur={onBlur} onChange={handleOnChange} value={value} />
          {(value?.length > 0 || isError) && <div className="logo-msg">
            <FontAwesomeIcon icon={!isError && isValid ? faCheck : faTimes} />
          </div>}
        </InputStyle>
      )
};

function Phonenumber({ label, required, width = "400px", value, disabled, onChange, isError }){
    const labelRef = useRef();
    const inputRef = useRef();
    const [isTransform, setIsTransform] = useState(false);
    const [isValid, setIsValid] = useState(true);
    const onFocus = () => {
        setIsTransform(true);
    }

    const onBlur = (e) => {
        setIsTransform(e.target.value);
    }

    const handleOnChange = (e) => {
        onChange(e);
        setIsValid(validatorHelper.phoneRegex.test(e.target.value))
    }

    const handlePhoneOnly = (event) => { if (!validatorHelper.phoneRegex.test(event.key)) {event.preventDefault();}}

    useEffect(() => {
      setIsTransform(value?.length > 0)
    }, [value])

    return (
        <InputStyle disabled={disabled} notNull={value?.length > 0} isError={isError || !isValid} isTransform={isTransform} width={width}>
          <label ref={labelRef} onClick={() => inputRef.current?.focus()}>{label}</label>
          <input  ref={inputRef} disabled={disabled} onFocus={onFocus} onBlur={onBlur} onChange={handleOnChange} value={value} />
          {(value?.length > 0 || isError) && <div className="logo-msg">
            <FontAwesomeIcon icon={!isError && isValid ? faCheck : faTimes} />
          </div>}
        </InputStyle>
      )
};

function Checkbox({ label, onChange, defaultChecked }){
    const [isChecked, setIsChecked] = useState(defaultChecked);
    const handleClick = () => {
        setIsChecked(!isChecked)
        if(onChange)onChange(!isChecked);
    }

    useEffect(() => {
      setIsChecked(defaultChecked)
    }, [defaultChecked])
    return (
        <CheckboxStyle checked={isChecked}>
            <div className="cbox" onClick={handleClick}>
                {isChecked && <FontAwesomeIcon icon={faCheck} size="sm" />}
            </div>
            {label}
        </CheckboxStyle>
    )
}

function Addressfield({ label, value, width = "400px", disabled, onChange, isError }){
    const labelRef = useRef();
    const inputRef = useRef();
    const [isTransform, setIsTransform] = useState(false);
    const [isValid, setIsValid] = useState(true);
    const onFocus = () => {
        setIsTransform(true);
    }

    const onBlur = (e) => {
        setIsTransform(e.target.value);
    }

    const handleOnChange = (e) => {
      onChange(e);
      setIsValid(validatorHelper.addressRegex.test(e.target.value))
    }

    useEffect(() => {
      setIsTransform(value?.length > 0)
    }, [value])

    return (
        <TextareaStyle disabled={disabled} notNull={value?.length > 0} isError={isError || !isValid} isTransform={isTransform} width={width}>
          <label ref={labelRef} onClick={() => inputRef.current?.focus()}>{label}</label>
          <textarea ref={inputRef} disabled={disabled} onFocus={onFocus} onBlur={onBlur} onChange={handleOnChange} value={value} />
          {(value?.length > 0 || isError) && <div className="logo-msg">
            <FontAwesomeIcon icon={!isError && isValid ? faCheck : faTimes} />
          </div>}
        </TextareaStyle>
      )
};

function Errormsg({msg = "this field is required"}){
    return (
        <ErrorMsgStyle>*{msg}</ErrorMsgStyle>
    )
}

const InputStyle = styled.div`
  width: ${props => props.width ?? "400px"};
  height: 60px;
  background: white;
  position: relative;
  cursor: ${props => props.disabled ? "not-allowed" : "text"};

  input {
    width: ${props => props.width ? `calc(${props.width} - 15px)` : "385px"};
    height: 40px;
    height: ${(props) => (props.isTransform ? "41px" : "60px")};
    background: ${props => props.disabled ? props.theme.colors.darkWhite : "transparent"};;
    border: 1px solid ${props => props.theme.colors[props.isError ? "orange" : props.notNull ? "green" : "darkWhite"]};
    color: black;
    padding-left: 15px;
    padding-top: ${(props) => (props.isTransform ? "18px" : "0px")};
    padding-bottom: ${(props) => (props.isTransform ? "-18px" : "0px")};
    :focus {
      outline: none !important;
    }
  }

  label {
    position: absolute;
    left: 15px;
    top: ${(props) => (props.isTransform ? "12px" : "21px")};
    font-size: ${(props) => (props.isTransform ? "13px" : "16px")};
    line-height: 19px;
    mix-blend-mode: normal;
    transition: 0.3s;
    color: ${props => props.theme.colors[props.isError ? "orange" : props.notNull ? "green" : "black"]};
    opacity: ${(props) => (props.isTransform ? 0.8 : 0.4)};
    cursor: ${props => props.disabled ? "not-allowed" : "text"};
  }

  .logo-msg {
    position: absolute;
    right: 20px;
    top: 20px;
    color: ${props => props.theme.colors[props.isError ? "orange" : "green"]}
  }
`;

const TextareaStyle = styled.div`
    width: ${props => props.width ?? "400px"};
    height: 120px;
    background: white;
    position: relative;
    cursor: ${props => props.disabled ? "not-allowed" : "text"};

  textarea {
    width: ${props => props.width ? `calc(${props.width} - 15px)` : "385px"};
    height: ${(props) => (props.isTransform ? "100px" : "120px")};
    background: ${props => props.disabled ? props.theme.colors.darkWhite : "transparent"};;
    border: 1px solid ${props => props.theme.colors[props.isError ? "orange" : props.notNull ? "green" : "darkWhite"]};
    color: black;
    padding-left: 15px;
    padding-top: ${(props) => (props.isTransform ? "30px" : "0px")};
    padding-bottom: ${(props) => (props.isTransform ? "-30px" : "0px")};
    :focus {
      outline: none !important;
    }
  }

  label {
    position: absolute;
    left: 15px;
    top: ${(props) => (props.isTransform ? "12px" : "21px")};
    font-size: ${(props) => (props.isTransform ? "13px" : "16px")};
    line-height: 19px;
    mix-blend-mode: normal;
    transition: 0.3s;
    color: ${props => props.theme.colors[props.isError ? "orange" : props.notNull ? "green" : "black"]};
    opacity: ${(props) => (props.isTransform ? 0.8 : 0.4)};
    cursor: ${props => props.disabled ? "not-allowed" : "text"};
  }

  .logo-msg {
    position: absolute;
    right: 20px;
    top: 20px;
    color: ${props => props.theme.colors[props.isError ? "orange" : "green"]}
  }
`

const CheckboxStyle = styled.div`
    display: flex;
    gap: 9px;
    align-items: center;
    margin-top: 12px;
    color: #2D2A40;
    .cbox {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 18px;
        width: 18px;
        font-size: 18px;
        color: ${props => props.theme.colors.green};
        border: 2px solid ${props => props.theme.colors[props.checked ? "green" : "darkWhite"]};
        cursor: pointer;
        :hover {
            /* background: ${props => props.theme.colors.darkWhite}; */
        }
    }
`

const ErrorMsgStyle = styled.div`
    color: red;
    font-size: 12px;
    margin-top: -10px !important;
`


const MyInput = {
    Inputfield,
    Phonenumber,
    Checkbox,
    Errormsg,
    Addressfield
}

export default MyInput
