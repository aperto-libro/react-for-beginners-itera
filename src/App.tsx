import './App.css';
import logo from '../src/logo.svg';
import info from './info.json';
import { Footer } from './Footer';
import './CustomStyles.css';

const Header = () => {
  return (
    <header>
      <h2 className="header">A little information</h2>
    </header>
  );
};

const Logo = () => {
  return <img src={logo} alt="Logo" className="logo" />;
};

const Info = () => {
  return (
    <ul className="list">
      <li className="list-item">
        <span>FirstName: </span> {info.name}
      </li>
      <li className="list-item">
        <span>Age: </span> {info.age}
      </li>
      <li className="list-item">
        <span>Bio: </span> {info.bio}
      </li>
      <li className="list-item">
        <span>Creetings: </span> {info.greeting}
      </li>
    </ul>
  );
};

const App = () => (
  <div className="App">
    <h1 className="title">Hello, people!</h1>
    <Header />
    <Logo />
    <Info />
    <Footer copyright="&copy; Made in Ukraine" />
  </div>
);

export default App;
