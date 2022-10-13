import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;


function Card() {
    const link= "https://www.theverge.com/_next/image?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FAsCb7hsaezVAhJdYuTuGYsCkODU%3D%2F0x0%3A2040x1360%2F2000x1333%2Ffilters%3Afocal(1020x680%3A1021x681)%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F10581501%2Fwjoel_1777_180403_youtube_003.jpg&w=750&q=75"

    const logo ="https://cdn2.hubspot.net/hubfs/521324/youtube%20icon.png"

  return (
    <Link to="/video/test" style={{textDecoration:"none"}}>
    <Container>
        <Image src={link}/>
        <Details>
            <ChannelImage src={logo}/>
            <Texts>
                <Title>Test Video</Title>
                <ChannelName> Rahul Tech </ChannelName>
                <Info>660.990 videws • 1 day ago</Info>
            </Texts>
        </Details>
    </Container>
    </Link>
  )
}

export default Card