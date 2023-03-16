import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

export default function Buttonaction({label, type, size, style, onClick, disabled}) {
  return (
    <div style={{display: 'flex'}}>
        <Wrapper type={type} size={size} style={style} onClick={onClick} disabled={disabled}>
            {label}
        </Wrapper>
    </div>
  );
}

export function ButtonIcon({label, icon, onClick}) {
  return (
    <div style={{display: 'flex'}}>
        <Wrapper onClick={onClick}>
            <FontAwesomeIcon icon={icon} />
            <div>{label}</div>
        </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
    background: ${props => props.theme.colors[props.type == "primary" ? "orange" : "white"]};
    height: ${props => props.size == "lg" ? "60px" : "18px"};
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    padding: ${props => props.size == "lg" ? "0px 18px" : "4px"};
    color: ${props => props.theme.colors[props.type == "primary" ? "white" : "black"]};
    mix-blend-mode: normal;
    opacity: ${props => props.type == "primary" ? 1 : 0.6};
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    border-radius: 2px;
`
