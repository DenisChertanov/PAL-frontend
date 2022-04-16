import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import AnimeCard from "../components/anime-card/AnimeCard";

function AnimePage() {
  const { id } = useParams();
  const [anime, setAnime] = useState();

  const animeCard = <AnimeCard anime={anime} />;

  useEffect(() => {
    fetch(`http://localhost:8081/api/public/anime/get-by-id/${id}`)
      .then((result) => result.json())
      .then((animeOutDto) => {
        setAnime(animeOutDto);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return anime && animeCard;
}

export default AnimePage;
