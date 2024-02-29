import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Vans, { loader as vansPageLoader } from './pages/Vans/Vans'
import VanDetail from './pages/Vans/VanDetail'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostVans from './pages/Host/HostVans'
import HostVanDetails from './pages/Host/HostVanDetails'
import HostVanPhotos from './pages/Host/HostVanPhotos'
import HostVanPricing from './pages/Host/HostVanPricing'
import HostVanInfo from './pages/Host/HostVanInfo'
import Layout from './components/Layout'
import HostLayout from './components/HostLayout'
import Error from './components/Error'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vans" element={<Vans />} loader={vansPageLoader} />
      <Route path="vans/:id" element={<VanDetail />} />
      <Route
        path="host"
        element={
          <HostLayout
            loader={async () => {
              return null
            }}
          />
        }
      >
        <Route
          index
          element={<Dashboard />}
          loader={async () => {
            return null
          }}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async () => {
            return null
          }}
        />
        <Route
          path="vans"
          element={<HostVans />}
          loader={async () => {
            return null
          }}
        />
        <Route
          path="vans/:id"
          element={
            <HostVanDetails
              loader={async () => {
                return null
              }}
            />
          }
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async () => {
              return null
            }}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async () => {
              return null
            }}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async () => {
              return null
            }}
          />
        </Route>
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
)

function App() {
  return <RouterProvider router={router} />
}

export default App
