import { lazy, Suspense, useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Fullpage } from './layouts/Fullpage'
import { Dashboard } from './layouts/Dashboard'
import './style/main.css'
import { Backdrop } from '#components/Backdrop'
import { QueryClient, QueryClientProvider } from 'react-query'
import { MoralisProvider } from 'react-moralis'



const LazyDashboard = lazy(() => import('#pages/Dashboard'))
const LazyMarkets = lazy(() => import('#pages/Markets'))
const LazySeed = lazy(() => import('#pages/Seed'))
const LazyDeposit = lazy(() => import('#pages/Deposit'))
const LazyBorrow = lazy(() => import('#pages/Borrow'))
const LazyHomepage = lazy(() => import('#pages/HomePage'))
const LazyCareers = lazy(() => import('#pages/Careers'))
const LazyIdo = lazy(() => import('#pages/Ido'))

const queryClient = new QueryClient({})

function App() {

  return (
    
    <MoralisProvider 
    appId="UQavDN7gR438DjmQf1V6FhqpaqUtZk2h8Uux37RH"
    serverUrl="https://9jofns106tkh.usemoralis.com:2053/server"
  >
    <QueryClientProvider client={queryClient}>
      
          <Suspense fallback={<Backdrop />}> 
            <Routes>
              <Route element={< Fullpage />} > 
              <Route path="/" element={<LazyHomepage />} />  {/* modules: AccessTab -- UsedRatio */}
              <Route path="*" element={<Navigate to="/" />} />  {/* modules: AccessTab -- UsedRatio */}
              </Route>

              <Route element={< Dashboard />} >
              <Route path="/dashboard" element={<LazyDashboard />} />  {/* components: Title // modules: Tabs -- CardAsset */}
              <Route path="/markets" element={<LazyMarkets />} /> {/* components: Title */}
              <Route path="/deposit" element={<LazyDeposit />} /> {/* modules: AccessTab -- UsedRatio */}
              <Route path="/seed" element={<LazySeed />} /> {/* modules: AccessTab -- UsedRatio */}
              <Route path="/borrow" element={<LazyBorrow />} /> {/* modules: AccessTab -- UsedRatio */}
              <Route path="/careers" element={<LazyCareers />} /> {/* modules: AccessTab -- UsedRatio */}
              <Route path="/ido" element={<LazyIdo />} /> {/* modules: AccessTab -- UsedRatio */}
              </Route>
              
            </Routes>
          </Suspense>
   </QueryClientProvider>
   </MoralisProvider>

  )
}

export default App

