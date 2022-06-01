import './App.css'
import Layout from './components/Layout/Layout'
import { Routes, Route } from 'react-router-dom'
import routes from './routes'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <Layout>
      <ToastContainer />
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={<route.component />} key={route.path} />
        ))}
      </Routes>
    </Layout>
  )
}

export default App
