import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./component/navbar";
import Custom404 from "./views/404";
import Hoome from "./views/Home";
import House from "./views/House";
import About from "./views/about";

export function Home() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Hoome} />
					<Route exact path="/house" component={House} />
					<Route exact path="/about" component={About} />
					<Route component={Custom404} />
				</Switch>
			</BrowserRouter>
		</>
	);
}
