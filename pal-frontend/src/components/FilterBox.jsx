import React, { useState, useEffect } from "react";

import "./css/FilterBox.css";

import FilterItemGenres from "./filter-items/anime-filter/genres/FilterItemGenres";
import FilterItemTypes from "./filter-items/anime-filter/types/FilterItemTypes";
import FilterItemStates from "./filter-items/anime-filter/states/FilterItemStates";
import FilterItemYear from "./filter-items/anime-filter/year/FilterItemYear";
import FilterItemSortBy from "./filter-items/anime-filter/sort-by/FilterItemSortBy";
import FilterItemWhoWatched from "./filter-items/anime-filter/who-watched/FilterItemWhoWatched";
import GenresDropdownMultiMenu from "./dropdown-menu/GenresDropdownMultiMenu";
import TypesDropdownMenu from "./dropdown-menu/TypesDropdownMenu";
import StatesDropdownMenu from "./dropdown-menu/StatesDropdownMenu";
import SortsDropdownMenu from "./dropdown-menu/SortsDropdownMenu";
import { Link } from "react-router-dom";

function FilterBox({ ...props }) {
  const [includeGenres, setIncludeGenres] = useState([]);
  const [excludeGenres, setExcludeGenres] = useState([]);
  const [appliedIncludeGenres, setAppliedIncludeGenres] = useState([]);
  const [appliedExcludeGenres, setAppliedExcludeGenres] = useState([]);

  const [types, setTypes] = useState([]);
  const [appliedTypes, setAppliedTypes] = useState([]);

  const [states, setStates] = useState([]);
  const [appliedStates, setAppliedStates] = useState([]);

  const [sorts, setSorts] = useState([]);
  const [appliedSort, setAppliedSort] = useState();

  const [yearFrom, setYearFrom] = useState("");
  const [yearTo, setYearTo] = useState("");

  const [excludeWatched, setExcludeWatched] = useState(false);

  function addIncludeGenre(newGenre) {
    setAppliedIncludeGenres([newGenre, ...appliedIncludeGenres]);
    setIncludeGenres(
      includeGenres.map((currentGenre) =>
        currentGenre.id === newGenre.id
          ? { ...currentGenre, isApplied: true }
          : { ...currentGenre }
      )
    );
  }

  function addExcludeGenre(newGenre) {
    setAppliedExcludeGenres([newGenre, ...appliedExcludeGenres]);
    setExcludeGenres(
      excludeGenres.map((currentGenre) =>
        currentGenre.id === newGenre.id
          ? { ...currentGenre, isApplied: true }
          : { ...currentGenre }
      )
    );
  }

  function removeIncludeGenre(oldGenre) {
    setAppliedIncludeGenres(
      appliedIncludeGenres.filter((genre) => genre.id != oldGenre.id)
    );
    setIncludeGenres(
      includeGenres.map((currentGenre) =>
        currentGenre.id === oldGenre.id
          ? { ...currentGenre, isApplied: false }
          : { ...currentGenre }
      )
    );
  }

  function removeExcludeGenre(oldGenre) {
    setAppliedExcludeGenres(
      appliedExcludeGenres.filter((genre) => genre.id != oldGenre.id)
    );
    setExcludeGenres(
      excludeGenres.map((currentGenre) =>
        currentGenre.id === oldGenre.id
          ? { ...currentGenre, isApplied: false }
          : { ...currentGenre }
      )
    );
  }

  function addAppliedType(newType) {
    setAppliedTypes([newType, ...appliedTypes]);
    setTypes(
      types.map((currentType) =>
        currentType.id === newType.id
          ? { ...currentType, isApplied: true }
          : { ...currentType }
      )
    );
  }

  function removeAppliedType(oldType) {
    setAppliedTypes(
      appliedTypes.filter((currentType) => currentType.id != oldType.id)
    );
    setTypes(
      types.map((currentType) =>
        currentType.id === oldType.id
          ? { ...currentType, isApplied: false }
          : { ...currentType }
      )
    );
  }

  function addAppliedState(newState) {
    setAppliedStates([newState, ...appliedStates]);
    setStates(
      states.map((currentState) => {
        return currentState.id === newState.id
          ? { ...currentState, isApplied: true }
          : { ...currentState };
      })
    );
  }

  function removeAppliedState(oldState) {
    setAppliedStates(
      appliedStates.filter((currentState) => currentState.id !== oldState.id)
    );
    setStates(
      states.map((currentState) => {
        return currentState.id === oldState.id
          ? { ...currentState, isApplied: false }
          : { ...currentState };
      })
    );
  }

  function applySort(newSort) {
    setAppliedSort(newSort);
    setSorts(
      sorts.map((currentSort) => {
        return currentSort.id === newSort.id
          ? { ...currentSort, isApplied: true }
          : { ...currentSort, isApplied: false };
      })
    );
  }

  useEffect(() => {
    fetch("http://localhost:8081/api/public/anime-search/filter-object")
      .then((result) => result.json())
      .then((filtersObject) => {
        setIncludeGenres(
          filtersObject.genres.map((currentGenre) => {
            return { ...currentGenre, isApplied: false };
          })
        );
        setExcludeGenres(
          filtersObject.genres.map((currentGenre) => {
            return { ...currentGenre, isApplied: false };
          })
        );
        setTypes(
          filtersObject.types.map((currentType) => {
            return { ...currentType, isApplied: false };
          })
        );
        setStates(
          filtersObject.states.map((currentState) => {
            return { ...currentState, isApplied: false };
          })
        );
        setSorts(
          filtersObject.sorts.map((currentSort) => {
            return { ...currentSort, isApplied: false };
          })
        );
      })
      .catch((error) => {
        console.log(error);
        setIncludeGenres([]);
        setTypes([]);
        setStates([]);
        setSorts([]);
      });
  }, []);

  return (
    <div className="filter-box">
      <h1 className="filter-header">ФИЛЬТР АНИМЕ</h1>

      {/* Выбрать жанры */}
      <FilterItemGenres
        needAdd={true}
        genres={includeGenres}
        appliedGenres={appliedIncludeGenres}
        removeGenre={removeIncludeGenre}
      >
        <GenresDropdownMultiMenu
          genres={includeGenres}
          addGenre={addIncludeGenre}
        />
      </FilterItemGenres>

      {/* Убрать жанры */}
      <FilterItemGenres
        needAdd={false}
        genres={excludeGenres}
        appliedGenres={appliedExcludeGenres}
        removeGenre={removeExcludeGenre}
      >
        <GenresDropdownMultiMenu
          genres={excludeGenres}
          addGenre={addExcludeGenre}
        />
      </FilterItemGenres>

      {/* Тип аниме */}
      <FilterItemTypes
        types={types}
        appliedTypes={appliedTypes}
        removeAppliedType={removeAppliedType}
      >
        <TypesDropdownMenu types={types} addAppliedType={addAppliedType} />
      </FilterItemTypes>

      {/* Статус аниме */}
      <FilterItemStates
        states={states}
        appliedStates={appliedStates}
        removeAppliedState={removeAppliedState}
      >
        <StatesDropdownMenu states={states} addAppliedState={addAppliedState} />
      </FilterItemStates>

      <FilterItemYear setYearFrom={setYearFrom} setYearTo={setYearTo} />

      {/* Сортировать по */}
      <FilterItemSortBy sorts={sorts} appliedSort={appliedSort}>
        <SortsDropdownMenu sorts={sorts} applySort={applySort} />
      </FilterItemSortBy>

      <FilterItemWhoWatched />

      {/* Убрать просмотренное */}
      <div className="filter-item">
        <div className="checkbox-filter-item">
          <button
            className="filter-checkbox"
            style={
              excludeWatched === true
                ? { backgroundColor: "#d72323" }
                : { backgroundColor: "white" }
            }
            onClick={() => setExcludeWatched(!excludeWatched)}
          ></button>
          <h1 className="filter-checkbox-label">Убрать просмотренное</h1>
        </div>
      </div>

      <Link to={"/anime"}>
        <button
          className="apply-filter-button"
          onClick={() => {
            props.setFilterForAppliedFilters(
              appliedIncludeGenres.map((item) => item.id),
              appliedExcludeGenres.map((item) => item.id),
              appliedTypes.map((item) => item.id),
              appliedStates.map((item) => item.id),
              yearFrom,
              yearTo
            );
            props.setPageNumber(1);
          }}
        >
          ПРИМЕНИТЬ
        </button>
      </Link>
    </div>
  );
}

export default FilterBox;
