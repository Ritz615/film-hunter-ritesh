import MoviePageClient from "@/components/pages/MoviePage";
import {
  _parseIMDBChunkData,
  FAKE_DATA_DB,
  getMovie,
  sortMovies,
} from "@/lib/db";
import { useSearchParams } from "next/navigation";
import React from "react";

const MoviePage: React.FC<{ params: { imdbID: string } }> = async ({
  params,
}) => {
  let movie: any = {};

  try {
    let data = await fetch(
      `http://localhost:3000/api/get-movie?t=${params.imdbID}`
    );
    let _fetchedMovies = await data.json();

    movie = _fetchedMovies;
  } catch (err) {
    console.log(err);
  }

  return (
    <div>
      <MoviePageClient movie={movie} />
    </div>
  );
};

export default MoviePage;
