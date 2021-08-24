import * as S from "./styles";

import Image from "next/image";
import VectorHeader from "../../src/imgs/header-vector.svg";

function Header() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.BoxText>
          <S.Title>
            Dê vida ao <b>seu sonho</b>,
            <br /> torne real <b>seu objetivo</b>.
          </S.Title>
          <S.Description>
            Com o <b>front-end</b> conseguimos <b>impactar as pessoas</b> com
            visuais incríveis e funcionais. Isso me faz amar cada vez mais minha
            profissão.
          </S.Description>
        </S.BoxText>
        <S.BoxBanner>
          <Image src={VectorHeader} alt="" />
        </S.BoxBanner>
      </S.Wrapper>
    </S.Container>
  );
}

export default Header;
