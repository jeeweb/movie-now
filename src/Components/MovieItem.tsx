import styled from "styled-components";
import { makeImagePath, IMovie } from "../api";
import { useNavigate, useMatch } from "react-router-dom";

const MovieItemStyle = styled.li`
  padding: 1vw;
  width: calc((100vw - 4em - 3em - 8px) / 4);
  border: 1px solid rgba(202, 114, 255, 0.3);
  border-radius: 20px;
  background: rgba(129, 112, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31 38 135, 0.4);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  cursor: pointer;
`;

const ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 16px;
  overflow: hidden;
  height: 26vw;
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
  const movieDetailMatch = useMatch(":movieId");
  const onMovieClicked = (movieId: number) => {
    navigate(`${movieId}`);
  };

  return (
    <MovieItemStyle onClick={() => onMovieClicked(data.id)}>
      <ImgBox>
        <img src={makeImagePath(data.poster_path)} alt={data.title} />
      </ImgBox>
      <MovieTitle>{data.title}</MovieTitle>
    </MovieItemStyle>
  );
}

export default MovieItem;
