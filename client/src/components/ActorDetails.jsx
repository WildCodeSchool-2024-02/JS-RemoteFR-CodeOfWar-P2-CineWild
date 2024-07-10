import { useLoaderData } from "react-router-dom";

function ActorDetails() {
  const actorInfo = useLoaderData();
  console.info(actorInfo);

  return (
    <>
      <h1>info sur les acteurs</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500/${actorInfo.profile_path}&language=fr-FR`}
        alt={actorInfo.name}
      />
    </>
  );
}

export default ActorDetails;
