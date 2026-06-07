import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"

const HomePage = lazy(() => import("../pages/HomePage"))

function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default AppRoutes
