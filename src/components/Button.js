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
  transition: all 0.3s ease-in-out;
  &:hover {
    color: var(--mainYellow);
    // border: 0.05rem solid var(--offBlack);
  }
  &:focus {
    outline: none;
  }
`;
