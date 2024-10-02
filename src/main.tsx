import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SignInSide from './SignInSide.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SignInSide />
  </StrictMode>,
)
