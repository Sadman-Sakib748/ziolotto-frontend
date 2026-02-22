import Header from '@/components/dashboard/Header'
import LeftSidebar from '@/components/dashboard/LeftSidebar'
import Footer from '@/components/dashboard/MainContent/Footer'
import TopRated from '@/components/dashboard/MainContent/TopRated'
import RightSidebar from '@/components/dashboard/RightSidebar'
import { AuthProvider } from '@/context/AuthContext'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <div className="page-wrapper a-cursor">
        <Header />

        <div className="affiliate-wrapper page-wrapper a-cursor mt-60">
          <div className="dash-layout-wrapper p-4">
            <div className="flex-shrink-0 width-280-px d-xl-block d-none"></div>

            <LeftSidebar />

            <main className="content-area page-wrapper a-cursor flex-grow-1 px-xl-0 px-4">
              {children}
            </main>

            <RightSidebar />
          </div>
          <TopRated />
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </AuthProvider>
  )
}