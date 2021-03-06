import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
        <LinkList>
            <LinkColumn>
                <LinkTitle>Call</LinkTitle>
                <LinkItem href='tel:+91 9800105334'>+91 9800105334</LinkItem>
            </LinkColumn>
            <LinkColumn>
                <LinkTitle>Email</LinkTitle>
                <LinkItem href='mail to:pavankd12@gmail.com'>pavankd12@gmail.com</LinkItem>
            </LinkColumn>
        </LinkList>
        <SocialIconsContainer>
            <CompanyContainer>
                    <SocialIconsContainer>
                    <SocialIcons href="https://github.com/kamarajugadda-pavan-kumar">
                        <AiFillGithub size='3rem' />
                    </SocialIcons>
                    <SocialIcons href="https://www.linkedin.com/in/pavan-kumar-7543b9a8">
                        <AiFillLinkedin size='3rem' />
                    </SocialIcons>
                    </SocialIconsContainer>
            </CompanyContainer>
        </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
