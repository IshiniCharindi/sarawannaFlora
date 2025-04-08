import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import store from './redux/store.tsx'
import { Provider } from 'react-redux'
import Loading from './component/Loading.tsx'
import { useSelector } from 'react-redux'
import { RootState } from './redux/store.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Loading/>
    <App />
  </Provider>

)
