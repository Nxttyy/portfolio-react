import MediaCard from "./MediaCard";

function Communities() {
  return (
    <div className="w-full">
      <p className="text-start mx-10 my-10 font-extrabold text-5xl">
        Communities
      </p>
      <div className="flex flex-wrap m-5 text-center w-full">
        <MediaCard />
        <MediaCard />
      </div>
    </div>
  );
}

export default Communities;
