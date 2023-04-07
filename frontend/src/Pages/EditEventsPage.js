// import { useLoaderData } from "react-router-dom";
// import EventForm from "../components/EventForm";
// const EditEventsPage = () => {
//   //const data = useLoaderData();
//   const data = useLoaderData();

//   const event = data.event;
//   return <EventForm event={event} />;
// };
// export default EditEventsPage;

import { useRouteLoaderData } from "react-router-dom";

import EventForm from "../components/EventForm";

function EditEventPage() {
  const data = useRouteLoaderData("event-detail");

  return <EventForm event={data.event} />;
}

export default EditEventPage;
