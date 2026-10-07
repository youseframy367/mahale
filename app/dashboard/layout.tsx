import { DashboardDataProvider } from '@/components/dashboard/dashboard-data'
import { DashboardShell } from '@/components/dashboard/dashboard-shell'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <DashboardDataProvider><DashboardShell>{children}</DashboardShell></DashboardDataProvider>
}
