import { useLocation } from "react-router-dom";
import Content from "../components/content";
import Cast from "../components/cast";

const MovieDetail = () => {
  const { state } = useLocation();


  return (
    <>
    <Content url={`/movie/${state.id}?language=ko-KR&page=1`}/>
    <Cast movieId={state.id}/>
    </>
  )
}

export default MovieDetail;

