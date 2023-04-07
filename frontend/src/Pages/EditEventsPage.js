import { useLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";
const EditEventsPage = () => {
  const data = useLoaderData();
  const { event } = data;
  return <EventForm event={event} />;
};
export default EditEventsPage;
