import React, { useContext } from 'react'

/// React router dom
import { Routes, Route } from 'react-router-dom'

/// Css
import './App.css'
/// Layout
import Layout from './components/Layout'

import Dashboard from './pages/Dashboard'

const App = () => {
  const routes = [{ url: '', component: Dashboard }]

  return (
    <>
      <Layout>
        <div style={{ minHeight: window.screen.height - 60 }}>
          <Routes>
            {routes.map((data, i) => (
              <Route
                key={i}
                path={`/${data.url}`}
                element={<data.component />}
              />
            ))}
          </Routes>
        </div>
      </Layout>
    </>
  )
}

export default App
