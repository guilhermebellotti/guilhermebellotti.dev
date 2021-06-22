import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  min-width: 146px;
  padding: 20px;
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  max-width: max-content;
  height: 31px;
  text-decoration: none;
  color: var(--third-color);
`;
export const Infos = styled.div`
  margin-left: 10px;
  @media (max-width: 475px) {
    display: none;
  }
`;
export const Name = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 3px;
`;
export const Role = styled.p`
  font-size: 12px;
  font-weight: 300;
`;
export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const ButtonModal = styled.a`
  color: var(--third-color);
  text-decoration: none;
  position: relative;
  display: flex;
  max-width: max-content;
  width: fit-content;
  height: fit-content;
  max-height: max-content;
  margin-right: 45px;
  transition: all 0.125s ease-in-out;
  &::after {
    position: absolute;
    bottom: -5px;
    content: "";
    width: 100%;
    height: 1px;
    background-color: var(--third-color);
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const ButtonMenu = styled.button`
  background-color: var(--third-color);
  padding: 10px 16px;
  color: var(--main-color);
  text-decoration: none;
  border: none;
  outline: none;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.125s ease-in-out;
  position: relative;
  z-index: 10;
  &:hover {
    background-color: var(--second-color);
    color: var(--third-color);
  }
`;
export const MenuList = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: var(--main-color);
  transition: all 0.325s ease-in-out;
  /* transform: ${({ openMenu }) =>
    openMenu ? "translateY(0)" : "translateY(-100%)"}; */
  z-index: ${({ openMenu }) => (openMenu ? "9" : "-1")};
  visibility: ${({ openMenu }) => (openMenu ? "visible" : "hidden")};
  opacity: ${({ openMenu }) => (openMenu ? "1" : "0")};
`;
export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* transition: all 0.5s ease-in-out;
  transform: ${({ openMenu }) =>
    openMenu ? "translateY(0)" : "translateY(-10%)"}; */
`;
export const Item = styled.li`
  padding: 0;
  margin-bottom: 25px;
  /* transition: all 1s ease-in-out;
  &:nth-child(1) {
    transform: ${({ openMenu }) =>
    openMenu ? "translateY(0)" : "translateY(-100%)"};
  }
  &:nth-child(2) {
    transform: ${({ openMenu }) =>
    openMenu ? "translateY(0)" : "translateY(-200%)"};
  }
  &:nth-child(3) {
    transform: ${({ openMenu }) =>
    openMenu ? "translateY(0)" : "translateY(-300%)"};
  }
  &:nth-child(4) {
    transform: ${({ openMenu }) =>
    openMenu ? "translateY(0)" : "translateY(-400%)"};
  }
  &:nth-child(5) {
    transform: ${({ openMenu }) =>
    openMenu ? "translateY(0)" : "translateY(-500%)"};
  } */
  &:last-of-type {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 100%;
      height: 12px;
      z-index: -1;
      background-color: var(--second-color);
    }
  }
  a {
    color: var(--third-color);
    text-decoration: none;
    font-weight: 500;
    font-size: 24px;
    transition: all 0.125s ease-in-out;
    text-transform: uppercase;
    &:hover {
      background-color: var(--second-color);
    }
  }
`;
