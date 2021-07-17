import styled from "styled-components";

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
const BacktoTop = styled.button`
    width: 100%;
    background-color: #285feb;
    display: flex;
    justify-content: center;
    font-weight: 600;
    color: white;
    height: 4.85vh;
    text-align: center;
    cursor: pointer;
    padding-bottom: 2.77vh;
    padding-top: 1.38vh;
    border: none;
    :hover{
        background-color:#3d71f5;
    }
`;
const Contact = styled.div`
    display:flex;
    background-color:#3d49f2;
    color: white;
    border-top: 0.138vh solid grey;
    height: 20.78vh;
`;
const KnowUs = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.4;
    justify-content: center;
    align-items:center;
    text-align: center;
    padding: 0.65vw;
    >small{
        font-weight: 600;
        margin-bottom: 4.155vh;
    }
`;
const ContactUs = styled.div`
    flex:0.6;
    display: flex;
    flex-direction: column;
    align-items: justify;
    justify-content: center;
    text-align: center;
    padding: 0.65vw;
    border-left: 0.065vw solid grey;
    >small{
        font-weight: 600;
        margin-bottom: 4.155vh;
    }
`;
const ContactIcon = styled.div`
    display: flex;
    align-items: justify;
`;
const Icon = styled.div`
    >img{
        width: 1.17vw;
        object-fit: contain;
        margin-left: 0.33vw;
    }
    position: relative;
    top: 0.28vh;
`;
const Btn = styled.a`
    min-width: 6.5vw;
    width: fit-content;
    color: white;
    font-weight: 600;
    padding: 0.33vw;
    border-radius: 0.65vw;
    display: flex;
    border: 0.065vw solid white;
    box-shadow: 0 0.065vw 0.195vw rgba(0,0,0,0.12),0 0.065vw 0.13vw rgba(0,0,0,0.24);
    font-size: 1.17vw;
    :hover{
        background-color: white;
        color: black;
    }
`;
const GitHubBtn = styled(Btn)`
    justify-content: center;
    background-color: #16750d;
    text-decoration: none;
    text-align: center;
`;
const LinkedInBtn = styled(Btn)`
    background-color:#f06429;
    text-decoration: none;
    text-align: center;
    margin-left: auto;
    margin-right: 12%;
`;
const EmailButton = styled(Btn)`
    justify-content: center;
    background-color: #750d64;
    text-decoration: none;
    text-align: center;
    margin-right: auto;
`;
const LeftText = styled.div`
    display: flex;
    justify-content: center;
    flex: 0.33;
    align-items: center;
    >p{
        text-align: center;
        font-size: 1.17vw;
    }
`;
const RightText = styled.div`
    display: flex;
    justify-content: center;
    flex: 0.33;
    align-items: center;
    >p{
        text-align: center;
        font-size: 1.17vw;
    }
`;
const Image = styled.div`
    display: flex;
    justify-content: center;
    flex: 0.33;
    >img{
        padding: auto;
        width: 13vw ;
        object-fit: contain;
    }
`;
const LogoBar = styled.div`
    display: flex;
    padding: 0.78vw ;
    background-color:#1a28eb;
    color: white;
    justify-content: space-between;
    font-family: cursive;
    font-style: bold;
    font-size: 1.9vmax;
    >p{
        position: relative;
        top: 6.93vh;
    }
`;
const EndBar = styled.div`
    width: 100%;
    height: 6.93vh;
    background-color: black;
`;

export{
    FooterContainer,
    BacktoTop,
    EndBar,
    LogoBar,
    Contact,
    LeftText,
    RightText,
    Image,
    KnowUs,
    ContactUs,
    GitHubBtn,
    LinkedInBtn,
    EmailButton,
    Icon,
    ContactIcon
}