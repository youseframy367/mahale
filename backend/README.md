# Mahally API

Backend مستقل داخل نفس الريبو، مبني باستخدام NestJS + TypeORM + PostgreSQL.

## التشغيل المحلي

```bash
cp .env.example .env
docker compose up -d postgres
npm install
npm run migration:run
npm run seed
npm run start:dev
```

السيرفر يعمل على `http://localhost:4000` والـ API prefix هو `/api`.

## الحسابات التجريبية بعد Seed

- Owner: `yousseframy@gmail.com` / `2005`
- Shop owner: `ahmed@example.com` / `Ahmad1234`

## Endpoints

```text
POST   /api/auth/login
GET    /api/shops/:id
PATCH  /api/shops/:id
GET    /api/shops/:shopId/products
POST   /api/shops/:shopId/products
PATCH  /api/shops/:shopId/products/:id
DELETE /api/shops/:shopId/products/:id
GET    /api/shops/:shopId/ads
POST   /api/shops/:shopId/ads
PATCH  /api/shops/:shopId/ads/:id
DELETE /api/shops/:shopId/ads/:id
```

كل المسارات الخاصة بالمحل محمية بـ JWT، وصاحب المحل لا يستطيع الوصول إلى `shopId` مختلف عن الموجود داخل الـ token.

## Production checklist

- استخدم `DATABASE_URL` من مزود PostgreSQL Production.
- ضع `JWT_SECRET` عشوائيًا طويلًا ولا تستخدم قيمة `.env.example`.
- اجعل `DB_SYNCHRONIZE=false` دائمًا في Production.
- شغّل `npm run migration:run` أثناء الـ deployment.
- شغّل `npm run seed` مرة واحدة فقط لإنشاء الحسابات الأولية، ثم غيّر كلمات المرور.
- اربط `NEXT_PUBLIC_API_URL` بعنوان API العام قبل بناء Next.js.
