import { MigrationInterface, QueryRunner } from 'typeorm'

export class Initial1710000000000 implements MigrationInterface {
  name = 'Initial1710000000000'
  async up(q: QueryRunner) {
    await q.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`)
    await q.query(`CREATE TYPE admin_role AS ENUM ('owner','sales')`)
    await q.query(`CREATE TYPE ad_status AS ENUM ('draft','active','paused','expired')`)
    await q.query(`CREATE TABLE admin_users (id uuid PRIMARY KEY DEFAULT uuid_generate_v4(), name varchar(150) NOT NULL, email varchar(255) UNIQUE NOT NULL, password_hash text NOT NULL, role admin_role NOT NULL DEFAULT 'sales', is_active boolean NOT NULL DEFAULT true, created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now())`)
    await q.query(`CREATE TABLE shops (id uuid PRIMARY KEY DEFAULT uuid_generate_v4(), name varchar(200) NOT NULL, slug varchar(220) UNIQUE NOT NULL, location varchar(255), phone varchar(30), category varchar(100), description text, logo_url text, cover_url text, is_active boolean NOT NULL DEFAULT true, created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now())`)
    await q.query(`CREATE TABLE shop_accounts (id uuid PRIMARY KEY DEFAULT uuid_generate_v4(), email varchar(255) UNIQUE NOT NULL, password_hash text NOT NULL, shop_id uuid NOT NULL REFERENCES shops(id) ON DELETE CASCADE, is_active boolean NOT NULL DEFAULT true, last_login_at timestamptz, created_at timestamptz NOT NULL DEFAULT now())`)
    await q.query(`CREATE INDEX idx_shop_accounts_shop_id ON shop_accounts(shop_id)`)
    await q.query(`CREATE TABLE products (id uuid PRIMARY KEY DEFAULT uuid_generate_v4(), shop_id uuid NOT NULL REFERENCES shops(id) ON DELETE CASCADE, name varchar(200) NOT NULL, slug varchar(220) NOT NULL, price numeric(12,2) NOT NULL, description text, image_url text, available boolean NOT NULL DEFAULT true, created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now())`)
    await q.query(`CREATE INDEX idx_products_shop_id ON products(shop_id)`)
    await q.query(`CREATE TABLE sponsored_ads (id uuid PRIMARY KEY DEFAULT uuid_generate_v4(), shop_id uuid NOT NULL REFERENCES shops(id) ON DELETE CASCADE, title varchar(255) NOT NULL, description text NOT NULL, phone varchar(30), image_url text, status ad_status NOT NULL DEFAULT 'draft', starts_at timestamptz, ends_at timestamptz, created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now())`)
    await q.query(`CREATE INDEX idx_ads_shop_id ON sponsored_ads(shop_id)`)
  }
  async down(q: QueryRunner) { await q.query(`DROP TABLE IF EXISTS sponsored_ads, products, shop_accounts, shops, admin_users`); await q.query(`DROP TYPE IF EXISTS ad_status, admin_role`) }
}
