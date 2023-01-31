import GoogleSuggestions from "./components/googlesuggestions";
import "./App.css";
const suggestions = [
  {
    id: 0,
    search: "Price of Ethereum",
  },
  {
    id: 1,
    search: "Oculus Quest 2 specs",
  },
  {
    id: 2,
    search: "Tesla Shara Price",
  },
  {
    id: 3,
    search: "Latest trends in AI",
  },
];

const App = () => (
  <div className="main">
    <GoogleSuggestions suggests={suggestions} />
  </div>
);

export default App;
