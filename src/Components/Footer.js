import React from 'react'
import { FooterContainer, BacktoTop, EndBar, LogoBar,
            LeftText,RightText,Image, Contact,
            KnowUs,ContactUs,GitHubBtn,LinkedInBtn,EmailButton, Icon,
            ContactIcon } from '../Styles/FooterStyle';
import Logo from '../Logo/Bg_free_logo.png';
import GitHub from '../Logo/github.png';
import LinkedIn from '../Logo/linkedin_black.png';
import Email from '../Logo/gmail.png';

function Footer() {
    const scrollToTop=()=> {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    return (
        <FooterContainer>
            <BacktoTop onClick={scrollToTop} >Back To Top</BacktoTop>
            <Contact>
                <KnowUs>
                    <small>
                        Know About Us
                    </small>
                    {/* <a target = {"_blank"} href={"https://github.com/Sandeep19531"}>My Github</a> */}
                    <GitHubBtn target = {"_blank"} href={"https://github.com/Sandeep19531"}>
                        GitHub
                        <Icon>
                            <img src={GitHub} alt="GitHub Link" />
                        </Icon>
                    </GitHubBtn>
                </KnowUs>
                <ContactUs>
                    <small>
                        Contact Us
                    </small>
                    <ContactIcon>
                        <LinkedInBtn target = {"_blank"} href={"https://www.linkedin.com/in/sandeep-chander-62a638167/"}>
                            LinkedIn
                            <Icon>
                                <img src={LinkedIn} alt="GitHub Link" />
                            </Icon>
                        </LinkedInBtn>
                        <EmailButton target = {"_blank"} href={"mailto:<nowiki>sandeep15111999@gmail.com"}>
                            Email
                            <Icon>
                                <img src={Email} alt="GitHub Link" />
                            </Icon>
                        </EmailButton>
                    </ContactIcon>
                </ContactUs>
            </Contact>
            <LogoBar>
                <LeftText>
                    <p>
                        Buy and Negotiate 🤝
                    </p>
                </LeftText>
                <Image>
                    <img src={Logo} alt="Logo" />
                </Image>
                <RightText>
                    <p>
                        Earn above MSP 💰   
                    </p>
                </RightText>
            </LogoBar>
            <EndBar></EndBar>
        </FooterContainer>
    )
}

export default Footer;
