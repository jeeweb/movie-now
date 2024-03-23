import styled from "styled-components";
import MovieItem from "../Components/MovieItem";
import LoadingSpinner from "../Components/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import { getNowPlaying, IMovie } from "../api";

const NowPlayingSection = styled.section``;

const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
`;

function NowPlaying() {
  const { isLoading, data } = useQuery(
    ["movies", "now-playing"],
    getNowPlaying
  );
  return (
    <NowPlayingSection>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <MovieList>
          {data.results.map((movie: IMovie) => (
            <MovieItem key={movie.id} data={movie} />
          ))}
        </MovieList>
      )}
    </NowPlayingSection>
  );
}

export default NowPlaying;
