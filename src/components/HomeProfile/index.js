import React from "react"

import {
  Container,
  ContainerImg,
  Img,
  ContainerProfile,
  ContainerBiography,
  Name,
  Title,
  Biography,
  ContainerSkills,
} from "./styles"

import {
  FaDocker,
  FaNodeJs,
  FaReact,
  FaMobileAlt,
  FaApple,
  FaAndroid,
  FaGithub,
  FaDigitalOcean,
  FaAws,
} from "react-icons/fa"

import Ruan from "../../assets/images/ruan.jpg"

export default function HomeProfile() {
  return (
    <Container>
      <ContainerImg>
        <Img src={Ruan} />
      </ContainerImg>
      <ContainerProfile>
        <Name>Ruanderson Vieira</Name>
        <Title>Full-Stack Developer and IoT Engineer</Title>
        <ContainerBiography>
          <Biography>
            Olá, meu nome é Ruanderson Vieira Silva Mira, tenho 22 anos e nasci
            em Santo Antônio de Jesus/BA e atualmente sou desenvolvedor na
            Accalia.io, além de ser um cara apaixonado por inovação, robótica e
            Internet das Coisas.
          </Biography>
          <Biography>
            Comecei na área de tecnologia e design desde pequeno criando,
            logomarcas, páginas web e servidores piratas de jogos (mas não façam
            isso pessoal XD), e no mercado de trabalho há 6 anos. Já passei por
            empresas como Huggy, Placo Saint-Global, Giross, Sidequest, Orus
            Digital e outras mais. anos, onde já tive os cargos de: design,
            suporte, desenvolvimento, head mobile e atualmente sou desenvolvedor
            Full-Stack e Engenheiro IoT.
          </Biography>
          <Biography>
            Estudo Sistemas de informação na UNIFTC, mas, esse não é a único
            curso que faço, eu também estudo Engenharia Mecatrônica na UNIFACS e
            já cursei Técnico em Mecatrônica e Mecânico de Usinagem no SENAI no
            ano de 2016 e 2019. Nos finais de semana eu costumo produzir umas
            músicas e tocar em algumas festas.
          </Biography>
          <Biography>
            Eu amo trabalhar em novos projetos principalmente na área da
            automação. No meu tempo livre gosto aprender coisas novas e de
            compartilhar conhecimento por meio de palestras e minicursos nas
            comunidades de tecnologia especialmente construindo coisas que
            impactam vidas.
          </Biography>
        </ContainerBiography>
        <ContainerSkills size={50}>
          <FaDocker size={50} />
          <FaNodeJs size={50} />
          <FaReact size={50} />
          <FaMobileAlt size={50} />
          <FaApple size={50} />
          <FaAndroid size={50} />
          <FaGithub size={50} />
          <FaDigitalOcean size={50} />
          <FaAws size={50} />
        </ContainerSkills>
      </ContainerProfile>
    </Container>
  )
}
