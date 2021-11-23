import './styles/app.scss';
import { AppRouter } from "./AppRouter";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <div className="app">
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </div>
  );
}

export default App;
