import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.15rem;
  background: transparent;
  border: none;
  // 0.05rem solid var(--offWhite);
  color: var(--offWhite);
  // border-radius: 0.2rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0;
  //transition: all 0.3s ease-in-out;
  &:hover {
    //   color: var(--mainOrange);
    //   border-bottom: 0.05rem solid var(--offBlack);
    transform: scale(1.2);
    transition: all 0.2s ease-in-out;
  }
  &:focus {
    outline: none;
  }
  &:after {
    content: "";
    display: block;
    margin: auto;
    height: 0.0625rem;
    width: 0px;
    background: transparent;
    transition: width 0.3s ease, background-color 0.3s ease;
  }
  &:hover:after {
    width: 100%;
    background: var(--mainOrange);
  }
`;
