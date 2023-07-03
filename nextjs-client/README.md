# NextJS including React app

Simple nextjs app with `/admin` route which serves a React app

---

Step:

1. Add this to next.config.js file

```js

async rewrites() {
  return [
    {
      source: '/admin/:path*', // Wildcard for /admin/** route
      destination: '/admin/index.html', // Will redirect to react index.html file
    },
  ];
},

```

2. Copy your react `build` folder nextjs/public directory and rename `admin`


3. Run nextjs command and access your react app

```bash

npm run dev

```

on http://localhost:3000/admin

Congratuations!

You have successfully added your react app to your nextjs application.
