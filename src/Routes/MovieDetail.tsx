import styled from "styled-components";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { getMovie, IMovieDetail, makeImagePath, makeBgPath } from "../api";
import { useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from "../Components/LoadingSpinner";
import { IconStarFilled } from "../Components/Icons/IconStar";
import { IconFlashFilled } from "../Components/Icons/IconFlash";

const MovieDetailModal = styled(motion.div)``;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(54, 31, 86, 0.8), rgba(12, 7, 30, 0.8));
  opacity: 0;
  z-index: 200;
`;

const DetailBox = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  height: 600px;
  width: 500px;
  border-radius: 12px;
  background: #0c071e;
  overflow: hidden;
  box-shadow: 0 0px 32px rgba(21, 25, 90, 0.4);
  z-index: 201;
`;

const ImgBox = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  overflow: hidden;
  img {
    width: auto;
    height: 100%;
  }
`;

const DetailInfo = styled.div`
  padding: 2em;
`;

const MovieTitle = styled.p`
  font-family: "Timmana";
  font-size: 2.4em;
  letter-spacing: 0.08;
`;

const MovieGenres = styled.ul`
  display: flex;
  margin-top: 0.6em;
`;

const MovieGenreItem = styled.li`
  position: relative;
  & + & {
    padding-left: 12px;
  }
  & + &:before {
    content: "・";
    position: absolute;
    left: 3px;
    color: #b174cf;
  }
`;

const ReleaseRate = styled.div`
  display: flex;
  gap: 1em;
  margin: 1em 0;

  span {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  span:first-child svg {
    width: 18px;
    height: 18px;
    path {
      fill: #b174cf;
    }
  }

  span:last-child svg {
    width: 22px;
    height: 22px;
    path {
      fill: #b174cf;
    }
  }
`;

const MovieOverview = styled.div`
  max-height: 116px;
  line-height: 1.2;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(177, 116, 207, 0.5);
    border-radius: 4px;
  }
`;

function MovieDetail() {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const { isLoading, data } = useQuery<IMovieDetail>(["movie", movieId], () =>
    getMovie(movieId || "")
  );
  console.log(data);
  const onOverlayClick = () => navigate(-1);
  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : movieId ? (
        <MovieDetailModal layoutId={movieId}>
          <Overlay
            onClick={onOverlayClick}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          <DetailBox>
            <ImgBox>
              {/* <img src={makeImagePath(data?.poster_path!)} alt={data?.title} /> */}
              <img src={makeBgPath(data?.backdrop_path!)} alt={data?.title} />
            </ImgBox>
            <DetailInfo>
              <MovieTitle>{data?.title}</MovieTitle>
              <MovieGenres>
                {data?.genres.map((genre) => {
                  return (
                    <MovieGenreItem key={genre.id}>{genre.name}</MovieGenreItem>
                  );
                })}
              </MovieGenres>
              <ReleaseRate>
                <span>
                  <IconFlashFilled />
                  {data?.release_date.slice(0, 4)}
                </span>
                <span>
                  <IconStarFilled />
                  {data?.vote_average.toFixed(1)}
                </span>
              </ReleaseRate>
              <MovieOverview>
                <p>{data?.overview}</p>
              </MovieOverview>
            </DetailInfo>
          </DetailBox>
        </MovieDetailModal>
      ) : null}
    </>
  );
}

export default MovieDetail;
