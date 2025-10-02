"use client";
import Loader from "./loader/loader";
import UserInput from "./userInput/userInput";
import UserChooseSongs from "./userChooseSongs/userChooseSongs";

import { useState } from "react";
import { CurrentPage, sampleSongs } from "../utils/utils";
import Closure from "./closure/closure";
import IntroForm from "./introForm/introForm";
import { delayUntilRuntimeStage } from "next/dist/server/app-render/dynamic-rendering";
// import mainApi from "@/utils/mainApi";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(CurrentPage.SIGNUP);

  const [loaderHeadline, setLoaderHeadline] = useState("");
  const [loaderRedirect, setLoaderRedirect] = useState(CurrentPage.USER_INPUT);

  const [signupSuccess, setSignupSuccess] = useState(false);

  const onUserInputSubmit = (userInput) => {
    setLoaderHeadline("searching for songs right for your mood...");
    setLoaderRedirect(CurrentPage.USER_CHOOSE_SONGS);
    setCurrentPage(CurrentPage.LOADER);
  };

  const onEscapeLoader = () => {
    setCurrentPage(loaderRedirect);
  };

  const onUserChooseSongsSubmit = (songs) => {
    setLoaderHeadline("downloading your choices to your machine...");
    setLoaderRedirect(CurrentPage.CLOSURE);
    setCurrentPage(CurrentPage.LOADER);
  };

  const onRestart = () => {
    setCurrentPage(CurrentPage.USER_INPUT);
  };

  const onSignupSubmit = (email, password, name) => {
    // mainApi
    //   .signup(email, password, name)
    //   .then((res) => {
    //     if (res._id) {
    //       setSignupSuccess(true);
    //       setTimeout(2000);
    //       setCurrentPage(CurrentPage.USER_INPUT);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    setSignupSuccess(true);
    setTimeout(() => {
      setCurrentPage(CurrentPage.LOGiN);
    }, 2000);
  };

  const onLoginSubmit = () => {
    // MainApi.login();
    setTimeout(2000);
    setCurrentPage(CurrentPage.USER_INPUT);
  };

  const toggleIntroFormState = () => {
    if (currentPage === CurrentPage.SIGNUP) {
      setCurrentPage(CurrentPage.LOGIN);
    } else {
      setCurrentPage(CurrentPage.SIGNUP);
    }
  };

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {currentPage === CurrentPage.SIGNUP && (
          <IntroForm
            inputs={["email", "password", "name"]}
            buttonText={"Submit"}
            onSubmit={onSignupSubmit}
            relativePathText={"click to log in"}
            onRelativePathPress={toggleIntroFormState}
            headline={"Sign up now!"}
            signupSuccess={signupSuccess}
          />
        )}
        {currentPage === CurrentPage.LOGIN && (
          <IntroForm
            inputs={["email", "password"]}
            buttonText={"Submit"}
            onSubmit={onLoginSubmit}
            relativePathText={"click to sign up"}
            onRelativePathPress={toggleIntroFormState}
            headline={"Log in!"}
          />
        )}
        {currentPage === CurrentPage.LOADER && (
          <Loader headline={loaderHeadline} escapeLoader={onEscapeLoader} />
        )}
        {currentPage === CurrentPage.USER_INPUT && (
          <UserInput onSubmit={onUserInputSubmit} />
        )}
        {currentPage === CurrentPage.USER_CHOOSE_SONGS && (
          <UserChooseSongs
            songs={sampleSongs}
            onSubmit={onUserChooseSongsSubmit}
          />
        )}
        {currentPage === CurrentPage.CLOSURE && (
          <Closure onRestart={onRestart} />
        )}
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        @ Renana & Itamar || Experis SW82
      </footer>
    </div>
  );
}
