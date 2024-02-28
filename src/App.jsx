
import {Header} from './Containers/Header/Header.jsx'
import {Main} from './Containers/Main/Main.jsx'
import {Sidebar} from './Containers/Sidebar/Sidebar.jsx'
import {Footer} from './Containers/Footer/Footer.jsx'


function App() {

  return (
    <>
      <div className="container">
        <Header />
        <Main />
        <Sidebar />
        <Footer />
      </div>
    </>
  )
}

export default App
