# React App

Simple react app with `/admin` base url

---

Step:

1. Add this line to your, so that your react app access static asset from the `/admin` subdirectory

```package.json

"homepage": "/admin"

```

2. Add `basename` to your `BrowserRouter`

```App.js

<BrowserRouter basename="/admin">
  ...

```

3. Change route from the component using `useHref` or manually add `/admin` prefix

```HomePage.js

import { useHref } from 'react-router-dom';

export default function HomePage() {
  const `aboutPageUrl` = useHref('/about');

...
        <a className="App-link" href={`aboutPageUrl`}>
          Go to About
        </a>

```

4. Build your react app and past it to nextjs/public folder and rename `build` to `admin`

Next step: Configure nextjs app
