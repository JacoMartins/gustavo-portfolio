import React, { useState, useEffect, ReactNode } from 'react';
import {
  PresentSection, PresentContainer, PageMain, AboutMeSection, AboutMeContainer, AbilitiesSection, SectionTitle, SectionText, AbilitiesContainer, ProjectsSection, ProjectsContainer, Section, SectionContainer, Container, SubSection, SectionH1, ColoredText, SectionH2, Button, Footer

} from './styles';

import { Summary } from '../../Summary';

import { IconButton } from '../../IconButton';

import { frontEndSummary, redesSummary, languagesSummary, audiovisualSummary, contacts, projects, cert, prof } from './data';
import { Logo } from '../../Header/styles';
import { BookBookmark, Bus } from 'phosphor-react';


interface PageType {
  name: string;
  colorScheme: string | null;
}

export function Page({ name, colorScheme }: PageType) {
  function handleContactMeClick() {
    window.scrollTo(0, document.getElementById('contacts')!.offsetTop - (document.querySelectorAll('header')[0].offsetHeight))
  }

  return (
    <PageMain>
      <PresentSection id="home" colorScheme={colorScheme}>
        <PresentContainer colorScheme={colorScheme}>

          <div className="Container">
            <div className="TextContainer">
              <h1>Sou <span>Gustavo Alexandre</span></h1>

              <div className="textTextContainer">
                <h2>
                  Infraestrutura de Redes
                </h2>
                <span>Redes de Computadores, Segurança da Informação, Infraestrutura, Administração de Redes.</span>
              </div>

              <div className="buttonContainer">
                <a onClick={handleContactMeClick}><button>Entrar em contato</button></a>
                <a><button>Baixar currículo</button></a>
              </div>
            </div>
            <div className="Picture" />
          </div>

        </PresentContainer>
      </PresentSection>


      <AboutMeSection id="aboutMe" colorScheme={colorScheme}>
        <AboutMeContainer colorScheme={colorScheme}>
          <div className='TextContainer'>

            <SectionTitle colorScheme={colorScheme}>Sobre mim</SectionTitle>

            <SectionText colorScheme={colorScheme}>
              Sou um jovem de 17 anos, brasileiro, natural de Fortaleza capital cearense, atualmente cursando o quinto semestre do Curso Técnico em Redes de Computadores na Escola Estadual de Ensino Profissionalizante EEEP Ícaro de Sousa Moreira.
            </SectionText>

            <br></br>

            <SectionText>
              - Técnico em Redes de Computadores;
            </SectionText>

            <SectionText>
              - Conhecimentos em Segurança da Informação;
            </SectionText>

            <SectionText>
              - Conhecimentos sólidos em Arquitetura de Redes;
            </SectionText>

            <SectionText>
              - Inglês intermediário, consigo escutar, ler e escrever em inglês!
            </SectionText>
          </div>
        </AboutMeContainer>
      </AboutMeSection>


      <AbilitiesSection id="habilities" colorScheme={colorScheme}>
        <AbilitiesContainer colorScheme={colorScheme}>
          <div className='TextContainer'>
            <SectionTitle colorScheme={colorScheme}>Habilidades</SectionTitle>
          </div>

          <div className='SummaryContainer'>
            <Summary type="%list" title="Redes de Computadores" subTitle='Minhas habilidades na área de Redes de Computadores' summaries={redesSummary} colorScheme={colorScheme} />
            <Summary type="%list" title="Frontend" subTitle='HTML5, CSS3 e Javascript' summaries={frontEndSummary} colorScheme={colorScheme} />
            <Summary type="%list" title="Idiomas" subTitle='Língua Inglesa e Espanhola' summaries={languagesSummary} colorScheme={colorScheme} />
            <Summary type="%list" title="Audiovisual" subTitle='Edição profissional de vídeos, sons e fotografias.' summaries={audiovisualSummary} colorScheme={colorScheme} />
          </div>
        </AbilitiesContainer>
      </AbilitiesSection>

      <Section id="contacts" colorScheme={colorScheme}>
        <SectionContainer>
          <SectionTitle colorScheme={colorScheme}>Contato</SectionTitle>
          <div className='iconTextContainer'>
            {contacts.map((item) => {
              return (
                <IconButton
                  key={item.description}
                  text={item.text}
                  description={item.description}
                  image={item.image}
                  link={item.link}
                  type={item.type}
                  colorScheme={colorScheme}
                />
              )
            })}
          </div>
        </SectionContainer>
      </Section>

      <Section id="projects" colorScheme={colorScheme}>
        <SectionContainer>
          <SectionTitle colorScheme={colorScheme}>Projetos</SectionTitle>
          <div className='iconTextContainer'>
            {projects.map((item) => {
              return (
                <IconButton
                  key={item.description}
                  text={item.text}
                  description={item.description}
                  image={item.image}
                  icon={item.icon}
                  link={item.link}
                  type={item.type}
                  colorScheme={colorScheme}
                />
              )
            })}
          </div>
        </SectionContainer>
      </Section>

      <SubSection id='projectsbookyourself' height='40rem' bg={colorScheme === 'light' ? '#F0FFF4' : '#0c1411'} colorScheme={colorScheme}>
        <Container row="row">
          <aside>
            <BookBookmark size='16rem' weight='regular' color="#38A169" />
            <div className='TextContainer'>
              <SectionH1 color="#38A169">BookYourself</SectionH1>
              <SectionH2 color={colorScheme === 'light' ? 'var(--text-light)' : 'var(--text-dark)'}>O BookYourself é uma plataforma destinada a melhora, automatização e gerência de reservas de itens ou ambientes de uma instituição.</SectionH2>
              <Button color={colorScheme === 'light' ? '#38A169' : '#2F855A'}>Saiba mais</Button>
            </div>
          </aside>
        </Container>
      </SubSection>

      <AbilitiesSection id="portfolio" colorScheme={colorScheme}>
        <SectionContainer>
          <SectionTitle colorScheme={colorScheme}>Portfólio</SectionTitle>
          <AbilitiesContainer colorScheme={colorScheme}>
            <div className='SummaryContainer'>
              <Summary title="Licenças e certificados" subTitle="Meus certificados/certificações" type="Button" colorScheme={colorScheme}>

                {cert.map((item) => {
                  return (
                    <IconButton
                      key={item.description}
                      text={item.text}
                      description={item.description}
                      image={item.image}
                      link={item.link}
                      type={item.type}
                      colorScheme={colorScheme}
                    />
                  )
                })}

              </Summary>

              <Summary title="Redes Profissionais" subTitle="Encontre aqui os meus contatos profissionais." type="Button" colorScheme={colorScheme}>

                {prof.map((item) => {
                  return (
                    <IconButton
                      key={item.description}
                      text={item.text}
                      description={item.description}
                      image={item.image}
                      link={item.link}
                      type={item.type}
                      colorScheme={colorScheme}
                    />
                  )
                })}

              </Summary>
            </div>
          </AbilitiesContainer>
        </SectionContainer>
      </AbilitiesSection>

      <Footer colorScheme={colorScheme}>
        <SectionContainer colorScheme={colorScheme}>

          <div className='FooterMain'>
            <div className='LogoContainer'>
              <Logo colorScheme={colorScheme}>
                <span>Gustavo Alexandre</span>
              </Logo>

              <SectionText opacity='0.5' colorScheme={colorScheme}>Meu Portfólio</SectionText>
            </div>

            <div className='FooterContent'>
              <a href="#home"><SectionText colorScheme={colorScheme}>Início</SectionText></a>
              <a href="#aboutMe"><SectionText colorScheme={colorScheme}>Sobre mim</SectionText></a>
              <a href="#habilities"><SectionText colorScheme={colorScheme}>Habilidades</SectionText></a>
              <a href="#contacts"><SectionText colorScheme={colorScheme}>Contatos</SectionText></a>
              <a href="#portfolio"><SectionText colorScheme={colorScheme}>Portfólio</SectionText></a>
            </div>
          </div>

        </SectionContainer>
      </Footer>

    </PageMain >
  )
}
