import "./App.css";
import UsersList from "./components/UsersList";

function App() {
  return (
    <div className="container mx-auto">
      <h1 className="font-mono text-center mt-3 text-4xl font-bold">PHOTO ALBUM</h1>
      <UsersList />
    </div>
  );
}

export default App;
