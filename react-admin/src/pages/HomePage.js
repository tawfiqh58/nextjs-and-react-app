import { useHref } from 'react-router-dom';
import logo from '../logo.svg';

export default function HomePage() {
  const aboutPageUrl = useHref('/about');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Go to{' '}
          <code>
            <a className="App-link" href="/">
              Next.js
            </a>{' '}
            or{' '}
            <a className="App-link" href="/route">
              nextjs/route
            </a>
          </code>{' '}
          page
        </p>
        <a className="App-link" href={aboutPageUrl}>
          Go to About
        </a>
      </header>
    </div>
  );
}
