import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Login, { loader as loginLoader } from './pages/Login'
import Vans, { loader as vansLoader } from './pages/Vans/Vans'
import VanDetails, { loader as vanDetailsLoader } from './pages/Vans/VanDetails'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostVans, { loader as hostVansLoader } from './pages/Host/HostVans'
import HostVanDetails, {
  loader as hostVanDetailsLoader,
} from './pages/Host/HostVanDetails'
import HostVanPhotos from './pages/Host/HostVanPhotos'
import HostVanPricing from './pages/Host/HostVanPricing'
import HostVanInfo from './pages/Host/HostVanInfo'
import Layout from './components/Layout'
import HostLayout from './components/HostLayout'
import NotFound from './pages/NotFound'
import Error from './components/Error'
import { requireAuth } from './utils'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vans" element={<Vans />} loader={vansLoader} />
      <Route
        path="vans/:id"
        element={<VanDetails />}
        loader={vanDetailsLoader}
      />
      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async () => await requireAuth()}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async () => await requireAuth()}
        />
        <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
        <Route
          path="vans/:id"
          element={<HostVanDetails />}
          loader={hostVanDetailsLoader}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async () => await requireAuth()}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async () => await requireAuth()}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async () => await requireAuth()}
          />
        </Route>
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async () => await requireAuth()}
        />
      </Route>
      <Route path="login" element={<Login />} loader={loginLoader} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
)

function App() {
  return <RouterProvider router={router} />
}

export default App
