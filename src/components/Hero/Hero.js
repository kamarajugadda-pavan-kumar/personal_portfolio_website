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
              Click on Resume button to have a look at my resume
          </SectionText>
          <Button alt={true} onClick={()=>window.location.assign("https://drive.google.com/file/d/1eEaIS_bW26VYYZuJ1Rwp3Z8a6E5jMdns/view?usp=sharing")}>Resume</Button>
      </LeftSection>
  </Section>
);

export default Hero;
