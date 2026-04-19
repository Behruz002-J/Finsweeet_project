import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Header from './components/header/Header';
import Main from './components/Main/main';
createRoot(document.getElementById('root')).render(
  <StrictMode>
<Header />
<Main />
  </StrictMode>,
)
