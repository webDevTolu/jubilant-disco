import "./App.css";
import Row from "./components/Row";
import requests from "./requests";

const App = () => {
  return (
    <div className="App">
      <h1>Netflix Clone</h1>
      <Row
        title="Netflix originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
    </div>
  );
};

export default App;
