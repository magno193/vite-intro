import styles from './example.module.css'; // traz OBJECT {title: '_title_fuuey_1'}
import favicon from './favicon.svg'; // traz STRING ./favicon.svg com hash em build
import './style.scss';

console.log(styles);
console.log(favicon);

document.querySelector('#app').innerHTML = `
  <img src="/favicon.ico"/>
  <div>
    <h1 class="${styles.title}">Hello Vite!</h1>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
  </div>
  <img src="${favicon}" alt="VITE" />
`
