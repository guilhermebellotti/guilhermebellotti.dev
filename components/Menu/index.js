import * as S from "./styles";

import { useEffect, useState } from "react";

import Link from "next/link";
import Logo from "../Logo";
import links from "./content";

function Menu() {
  const [openMenu, setOpenMenu] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("menu-open", openMenu);
  }, [openMenu]);
  return (
    <S.Container>
      <S.Wrapper>
        <Link href="/" passHref>
          <S.LogoContainer title="Guilherme Bellotti - Desenvolvedor front-end">
            <Logo />
            <S.Infos>
              <S.Name>Guilherme G. Bellotti</S.Name>
              <S.Role>Desenvolvedor front-end</S.Role>
            </S.Infos>
          </S.LogoContainer>
        </Link>
        <S.MenuContainer>
          <S.ButtonModal href="#" title="Solicitar um orçamento">
            Quero fazer um orçamento!
          </S.ButtonModal>
          <S.ButtonMenu
            title="Abrir menu"
            onClick={() => setOpenMenu(!openMenu)}
            openMenu={openMenu}
          >
            {openMenu ? "Fechar menu" : "Menu"}
          </S.ButtonMenu>
        </S.MenuContainer>
      </S.Wrapper>
      <S.MenuList openMenu={openMenu}>
        <S.List openMenu={openMenu}>
          {links.map((link, i) => (
            <S.Item key={i} openMenu={openMenu}>
              <Link href={link.url} title={link.title}>
                <a>{link.label}</a>
              </Link>
            </S.Item>
          ))}
        </S.List>
      </S.MenuList>
    </S.Container>
  );
}

export default Menu;
