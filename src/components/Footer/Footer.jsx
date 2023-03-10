import {
  FooterStyled,
  FooterContentStyled,
  FooterTextStyled,
} from './Footer.styled';

export const Footer = () => {
  return (
    <FooterStyled>
      <FooterContentStyled>
        <FooterTextStyled>
          © 2023 | All Rights Reserved | Developed by Pablo Lip
        </FooterTextStyled>
      </FooterContentStyled>
    </FooterStyled>
  );
};