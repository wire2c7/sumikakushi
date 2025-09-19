import './style.css';
import { render } from 'hono/jsx/dom';
import App from './App';

// biome-ignore lint/style/noNonNullAssertion: 存在する前提のDOMのため許容
render(<App />, document.getElementById('app')!);
