"use client";
import Loader from "./loader/loader";
import UserInput from "./userInput/userInput";
import UserChooseSongs from "./userChooseSongs/userChooseSongs";

import { useState } from "react";
import { CurrentPage, sampleSongs } from "../utils/utils";
import Closure from "./closure/closure";

export default function Home() {
  
  const [currentPage, setCurrentPage] = useState(CurrentPage.USER_INPUT);
  
  const [loaderHeadline, setLoaderHeadline] = useState("");
  const [loaderRedirect, setLoaderRedirect] = useState(CurrentPage.USER_INPUT);

  const onUserInputSubmit = (userInput) => {
    setLoaderHeadline("searching for songs right for your mood...");
    setLoaderRedirect(CurrentPage.USER_CHOOSE_SONGS);
    setCurrentPage(CurrentPage.LOADER);
  }

  const onEscapeLoader = () => {
    setCurrentPage(loaderRedirect);
  }

  const onUserChooseSongsSubmit = (songs) => {
    setLoaderHeadline("downloading your choices to your machine...");
    setLoaderRedirect(CurrentPage.CLOSURE);
    setCurrentPage(CurrentPage.LOADER);
  }

  const onRestart = () => {
    setCurrentPage(CurrentPage.USER_INPUT);
  }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {currentPage === CurrentPage.LOADER && <Loader headline={loaderHeadline} escapeLoader={onEscapeLoader} />}
        {currentPage === CurrentPage.USER_INPUT && <UserInput onSubmit={onUserInputSubmit} />}
        {currentPage === CurrentPage.USER_CHOOSE_SONGS && <UserChooseSongs  songs={sampleSongs} onSubmit={onUserChooseSongsSubmit}/>}
        {currentPage === CurrentPage.CLOSURE && <Closure onRestart={onRestart} />}
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        @ Renana & Itamar || Experis SW82
      </footer>
    </div>
  );
}
