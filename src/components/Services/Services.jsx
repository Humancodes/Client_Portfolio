import React from 'react'
import styled from 'styled-components'
import { services } from '../../data/constants'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
margin-bottom:100px;
`
const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`



export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const ServiceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`

const Service = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #00f1ff;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 45px 36px 15px 36px ;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
  &:hover{
    cursor:pointer;
    background: ${({ theme }) => theme.cardService};
  }

`
const ServiceTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.white};
  margin-bottom: 20px;
  text-align: center;
`


const Description = styled.div`
  width: 100%;
  font-size: 19px;
  font-weight: 400;
  text-align:center;
  color: ${({ theme }) => theme.white};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const ServiceList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
  
`



const Services = () => {
  return (
  
    <Container id="services">
      <Wrapper>
        <Title>What I Offer?</Title>
        <Desc>Here are some of my Services that I offer. 
        </Desc>
        <ServiceContainer>
          {services.map((service) => (
            <Service>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceList>
              <Description>{service.desc}</Description>
              </ServiceList>
            </Service>
          ))}

        </ServiceContainer>
      </Wrapper>
    </Container>
   
  )
}

export default Services;