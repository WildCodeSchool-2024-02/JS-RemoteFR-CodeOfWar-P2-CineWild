// import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function ActorDetails() {
  const actorInfo = useLoaderData();
  console.info(actorInfo);

  return (
    <section>
      <h1>{actorInfo.name}</h1>
      <img
        className="movieCardContent"
        src={`https://image.tmdb.org/t/p/w500/${actorInfo.profile_path}&language=fr-FR`}
        alt={actorInfo.name}
      />
    </section>
  );
}
export default ActorDetails;
