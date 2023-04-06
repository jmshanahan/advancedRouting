import { useParams } from "react-router-dom";
const EventsDetailsPage = () => {
  const parms = useParams();
  return (
    <>
      <h1>Events Details Page</h1>
      <p>{parms.eventId}</p>
    </>
  );
};
export default EventsDetailsPage;
