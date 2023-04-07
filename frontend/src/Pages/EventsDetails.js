import { json, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";
const EventsDetailsPage = () => {
  const data = useRouteLoaderData("event-detail");
  // const data = useLoaderData();
  const event = data.event;
  return (
    <>
      <EventItem event={event} />
    </>
  );
};

export async function loader({ request, params }) {
  const Id = params.eventId;
  console.log(`Event Id ${Id}`);
  const response = await fetch(`http://localhost:8080/events/${Id}`);
  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event" },
      { status: 500 }
    );
  } else {
    return response;
  }
}

export default EventsDetailsPage;
