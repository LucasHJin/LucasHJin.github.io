import { Suspense } from 'react'
import PortfolioPage from './PortfolioPage'

export default function Page() {
  return (
    <Suspense fallback={<div>Loading portfolio…</div>}>
      <PortfolioPage />
    </Suspense>
  )
}
