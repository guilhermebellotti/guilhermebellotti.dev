import * as S from "./styles";

import Image from "next/image";
import LogoImg from "../../src/imgs/logo-guilhermebellotti.svg";

function Logo() {
  return (
    <S.Container>
      <Image
        src={LogoImg}
        alt="Logo Guilherme Bellotti - Quadrado em 3D nas cores royal fúcsia, verde caribenho e azul-marinho"
        title="Logo Guilherme Bellotti"
        width={36}
        height={36}
      />
      {/* <img src={LogoImg} /> */}
    </S.Container>
  );
}

export default Logo;
