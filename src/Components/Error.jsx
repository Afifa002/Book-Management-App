import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <h1>Oops! An error has been found.</h1>
      <h2>{error.status}</h2>
    </>
  );
}
export default Error;
