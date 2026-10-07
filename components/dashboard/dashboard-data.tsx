'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { initialDashboardShops, initialSponsoredAds, initialTeamUsers, type DashboardShop, type SponsoredAd, type TeamUser } from '@/data/dashboard'

type DashboardData = { shops: DashboardShop[]; ads: SponsoredAd[]; teamUsers: TeamUser[]; addShop: (shop: DashboardShop) => void; updateShop: (shop: DashboardShop) => void; deleteShop: (id: number) => void; addAd: (ad: SponsoredAd) => void; updateAd: (ad: SponsoredAd) => void; deleteAd: (id: number) => void; addTeamUser: (user: TeamUser) => void; deleteTeamUser: (id: number) => void }
const Context = createContext<DashboardData | null>(null)

export function DashboardDataProvider({ children }: { children: React.ReactNode }) {
  const [shops, setShops] = useState(initialDashboardShops)
  const [ads, setAds] = useState(initialSponsoredAds)
  const [teamUsers, setTeamUsers] = useState(initialTeamUsers)
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { const savedShops = localStorage.getItem('mahally-dashboard-shops'); const savedAds = localStorage.getItem('mahally-dashboard-ads'); const savedUsers = localStorage.getItem('mahally-dashboard-users'); if (savedShops) setShops(JSON.parse(savedShops)); if (savedAds) setAds(JSON.parse(savedAds)); if (savedUsers) setTeamUsers(JSON.parse(savedUsers)) }, [])
  const saveShops = (value: DashboardShop[]) => { setShops(value); localStorage.setItem('mahally-dashboard-shops', JSON.stringify(value)) }
  const saveAds = (value: SponsoredAd[]) => { setAds(value); localStorage.setItem('mahally-dashboard-ads', JSON.stringify(value)) }
  const saveTeamUsers = (value: TeamUser[]) => { setTeamUsers(value); localStorage.setItem('mahally-dashboard-users', JSON.stringify(value)) }
  const value = useMemo(() => ({ shops, ads, teamUsers, addShop: (shop: DashboardShop) => saveShops([...shops, shop]), updateShop: (shop: DashboardShop) => saveShops(shops.map((item) => item.id === shop.id ? shop : item)), deleteShop: (id: number) => saveShops(shops.filter((item) => item.id !== id)), addAd: (ad: SponsoredAd) => saveAds([...ads, ad]), updateAd: (ad: SponsoredAd) => saveAds(ads.map((item) => item.id === ad.id ? ad : item)), deleteAd: (id: number) => saveAds(ads.filter((item) => item.id !== id)), addTeamUser: (user: TeamUser) => saveTeamUsers([...teamUsers, user]), deleteTeamUser: (id: number) => saveTeamUsers(teamUsers.filter((item) => item.id !== id || item.role === 'owner')) }), [shops, ads, teamUsers])
  return <Context.Provider value={value}>{children}</Context.Provider>
}
export function useDashboardData() { const value = useContext(Context); if (!value) throw new Error('DashboardDataProvider is missing'); return value }
