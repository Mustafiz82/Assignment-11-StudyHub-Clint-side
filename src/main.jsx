import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import router from "./Route/Route.jsx";
import { RouterProvider } from "react-router-dom";
import Context from "./Context/Context.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClint = new QueryClient()


ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClint}>
    <Context>
			{" "}
			<RouterProvider router={router} />
		</Context>
    </QueryClientProvider>
	</React.StrictMode>
);
