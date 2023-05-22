import styled from "styled-components";

export const Title = styled.h1`
  font-weight: 700;
  font-size: clamp(54px, calc(3.375rem + ((1vw - 3.6px) * 1.6667)), 80px);
  line-height: calc(3.5rem + ((1vw - 0.2rem) * 2));
  letter-spacing: 0.02em;
  text-align: center;
  color: #fff;
  @media (max-width: 768px) {
  }
`;
