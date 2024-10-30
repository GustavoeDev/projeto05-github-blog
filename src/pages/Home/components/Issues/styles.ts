import styled from "styled-components";

export const IssuesContainer = styled.div`
  max-width: 26rem;
  width: 100%;
  background-color: ${(props) => props.theme["blue-600"]};
  padding: 2rem;
  border-radius: 10px;

  & > div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1.25rem;

    & > h2 {
      width: 80%;
      font-size: 1.25rem;
      font-weight: bold;
    }

    & > span {
      font-size: 0.875rem;
    }
  }
`;
