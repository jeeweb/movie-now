import styled from "styled-components";
import LoadingSpinner from "../Components/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useMatch } from "react-router-dom";
import { getPopular, IAPIResponse, makeBgPath, makeImagePath } from "../api";
import { motion, AnimatePresence, useAnimate } from "framer-motion";
import MovieDetail from "./MovieDetail";
import { useEffect, useState } from "react";

const PopularSection = styled.section`
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
  background: linear-gradient(
      rgba(12, 7, 30, 1),
      rgba(12, 7, 30, 0),
      rgba(12, 7, 30, 1) 90%
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
  /* background: linear-gradient(rgba(12, 7, 30, 0), rgba(12, 7, 30, 1)); */
`;

const MovieList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2em;
  width: 16vw;
  margin-right: 3em;
`;

const MovieItem = styled(motion.li)`
  padding: 1px;
  width: 100%;
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

const movieVariants = {
  normal: {
    scale: 1,
    x: 0,
  },
  hover: {
    scale: 1.02,
    x: -40,
    transition: {
      delay: 0.1,
      duaration: 0.1,
      type: "tween",
    },
  },
};

function Popular() {
  const navigate = useNavigate();
  const { isLoading, data } = useQuery<IAPIResponse>(
    ["movies", "popular"],
    getPopular
  );
  const [movieOrder, setMovieOrder] = useState(0);
  //const [movieScope, movieAnimate] = useAnimate();
  const movieDetailMatch = useMatch(`/movies/:movieId`);
  const onMovieClicked = (movieId: number) => {
    navigate(`/movies/${movieId}`);
  };

  return (
    <PopularSection>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <MovieBanner
            bannerImg={makeBgPath(data?.results[7].backdrop_path || "")}
          >
            <BannerTitle>{data?.results[7].title}</BannerTitle>
          </MovieBanner>
          <MovieList>
            {data?.results.map((movie) => {
              return (
                <MovieItem
                  key={movie.id}
                  layoutId={String(movie.id)}
                  onClick={() => onMovieClicked(movie.id)}
                  whileHover="hover"
                  initial="normal"
                  variants={movieVariants}
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
    </PopularSection>
  );
}

export default Popular;
