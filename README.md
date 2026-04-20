# Pentagone Formations

Monorepo simple avec :

- `frontend/` : Next.js + TypeScript + Tailwind CSS
- `backend/` : Node.js + Express API REST

## Lancer en local

### Frontend
```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```

### Backend
```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

## Déploiement conseillé

- Frontend sur Vercel
- Backend sur Render / Railway / VPS
- Domaine principal sur le frontend
- Sous-domaine `api.` sur le backend

Exemple :

- `https://pentagone-formations.com` -> frontend
- `https://www.pentagone-formations.com` -> frontend
- `https://api.pentagone-formations.com` -> backend

## Identifiants admin mock

- Email : `admin@pentagone-formations.com`
- Mot de passe : `admin123`

## Notes

- Le frontend fonctionne même sans API grâce aux mocks.
- Le backend utilise une base en mémoire pour démarrer rapidement.
- Le frontend lit `NEXT_PUBLIC_API_URL`.
- Le backend expose les endpoints demandés dans le brief.
