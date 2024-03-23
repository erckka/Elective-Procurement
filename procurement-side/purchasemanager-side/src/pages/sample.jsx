import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './global/Layout'
import Dashboard from './pages/Dashboard'
import MultiStepForm from './create-account-components/MultiStepForm'
import CreateEvent from './pages/CreateEvent'
import OnlineDiscipleship from './pages/OnlineDiscipleship'
import ManageAccount from './pages/ManageAccount'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="/create-event" element={<Layout />}>
          <Route index element={<CreateEvent />} />
        </Route>
        <Route path="/online-discipleship" element={<Layout />}>
          <Route index element={<OnlineDiscipleship />} />
        </Route>
        <Route path="/manage-account" element={<Layout />}>
          <Route index element={<ManageAccount />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
