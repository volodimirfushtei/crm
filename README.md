# CRM Dashboard (Next.js + Express + MongoDB)

🔥 Сучасна CRM система для управління компаніями, акціями, категоріями та статистикою. Підтримує адмін-панель, REST API
та інтеграцію з базою даних MongoDB.

## ⚙️ Технології

- **Frontend**: Next.js 15 (App Router), React, Tailwind CSS
- **Backend**: Express.js + MongoDB
- **База даних**: MongoDB Atlas / local MongoDB
- **API**: REST (Node.js + Express)
- **Стейт**: Zustand / Redux Toolkit
- **Форми**: Formik + Yup
- **Клієнтський HTTP**: `fetch` / React Query
- **Карта**: React Leaflet

---

## 🧱 Структура проєкту

crm/
├── app/ # Next.js App Router
│ ├── (admin)/ # Admin-панель
│ │ ├── dashboard/
│ │ └── companies/
│ ├── components/ # UI-компоненти
│ ├── lib/ # API-клієнт, утиліти
│ └── styles/
├── backend/ # Express-сервер
│ ├── models/ # Mongoose схеми
│ ├── routes/ # API маршрути
│ └── server.js # Точка входу
├── public/
├── .env.local # ENV-змінні
├── README.md
└── package.json

🌐 API Маршрути (Express)

Метод URL Опис
GET /api/companies Отримати всі компанії
POST /api/companies Додати нову компанію
DELETE /api/companies/:id Видалити компанію
GET /api/promotions Отримати всі акції
POST /api/promotions Додати акцію
DELETE /api/promotions/:id Видалити акцію
GET /api/categories Отримати категорії
GET /api/countries Отримати країни
GET /api/summary-stats Отримати зведену статистику
GET /api/summary-sales Отримати зведені продажі

🖼 UI Можливості

📊 Dashboard з картками (статистика)
🏢 Менеджмент компаній
💰 Список акцій/видалення акцій
🌍 Інтерактивна карта країн
✅ Пошук / фільтрація компаній