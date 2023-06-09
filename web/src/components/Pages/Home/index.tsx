import {
  PresentSection, PresentContainer, PageMain, AboutMeSection, AboutMeContainer, AbilitiesSection, SectionTitle, SectionText, AbilitiesContainer, ProjectsSection, ProjectsContainer, Section, SectionContainer, Container, SubSection, SectionH1, ColoredText, SectionH2, Button, Footer

} from './styles';

import { Summary } from '../../Summary';

import { IconButton } from '../../IconButton';

import { hobbiesSummary, hardSkillsSummary, softSkillsSummary, contacts, projects, cert, prof } from './data';
import { Logo } from '../../Header/styles';
import { BookBookmark } from 'phosphor-react';
import curriculo from '../../../assets/documents/CV - Gustavo Alexandre.pdf'

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
                  Cibersegurança
                </h2>
                <span>Redes de Computadores, Segurança da Informação, Infraestrutura, Administração de Redes.</span>
              </div>

              <div className="buttonContainer">
                <a onClick={handleContactMeClick}><button>Entrar em contato</button></a>
                <a href={curriculo}><button>Baixar currículo</button></a>
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
            <Summary type="%list" title="Hard Skills" subTitle='Minhas habilidades na área de Redes de Computadores' summaries={hardSkillsSummary} colorScheme={colorScheme} />
            <Summary type="%list" title="Soft Skills" subTitle='Habilidades Comportamentais' summaries={softSkillsSummary} colorScheme={colorScheme} />
            <Summary type="%list" title="Hobbies" subTitle='Bom, nem todo mundo é de ferro, né? Coisas que eu faço para aproveitar a vida.' summaries={hobbiesSummary} colorScheme={colorScheme} />
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
