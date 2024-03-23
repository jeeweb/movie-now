import styled from "styled-components";

const ErrorSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  font-size: 64px;
  font-weight: bold;

  p:after {
    content: "";
    display: block;
    width: 100%;
    height: 10px;
    background: linear-gradient(90deg, #5e487b, #1e1543);
  }

  span {
    color: #5e487b;
  }
`;

function NotFound() {
  return (
    <ErrorSection>
      <p>
        <span>🤯 Oops!</span>
        <br />
        PAGE NOT FOUND
      </p>
    </ErrorSection>
  );
}

export default NotFound;
