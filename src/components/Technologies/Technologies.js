import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
    <Section id='tech'>
        <SectionDivider/><br/>
            <SectionTitle>Technologies</SectionTitle>
            <SectionText>I've worked with a range of technologies in the web development world</SectionText>
            <List>
                <ListItem>
                <DiFirebase size='3rem' />
                <ListContainer>
                    <ListTitle>
                        Front-End
                    </ListTitle>
                    <ListParagraph>
                        react.js <br/> HTML & CSS<br/> bootstrap
                    </ListParagraph>
                </ListContainer>
                </ListItem>

                <ListItem>
                <DiFirebase size='3rem' />
                <ListContainer>
                    <ListTitle>
                        Backend
                    </ListTitle>
                    <ListParagraph>
                         Node.js <br/> Express.js<br/> MongoDB
                    </ListParagraph>
                </ListContainer>
                </ListItem>

                <ListItem>
                <DiFirebase size='3rem' />
                <ListContainer>
                    <ListTitle>
                        UI/UX
                    </ListTitle>
                    <ListParagraph>
                         Adobe Xd
                    </ListParagraph>
                </ListContainer>
                </ListItem>

                <ListItem>
                <DiFirebase size='3rem' />
                <ListContainer>
                    <ListTitle>
                        Programming languages
                    </ListTitle>
                    <ListParagraph>
                        C++ <br/> python<br/>Javascript <br/>Data structures <br/> Algorithms
                    </ListParagraph>
                </ListContainer>
                </ListItem>
        </List>
    </Section>
);

export default Technologies;
