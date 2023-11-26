import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { user } from './data.json'
import suma from './suma.ts'

const modules = import.meta.glob('./modules/*.js')

console.log(`suma 2+3 = ${suma(2, 3)}`)

console.log(modules)

for (const path in modules) {
  modules[path]().then((module) => {
    module.load()
  })
}

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello amigos</h1>
    <button id="btn">Clic</button>
    <pre>${JSON.stringify(user)}</pre>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
