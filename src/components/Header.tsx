import styled from "styled-components";
import React from "react";

export default function Header() {
    var Image: new (width?: number | undefined, height?: number | undefined) => HTMLImageElement
    return (
        <Container>
            {/* <Image
                src="/assets/logo_techHub.png"
                alt="logo"
                width="50px"
            /> */}
             <h1>olarrr mundoo</h1>
        </Container>       
    )
}

const Container = styled.div`
    width: 100vw;
    height: 120px;
    background-color: green;
    position: fixed;
    top: 0px;
    left: 0px;
`