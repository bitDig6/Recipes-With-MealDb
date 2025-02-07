import { Outlet } from 'react-router'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
