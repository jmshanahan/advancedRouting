import { json, useRouteLoaderData, redirect } from "react-router-dom";
import EventItem from "../components/EventItem";
const EventsDetailsPage = () => {
  const data = useRouteLoaderData("event-detail");
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

export async function action({ params: { eventId }, request: { method } }) {
  const response = await fetch(`http://localhost:8080/events/${eventId}`, {
    method,
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw json({ message: "Could not delete event" }, { status: 500 });
  }

  return redirect("/events");
}

export default EventsDetailsPage;
