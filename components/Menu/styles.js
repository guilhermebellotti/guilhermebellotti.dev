import { motion } from "framer-motion";
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
  @media (max-width: 350px) {
    display: none;
  }
`;
export const Name = styled.h5`
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
  min-width: 82px;
  &:hover {
    background-color: var(--second-color);
    color: var(--third-color);
  }
`;
export const MenuList = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: var(--main-color);
  /* transition: all 0.325s ease-in-out; */
  /* transform: ${({ openMenu }) =>
    openMenu ? "translateY(0)" : "translateY(-100%)"}; */
  /* visibility: ${({ openMenu }) => (openMenu ? "visible" : "hidden")};
  opacity: ${({ openMenu }) => (openMenu ? "1" : "0")}; */
  z-index: ${({ openMenu }) => (openMenu ? "9" : "-1")};
`;
export const List = styled(motion.ul)`
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
  ul {
    text-align: center;
    /* display: none; */
  }
`;
export const Item = styled(motion.li)`
  padding: 0;
  margin-bottom: 25px;
  /* transform: translateY(-500px); */
  a {
    color: var(--third-color);
    text-decoration: none;
    font-weight: 500;
    font-size: 24px;
    transition: background 0.125s ease-in-out;
    text-transform: uppercase;
    position: relative;
    padding: 0;
    margin: 0;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 0px;
      z-index: -1;
      background-color: var(--second-color);
      transition: height 0.125s ease;
    }
    &:hover::after {
      height: calc(100% + 2px);
    }
  }
  &:last-of-type {
    a {
      ::after {
        height: 12px;
      }
      :hover::after {
        height: calc(100% + 2px);
      }
    }
  }
`;
