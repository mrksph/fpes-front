import logo from './logo.svg';
import './App.css';
import {getAllUsers} from "./services/UserService";

function App() {

    const allUsers = (e) => {
        getAllUsers().then(response => {
            console.log(response)
        });
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                    <button onclick={allUsers()}>boton</button>
                </a>
            </header>
            <table></table>
        </div>
    );
}

export default App;
