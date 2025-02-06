# creating frontend:

```javascript
//creating inside frontend folder
npx create-react-app frontend --template typescript

npm i axios --save
npm i --save-dev @types/axios

npm i dotenv --save

npm i -D tailwindcss
npx tailwindcss init
```

Minimize Backend Latency:

Cold Starts: Free tiers on Render may introduce cold starts if the service scales down after inactivity. Consider using a service that pings your backend periodically to keep it “warm,” or upgrade to a tier that reduces cold start times.
Optimize Queries: Create indexes on frequently queried columns and ensure you’re only returning the data you need (avoid SELECT \* if not necessary).
Reduce Round Trips: Instead of multiple endpoints, consider returning all the essential data in one or fewer endpoints to cut down on multiple fetches.

Incremental Loading (Lazy Loading):
If you have multiple sections (skills, articles, challenges), consider loading only the most critical data initially and lazy-loading the rest as the user scrolls or interacts. This reduces the initial data load over slow networks.

Compression and Minimal Overhead:
Make sure your API responses are GZIP or Brotli compressed. Most .NET setups enable compression easily and will speed up data transfer over slow connections.

Check Your Asset Sizes and Build:
On the frontend, ensure that your React build is optimized and that you’re not loading unnecessarily large images, fonts, or scripts. Smaller frontend bundles mean faster initial load, even before data fetching.

Move Non-Essential Data Out of Initial Render:
If certain sections (e.g., LeetCode challenges or a large article list) aren’t critical on the first screen, fetch them after the initial render or only when the user navigates to those sections. This approach improves initial perception of speed.

- Containerizacao Docker:

1. Rodando projeto em ambiente de desenvolvimento (Dockerfile.dev):

```bash
docker build -f Dockerfile.dev -t frontend-dev .
docker run -d frontend-dev
#rodar projeto no navegador:
http://localhost:3000
```

2. Rodando projeto parap producao (Dockerfile.prod):

```bash
docker build -f Dockerfile.prod -t frontend-prod .
docker run -d frontend-prod
#rodar projeto no navegador:
http://localhost
```
