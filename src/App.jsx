import React, { Component } from 'react'
import logo from './logo.svg'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Button from './components/Button'
import './App.css'
import { store, cart } from './data'
import Store from './views/Store'
import Nav from './components/Nav'

class App extends Component {
	state = {
		storeData: [],
		cartData: []
	}

	componentDidMount() {
		this.setState({
			storeData: store,
			cartData: cart
		})
	}

	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Nav>
						<Route
							exact
							path="/"
							render={() => <Store store={this.state.storeData} />}
						/>
					</Nav>
				</Switch>
			</BrowserRouter>
		)
	}
}

export default App
