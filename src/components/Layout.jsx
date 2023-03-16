import React from 'react'
import styled from 'styled-components'

function MainWrapper({children}){
    return <MainWrapperStyle>
        {children}
    </MainWrapperStyle>
}

const MainWrapperStyle = styled.div`
    position: relative;
    padding: 0px 50px;
    display: flex;
    align-items: center;
    justify-content: center
`

const Layout = {
    MainWrapper
}

export default Layout