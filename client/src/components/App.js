import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamCreate from './Streams/streamCreate';
import StreamDelete from './Streams/streamDelete';
import StreamEdit from './Streams/streamEdit';
import StreamList from './Streams/streamList';
import StreamShow from './Streams/streamShow';
import Header from './header';
import history from '../history';
// const clientID='521685159768-iig3heb8noi59b1sotganqvih6vmc42g.apps.googleusercontent.com';

const App = () => {
    return(
        <div className= "ui container">
            <Router history = { history }>
            <div>
                <Header / >
                <Route path='/' exact component={StreamList} />
                <Route path='/streams/new' exact component={StreamCreate} />
                <Route path='/streams/edit/:id' exact component={StreamEdit} />
                <Route path='/streams/delete/:id' exact component={StreamDelete} />
                <Route path='/streams/show' exact component={StreamShow} />
            </div>
            </Router>
        </div>
    )
}

export default App;