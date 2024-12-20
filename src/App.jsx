import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './App.css'
import HomePage from './components/HomePage';
import EntryForm from './components/EntryForm';

function App() {

  return (
    <>
       <Provider store={store}>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/add" element={<EntryForm />} />
              <Route path="/edit/:id" element={<EntryForm />} />
            </Routes>
          </div>
        </Router>
       </Provider>
    </>
  )
}

export default App
