import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './components/App/App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import './styles/variables.module.css'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
    
  </BrowserRouter>
)
