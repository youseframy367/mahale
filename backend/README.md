
## Owner Dashboard API

بعد تسجيل دخول Owner أو Sales باستخدام `/api/auth/login`، تُستخدم الـ endpoints التالية:

```text
GET    /api/admin/overview
GET    /api/admin/shops
POST   /api/admin/shops
PATCH  /api/admin/shops/:id
DELETE /api/admin/shops/:id
GET    /api/admin/ads
POST   /api/admin/shops/:shopId/ads
PATCH  /api/admin/ads/:id
DELETE /api/admin/ads/:id
GET    /api/admin/users
POST   /api/admin/users       # Owner فقط
DELETE /api/admin/users/:id   # Owner فقط
```

داشبورد Owner تستخدم هذه المسارات مباشرة، ولم تعد تحفظ المحلات أو الإعلانات أو أعضاء الفريق في `localStorage`.
