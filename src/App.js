import Routes from './components/Routes';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </div>
  );
}

export default App;
