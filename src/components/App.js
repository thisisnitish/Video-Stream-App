import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
    return (
        <div>
            Page 1
            <Link to="/pagetwo">Navigate to Page 2</Link>
        </div>
    );
};

//Link is almost like the href but it does not load the page again and again
const PageTwo = () => {
    return(
         <div>
            Page 2
            <button>Click Me</button>
            <Link to="/">Navigate to Page 2</Link>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <BrowserRouter>
            <div>
                <Route path="/" exact component={PageOne} />
                <Route path="/pagetwo" component={PageTwo} />
            </div>
            </BrowserRouter>
        </div>
    );
};

export default App;