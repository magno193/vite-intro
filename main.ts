import styles from './example.module.css';
import './style.scss';
console.log(styles);

document.querySelector('#app').innerHTML = `
  <h1 class="${styles.title}">Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
