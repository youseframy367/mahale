import 'reflect-metadata'
import * as bcrypt from 'bcrypt'
import dataSource from './data-source'
import { AdminRole, AdminUser } from '../auth/admin-user.entity'
import { ShopAccount } from '../auth/shop-account.entity'
import { Shop } from '../shops/shop.entity'

async function seed() {
  await dataSource.initialize()
  const admins = dataSource.getRepository(AdminUser)
  const shops = dataSource.getRepository(Shop)
  const accounts = dataSource.getRepository(ShopAccount)
  const owner = admins.create({ name: 'يُوسِف رامي', email: 'yousseframy@gmail.com', passwordHash: await bcrypt.hash('2005', 12), role: AdminRole.OWNER })
  await admins.upsert(owner, ['email'])
  let shop = await shops.findOneBy({ slug: 'ahmed-fashion' })
  if (!shop) { shop = await shops.save(shops.create({ name: 'أحمد فاشون', slug: 'ahmed-fashion', location: 'المنصورة، الدقهلية', phone: '01023522063', category: 'ملابس', description: 'ملابس رجالي وكاجوال بجودة مميزة وأسعار مناسبة.' })) }
  const account = accounts.create({ email: 'ahmed@example.com', passwordHash: await bcrypt.hash('Ahmad1234', 12), shopId: shop.id })
  await accounts.upsert(account, ['email'])
  await dataSource.destroy()
  console.log('Seed completed. Shop login: ahmed@example.com / Ahmad1234')
}
seed().catch(async error => { console.error(error); if (dataSource.isInitialized) await dataSource.destroy(); process.exit(1) })
