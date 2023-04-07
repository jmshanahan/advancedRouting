import { Fragment } from "react";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
const ErrorPage = () => {
  const error = useRouteError();
  let title = "An Error Occured";
  let message = "Something went wrong";
  //   if (error.status === 500) {
  //     message = JSON.parse(error.data).message;
  //   }
  // if you use react router dom json function you can simplify your code to this. No need to use stringify
  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 404) {
    title = "Not Found";
    message = "Could not find resource or page";
  }
  return (
    <Fragment>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </Fragment>
  );
};
export default ErrorPage;
