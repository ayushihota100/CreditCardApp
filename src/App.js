import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";
import SearchComp from "./components/SearchComp";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

	return (
		<>
			<BrowserRouter>
				<div style={{
					display: "flex",
					background: 'black',
					
				}}>
					<div style={{ margin: '5px', fontSize: '40px' }}>
						<NavLink style={{textDecoration: 'none', color: 'white'} } to="/" >
							Credit Card 
						</NavLink>
					</div>
          <div style={{ margin: '10px', fontSize: '20px', padding: '20px' }}>
						<NavLink style={{textDecoration: 'none'}} to="/CreateAccount" >
							Create Account
						</NavLink>
					</div>
					<div style={{ margin: '10px', fontSize: '20px', padding: '20px' }}>
						<NavLink style={{textDecoration: 'none'}} to="/SearchComp" >
							Search
						</NavLink>
					</div>
					<div style={{ margin: '10px', fontSize: '20px', padding: '20px' }}>
						<NavLink style={{textDecoration: 'none'}} to="/SearchComp" >
							View Customers
						</NavLink>
					</div>
					
					
				</div>
				<Routes>
					<Route exact path="/" element={<Home />} />
          <Route exact path="/albums" element={<CreateAccount/>} />
					<Route exact path="/posts" element={<SearchComp/>} />
				
					
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;


