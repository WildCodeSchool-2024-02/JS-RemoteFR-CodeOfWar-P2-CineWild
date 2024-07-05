import { useLoaderData } from "react-router-dom";
import "../styles/actorList.css";

function ActorList() {
  const actorInfos = useLoaderData();
  console.info(actorInfos);

  return (
    <section className="actorList">
      {actorInfos.map((actor) => (
        <div className="actorCard" key={actor.id}>
          <h1>{actor.name}</h1>
          <img
            className="movieCardContent"
            src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}&language=fr-FR`}
            alt={actor.name}
          />
        </div>
      ))}
    </section>
  );
}
export default ActorList;
