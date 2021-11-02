import React from "react";
import { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Container from "./components/generic/Container";
import Navigation from "./components/Navigation";

const HomePage = lazy(() => import("./views/HomePage"));
const MovieDetailsPage = lazy(() => import("./views/MovieDetailsPage"));
const MoviesPage = lazy(() => import("./views/MoviesPage"));
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<h1>LOAD...</h1>}>
        <QueryClientProvider client={queryClient}>
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

            <Redirect to="/" />
          </Switch>
        </QueryClientProvider>
      </Suspense>
      <ToastContainer autoClose={4000} />
    </Container>
  );
};

export default App;
