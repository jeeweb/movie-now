import styled from "styled-components";
import LoadingSpinner from "../Components/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useMatch } from "react-router-dom";
import { getNowPlaying, IAPIResponse, makeBgPath, makeImagePath } from "../api";
import { motion, AnimatePresence } from "framer-motion";
import MovieDetail from "./MovieDetail";

const NowPlayingSection = styled.section`
  padding: calc(2em + 28px) 0 2em;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const MovieBanner = styled.div<{ bannerImg: string }>`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 81vw;
  height: 100vh;
  padding: 2em;
  background-image: linear-gradient(
      rgba(12, 7, 30, 1),
      rgba(0, 0, 0, 0),
      rgba(12, 7, 30, 1)
    ),
    linear-gradient(to right, rgba(0, 0, 0, 0) 72%, rgba(12, 7, 30, 1)),
    url(${(props) => props.bannerImg});
  background-size: cover;
  background-position: center;
`;

const BannerTitle = styled.h2`
  font-size: 48px;
  font-weight: 700;
  line-height: 2;
`;

const BannerOverview = styled.p`
  font-size: 1.4;
  width: 40%;
`;

const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  width: 32vw;
`;

const MovieItem = styled(motion.li)`
  padding: 1px;
  width: calc(16vw - 2em);
  border: 1px solid rgba(225, 176, 255, 0.3);
  border-radius: 20px;
  background: rgba(229, 208, 253, 0.2);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.4);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  overflow: hidden;
  cursor: pointer;
`;

const ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid rgba(225, 176, 255, 0.3); */
  /* border-radius: 16px; */
  overflow: hidden;
  width: 100%;
  img {
    width: 100%;
    height: auto;
  }
`;

function NowPlaying() {
  const { isLoading, data } = useQuery<IAPIResponse>(
    ["movies", "now-playing"],
    getNowPlaying
  );
  const navigate = useNavigate();
  const movieDetailMatch = useMatch(`/now-playing/movies/:movieId`);
  console.log(movieDetailMatch);
  const onMovieClicked = (movieId: number) => {
    navigate(`movies/${movieId}`);
  };
  return (
    <NowPlayingSection>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <MovieBanner
            bannerImg={makeBgPath(data?.results[0].backdrop_path || "")}
          >
            <BannerTitle>{data?.results[0].title}</BannerTitle>
          </MovieBanner>
          <MovieList>
            {data?.results.map((movie) => {
              return (
                <MovieItem
                  layoutId={String(movie.id)}
                  onClick={() => onMovieClicked(movie.id)}
                >
                  <ImgBox>
                    <img
                      src={makeImagePath(movie.poster_path)}
                      alt={movie.title}
                    />
                  </ImgBox>
                </MovieItem>
              );
            })}
          </MovieList>
          {movieDetailMatch ? <MovieDetail /> : ""}
        </>
      )}
    </NowPlayingSection>
  );
}

export default NowPlaying;
