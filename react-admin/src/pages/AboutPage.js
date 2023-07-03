import { useHref } from 'react-router-dom';

export default function AboutPage() {
  const homePageUrl = useHref('/');

  return (
    <div className="App">
      <header className="App-header">
        <p>About Page</p>
        <a className="App-link" href={homePageUrl}>
          Go to Home
        </a>
      </header>
    </div>
  );
}
