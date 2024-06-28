import {
	Navigate,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import Layout from "../layout/Layout";
import QuoteList from "../components/quote/QuoteList";
import QuoteForm from "../components/quote/QuoteForm";

const AppRoute = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,

			children: [
				{
					path: "/",
					element: <Navigate to="/quotes" />,
				},

				{
					path: "/quotes",
					element: <QuoteList />,
				},

				{
					path: "/add-quote",
					element: <QuoteForm />,
				},
			],
		},
	]);
	return <RouterProvider router={router} />;
};

export default AppRoute;
