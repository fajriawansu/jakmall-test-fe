import Utils from '@/utils/formatter'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

export default function Boxcheck({title, label, checked, onClick}) {
  return (
    <BoxcheckStyle checked={checked} onClick={onClick}>
        <div>
            <div className='box-title'>{title}</div>
            {label && <div className='box-label'>{isNaN(label) ? label : Utils.CurrencyFormatter(label)}</div>}
        </div>
        {checked && <div className='logo-check'>
            <FontAwesomeIcon icon={faCheck} />
        </div>}
    </BoxcheckStyle>
  )
}

const BoxcheckStyle = styled.div`
    cursor: pointer;
    width: 180px;
    padding: 12px 15px;
    display: flex;
    justify-content: space-between;
    background: ${props => props.theme.colors[props.checked ? "lightGreen" : "white"]};
    border: 1px solid ${props => props.theme.colors[props.checked ? "green" : "darkWhite"]};
    align-items: center;
    .box-title {
        color: ${props => props.theme.colors[props.checked ? "black" : "darkWhite"]};
    }
    .box-label {
        font-weight: 700;
        font-size: 16px;
        color: ${props => props.theme.colors[props.checked ? "black" : "darkWhite"]};
    }
    .logo-check {
        color: ${props => props.theme.colors.green}
    }
`
