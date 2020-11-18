import styled from "styled-components";

export const Container = styled.div`
  height: 400px;
  width: 400px;

  background: #333;
  border-radius: 8px;

  padding: 30px;

  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-areas: "content aside";
  


  form{
    grid-area: content;

    padding: 12px;

    display: flex;
    flex-direction: column;
  }
`;

export const CardWrapper = styled.div`
  grid-area: aside;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-evenly;
`;

export const Card = styled.div`
  color: white;
  background: white;
  border-radius: 8px;

  img {
    padding: 5px;
    width: 80px;

    border-radius: 4px;
    border-bottom-right-radius: 30px;

    &.epic {
      background: linear-gradient(
        90deg,
        rgba(180, 80, 180, 0.7),
        rgba(130, 80, 130, 0.7)
      );
      border-bottom-right-radius: 30px;
    }

    &.rare {
      background: linear-gradient(
        90deg,
        rgba(10, 80, 180, 0.7),
        rgba(10, 70, 100, 0.7)
      );
    }

    &.uncommom {
      background: linear-gradient(
        90deg,
        rgba(10, 100, 30, 0.7),
        rgba(10, 80, 30, 0.7)
      );
    }
  }
`;
