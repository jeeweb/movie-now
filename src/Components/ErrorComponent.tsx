import styled from "styled-components";

const ErrorSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 64px;
  font-weight: bold;
`;

function ErrorComponent() {
  return (
    <ErrorSection>
      <p>
        <span>😦 Wait,</span>
        <br />
        Something's Wrong
      </p>
    </ErrorSection>
  );
}
export default ErrorComponent;
