import './app.css'
import App from './App.svelte'

const target = document.getElementById('app');
if (target) {
  const app = new App({
    target,
  });
}

export default App
