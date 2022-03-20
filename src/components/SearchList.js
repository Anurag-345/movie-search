
import MovieCard from "./MovieCard";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";


const SearchList = () => {

  
const movies = useSelector((reduxStore) => {
  return reduxStore.apiData;
});

  return (
    <>
     
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }}
      >
        {movies?.map((singleMovie, idx) => {
          return (
            <Grid item key={idx}>
              <MovieCard data={singleMovie} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default SearchList;
