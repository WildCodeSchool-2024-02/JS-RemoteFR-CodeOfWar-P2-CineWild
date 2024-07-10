import { useLoaderData } from "react-router-dom";
import "../styles/actorList.css";

function ActorList() {
  const actorInfos = useLoaderData();
  console.info(actorInfos);

  return (
    <>
      <h1>Acteurs Populaires</h1>
      <section className="actorList">
        {actorInfos.map((actor) => (
          <div className="actorCard" key={actor.id}>
            <h2>{actor.name}</h2>
            <img
              className="actorCardContent"
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}&language=fr-FR`}
              alt={actor.name}
            />
          </div>
        ))}
      </section>
    </>
  );
}
export default ActorList;
