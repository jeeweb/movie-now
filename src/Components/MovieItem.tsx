import styled from "styled-components";
import { IMovie, makeImagePath } from "../api";
import { useNavigate, useMatch } from "react-router-dom";

const MovieItemStyle = styled.li`
  padding: 1px;
  width: 100%;
  border: 1px solid rgba(225, 176, 255, 0.3);
  border-radius: 20px;
  background: rgba(229, 208, 253, 0.2);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.4);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  box-shadow: 0 0 18px #b174cf;
  overflow: hidden;
  cursor: pointer;
`;

const ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  img {
    width: 100%;
    height: auto;
  }
`;

const MovieTitle = styled.p`
  font-size: 1.2em;
  line-height: 1.2em;
  padding: 0.8em 0;
`;

function MovieItem({ data }: { data: IMovie }) {
  const navigate = useNavigate();
  const movieDetailMatch = useMatch(`/movies/:movieId`);
  console.log(movieDetailMatch);
  const onMovieClicked = (movieId: number) => {
    navigate(`/movies/${movieId}`);
  };

  return (
    <MovieItemStyle onClick={() => onMovieClicked(data.id)}>
      <ImgBox>
        <img src={makeImagePath(data.poster_path)} alt={data.title} />
      </ImgBox>
      {/* <MovieTitle>{data.title}</MovieTitle> */}
    </MovieItemStyle>
  );
}

export default MovieItem;
