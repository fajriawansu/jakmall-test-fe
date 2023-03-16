import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

export default function Breadcrumb({data = [], currentIdx}) {
  return (
    <WrapperStyle>
        {data.map((v,k) => {
            return <Tile key={k} number={k+1} name={v} active={currentIdx >= k} />
        })}
    </WrapperStyle>
  )
}

function Tile({number, name, active}){
    return <TileStyle active={active}>
        <div className='number-box'>{number}</div>
        <div className='step-name'>{name}</div>
        <div className='icon-box'>
            <FontAwesomeIcon icon={faChevronRight} size="sm" />
        </div>
    </TileStyle>
}

const TileStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 21px;
    .number-box {
        background: ${props => props.theme.colors[props.active ? "orange" : "medOrange"]};
        color: ${props => props.theme.colors[props.active ? "white" : "orange"]};
        box-shadow: 0px 2px 4px rgba(255, 138, 0, 0.3);
        border-radius: 50%;
        width: 30px;
        height: 30px;
        margin-right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .step-name {
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: ${props => props.theme.colors.orange};
        margin-right: 22px;
    }
    .icon-box {
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: ${props => props.theme.colors.orange};
        margin-right: 22px;
    }
`

const WrapperStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 35px;
    padding: 20px 38px;
    background: ${props => props.theme.colors.lightOrange};
    position: relative;
    left: -50%;
`
