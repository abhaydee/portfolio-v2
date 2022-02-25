import styled from "styled-components";

export const ShadowContainer = styled.div`
  filter: ${(props) => `drop-shadow(0 0 0.75rem ${props.color}) !important`};
`;