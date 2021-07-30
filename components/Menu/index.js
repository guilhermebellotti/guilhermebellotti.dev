import * as S from "./styles";

import { useEffect, useState } from "react";

import Link from "next/link";
import Logo from "../Logo";
import links from "./content";
import { motion } from "framer-motion";

function Menu() {
  const [openMenu, setOpenMenu] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("menu-open", openMenu);
  }, [openMenu]);

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-500%", velocity: 2 },
  };

  const variantsMenu = {
    open: {
      display: "block",
      opacity: 1,
    },
    closed: {
      display: "none",
      opacity: 0,
    },
  };

  const variantsLinks = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <S.Container>
      <S.Wrapper>
        <motion.div animate={openMenu ? "closed" : "open"} variants={variants}>
          <Link href="/" passHref>
            <S.LogoContainer title="Guilherme Bellotti - Desenvolvedor front-end">
              <Logo />
              <S.Infos>
                <S.Name>Guilherme G. Bellotti</S.Name>
                <S.Role>Desenvolvedor front-end</S.Role>
              </S.Infos>
            </S.LogoContainer>
          </Link>
        </motion.div>
        <S.MenuContainer>
          <motion.div
            animate={openMenu ? "closed" : "open"}
            variants={variants}
          >
            <S.ButtonModal href="#" title="Solicitar um orçamento">
              Quero fazer um orçamento!
            </S.ButtonModal>
          </motion.div>
          <S.ButtonMenu
            title={!openMenu ? "Abrir menu" : "Fechar menu"}
            onClick={function (params) {
              setOpenMenu(!openMenu);
              if (!openMenu) {
                setTimeout(() => {
                  params.target.innerHTML = "Fechar";
                }, 50);
              } else {
                params.target.innerHTML = "Menu";
              }
            }}
            openMenu={openMenu}
          >
            Menu
          </S.ButtonMenu>
        </S.MenuContainer>
      </S.Wrapper>
      <S.MenuList
        openMenu={openMenu}
        animate={!openMenu ? "closed" : "open"}
        variants={variantsMenu}
      >
        <S.List>
          {links.map((link, i) => (
            <S.Item
              key={i}
              animate={!openMenu ? "closed" : "open"}
              variants={variantsLinks}
            >
              <Link href={link.url}>
                <a title={link.title}>{link.label}</a>
              </Link>
            </S.Item>
          ))}
        </S.List>
      </S.MenuList>
    </S.Container>
  );
}

export default Menu;
