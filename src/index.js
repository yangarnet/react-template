import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// the glue of redux and react
import { Provider } from 'react-redux';
import rootStore from './store/root-store';

import App from './components/app';


// rootStore.dispatch(selectSubreddit('reactjs'))
// rootStore.dispatch(fetchPostIfNeeded('reactjs'))
//      .then(() => console.log('asycnaction:', rootStore.getState()))

ReactDOM.render(
    <BrowserRouter>
        <Provider store={rootStore}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

