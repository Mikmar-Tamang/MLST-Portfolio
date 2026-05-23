import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"

const HomePage = lazy(() => import("../pages/HomePage"))
const Login = lazy(() => import("../pages/Login"))
const Register = lazy(() => import("../pages/Register"))

function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default AppRoutes
