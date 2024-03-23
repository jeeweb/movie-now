import styled from "styled-components";
import MovieItem from "../Components/MovieItem";
import LoadingSpinner from "../Components/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import { getPopular, IMovie } from "../api";

const PopularSection = styled.section``;

const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
`;

function Popular() {
  const { isLoading, data } = useQuery(["movies", "popular"], getPopular);
  return (
    <PopularSection>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <MovieList>
          {data.results.map((movie: IMovie) => {
            return <MovieItem key={movie.id} data={movie} />;
          })}
        </MovieList>
      )}
    </PopularSection>
  );
}

export default Popular;
