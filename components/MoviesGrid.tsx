"use client";

import React from "react";
import MovieCard from "./ui/movie-card";
import { useSearchParams } from "next/navigation";

const MoviesGrid: React.FC<{ movies: any[] }> = ({ movies }) => {
  const searchParams = useSearchParams();

  if (movies.length <= 0)
    return (
      <div className="h-full w-full p-8 text-center flex flex-col gap-y-5">
        <h1 className="text-4xl font-bold">
          Quick and effortless movie discoveries!
        </h1>
        <p className="text-lg">Get all the information about the movie.</p>
      </div>
    );
  return (
    <section className="p-4">
      <h1 className="text-2xl py-4">
        Search Results for: <i> {searchParams.get("q")}</i>
      </h1>
      <div className=" w-full h-full p-1 grid grid-cols-12 gap-10 mt-5">
        {movies.map((movie) => (
          <div className="col-span-3" key={movie.imdb_id}>
            <MovieCard
              title={movie.title}
              image={movie.poster_path} // Make sure this path is valid
              rating={movie.vote_average}
              description={movie.overview}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoviesGrid;
