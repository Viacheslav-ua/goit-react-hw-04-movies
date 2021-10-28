import React from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Container from "./components/generic/Container";
import Navigation from "./components/Navigation";
import HomePage from "./views/HomePage";
import MovieDetailsPage from "./views/MovieDetailsPage";
import MoviesPage from "./views/MoviesPage";
import NotFound from "./views/NotFound";

const App: React.FC = () => {
  return (
    <Container>
      <Navigation />

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

        <Route>
          <NotFound />
        </Route>
      </Switch>
      <ToastContainer autoClose={3000} />
    </Container>
  );
};

export default App;
