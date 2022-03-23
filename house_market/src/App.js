import logo from './logo.svg';
import { Provider } from 'react-redux';

import './App.css';

import { store } from './store/store'
import { Rutas } from './routes/rutas';



function App() {
  return (
    <Provider store={ store }>
      <Rutas />
    </Provider>
    
  );
}

export default App;
