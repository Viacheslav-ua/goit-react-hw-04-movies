import React from "react";
import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Container from "./components/generic/Container";
import Navigation from "./components/Navigation";

const HomePage = lazy(() => import("./views/HomePage"));
const MovieDetailsPage = lazy(() => import("./views/MovieDetailsPage"));
const MoviesPage = lazy(() => import("./views/MoviesPage"));

const App: React.FC = () => {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<h1>LOAD...</h1>}>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies" exact>
          <MoviesPage />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
      </Switch>
      </Suspense>
      <ToastContainer autoClose={3000} />
    </Container>
  );
};

export default App;
