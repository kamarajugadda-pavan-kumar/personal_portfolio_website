import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
      <LeftSection>
          <SectionTitle main center>
              Welcome To<br />
          My Personal Porfolio
          </SectionTitle>

          <SectionText>
              The purpoose of Javascript library is to level up one self in interactive programming.
          </SectionText>
          <Button alt={true} onClick={()=>window.location.assign('https:google.com')}>Learn More</Button>
      </LeftSection>
  </Section>
);

export default Hero;
