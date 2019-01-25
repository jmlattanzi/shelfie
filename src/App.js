import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import './App.css'

class App extends Component {
    render() {
        return (
            <Router>
                <div className='App'>
                    <Header />
                    {/* <Dashboard
                        inventory={this.state.inventory}
                        getData={this.getData}
                        getCurrentProduct={this.getCurrentProduct}
                    />
                    <Form
                        getData={this.getData}
                        currentProduct={this.state.currentProduct}
                    /> */}
                    <Switch>
                        <Route exact path='/' component={Dashboard} />
                        <Route path='/add' component={Form} />
                        <Route path='/edit/:id' component={Form} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App
