import { Link, useLoaderData } from "react-router-dom";

function ActorCard() {
  const actorInfos = useLoaderData();
  console.info(actorInfos);
  return (
    <section className="actorList">
      {actorInfos.map((actor) => (
        <div className="actorCard" key={actor.id}>
          <h2>{actor.name}</h2>
          <Link to={`/actors/${actor.id}`}>
            <img
              className="movieCardContent"
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}&language=fr-FR`}
              alt={actor.name}
            />
          </Link>
        </div>
      ))}
    </section>
  );
}

export default ActorCard;
