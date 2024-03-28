import styled from "styled-components";
import HomeButton from "./HomeButton";
import BackButton from "./BackButton";

const ErrorSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  font-size: 64px;
  font-weight: bold;

  p:after {
    content: "";
    display: block;
    width: 100%;
    height: 10px;
    background: linear-gradient(90deg, #fff, #5e487b);
  }

  span {
    color: #5e487b;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

function ErrorComponent() {
  return (
    <ErrorSection>
      <p>
        <span>😦 Wait,</span>
        <br />
        Something's Wrong..
      </p>
      <ButtonBox>
        <BackButton />
        <HomeButton />
      </ButtonBox>
    </ErrorSection>
  );
}
export default ErrorComponent;
