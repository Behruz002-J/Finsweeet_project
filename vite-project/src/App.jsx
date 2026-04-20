import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Header from './components/header/Header';
import Main from './components/Main/main';
import Expert from './components/Expertice_section/expert';
import Service from './components/Services/service';

createRoot(document.getElementById('root')).render(
  <StrictMode>
<Header />
<Main />
<Expert />
<Service />
  </StrictMode>,
)
