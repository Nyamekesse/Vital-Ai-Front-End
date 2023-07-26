import { useState } from 'react'
import Loading from './components/Loading'
import { LogInPage, MainLayout, SignUpPage } from './pages'

function App() {
  const [open] = useState(false)
  // const handleClose = () => {
  //   setOpen(false)
  // }
  // const handleOpen = () => {
  //   setOpen(true)
  // }
  return (
    <div>
      <LogInPage />
      {/* <SignUpPage /> */}
      {/* <MainLayout /> */}
      {/* <Loading open={open} /> */}
    </div>
  )
}

export default App
