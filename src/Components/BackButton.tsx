import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BackBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 45px;
  width: 96px;
  color: #5e487b;
  font-size: 0.4em;
  border: 2px solid #5e487b;
  border-radius: 8px;
  background-color: #fff;
  transition: 0.2s;
  cursor: pointer;

  span {
    display: none;
  }

  &:hover {
    width: 120px;
    border-color: #1e1543;
    background-color: #1e1543;
    color: #fff;
  }

  &:hover span {
    display: block;
  }
`;

function BackButton() {
  const navigate = useNavigate();
  const onClickBackBtn = () => {
    navigate(-1);
  };
  return (
    <BackBtn onClick={onClickBackBtn}>
      <span>👈</span>Back
    </BackBtn>
  );
}

export default BackButton;
