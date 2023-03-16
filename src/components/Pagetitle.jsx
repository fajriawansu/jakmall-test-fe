import React from 'react'
import styled from 'styled-components'

export default function Pagetitle({title, style, type, underlined = true}) {
  return (
    <Wrapper type={type}>
        <TitleStyle style={style}>{title}</TitleStyle>
        {underlined && <BottomRectangle />}
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    color: #FF8A00;
    font-size: ${props => props.type === 'md' ? "24px" : "36px"};
    font-weight: 700;
`
const TitleStyle = styled.div`
    z-index: 10;
`

const BottomRectangle = styled.div`
    position: absolute;
    bottom: 11.36%;
    left: 0;
    height: 8px;
    min-width: 300px;
    background: #EEEEEE;
`