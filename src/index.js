import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App/App'

class Index extends React.Component {
    render() {
        return (<div>
            <App />
            <h1>Hello there!</h1>
            
    </div>)
    }
}

ReactDOM.render(<Index />,
document.getElementById('root'));