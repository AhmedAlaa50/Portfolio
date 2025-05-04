import { Provider } from 'react-redux';
import { store } from './store/store';
import NavBar from './components/ui/NavBar';
import ScreenContainer from './components/ui/ScreenContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-custom-dark flex flex-col align-center">
        <NavBar />
        <ScreenContainer />
      </div>
    </Provider>
  );
}

export default App;
