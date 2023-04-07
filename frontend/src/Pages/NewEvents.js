import EventForm from "../components/EventForm";
import { json, redirect } from "react-router-dom";
const NewEventsPage = () => {
  return <EventForm />;
};

export async function action({ request, params }) {
  const data = await request.formData();

  const extractData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };
  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(extractData),
  });
  if (!response.ok) {
    throw json({ message: "Could not save event joe" }, { status: 500 });
  }
  return redirect("/events");
}

export default NewEventsPage;
