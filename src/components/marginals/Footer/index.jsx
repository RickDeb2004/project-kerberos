import { Link } from 'react-router-dom';
import { FooterContainer, FooterCopyright, FooterImage, FooterInsights, FooterLinks, FooterSocials, FooterText } from './styles';
import { Icon } from '@iconify/react';
import { footerData } from '../../../data/footer';

const Footer = () => {
  const { imageLink, siteLinks, socialLinks, alt } = footerData;

  return (
    <div>
      <FooterContainer>
        <FooterInsights>
          <FooterImage src={imageLink} alt={alt} />
          <FooterLinks>
            {siteLinks.map(link => (
              <FooterText key={link.Id}>
                <a href={link.link}>{link.title}</a>
              </FooterText>
            ))}
          </FooterLinks>
        </FooterInsights>
        <hr style={{ width: '100%', margin: '80px 0 25px 0' }} />
        <FooterCopyright>
          <FooterText>Architected with 💙 by OpenCode</FooterText>
          <FooterSocials>
            {socialLinks.map(socialLink => (
              <Link key={socialLink.Id} href={socialLink.link}>
                {socialLink.name === 'ri:twitter-x-fill' ? (
                  <Icon icon={socialLink.name} width='25' height='25' color='#6c757d' />
                ) : (
                  <Icon icon={`mdi:${socialLink.name}`} width='30' height='30' color='#6c757d' />
                )}
              </Link>
            ))}
          </FooterSocials>
        </FooterCopyright>
      </FooterContainer>
    </div>
  );
};

export default Footer;
