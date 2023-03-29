import { darkTheme } from "@/assets/constants";
import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 6rem;
    min-height: 100vh;
    width: 100vw;
    background-color: ${darkTheme};
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(33%, auto));
    width: var(--max-width);
    max-width: 100%;
`;

export const Card = styled.div`
    padding: 1rem 1.2rem;
    border-radius: var(--border-radius);
    background: rgba(var(--card-rgb), 0);
    border: 1px solid rgba(var(--card-border-rgb), 0);
    transition: background 200ms, border 200ms;
    margin: 5px;
span {
  display: inline-block;
  transition: transform 200ms;

}
h2 {
  font-weight: 600;
  margin-bottom: 0.7rem;
}
p {
  margin: 0;
  opacity: 0.6;
  font-size: 0.9rem;
  line-height: 1.5;
  max-width: 30ch;
}
span:hover {
    transform: translateX(4px);
}
&:hover {
    background: rgba(var(--card-rgb), 0.1);
    border: 1px solid rgba(var(--card-border-rgb), 0.15);
}
`;


