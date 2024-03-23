import styled from "styled-components";
import MovieItem from "../Components/MovieItem";
import LoadingSpinner from "../Components/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import { getComingSoon, IMovie } from "../api";

const ComingSoonSection = styled.section``;

const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
`;

function ComingSoon() {
  const { isLoading, data } = useQuery(["movies", "popular"], getComingSoon);
  return (
    <ComingSoonSection>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <MovieList>
          {data.results.map((movie: IMovie) => (
            <MovieItem key={movie.id} data={movie} />
          ))}
        </MovieList>
      )}
    </ComingSoonSection>
  );
}

export default ComingSoon;
