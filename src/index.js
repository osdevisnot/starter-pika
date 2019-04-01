import { html, render } from './web_modules/lit-html.js'

const Hello = () => {
  return html`
    <h1>Hello Pika!</h1>
    <div>
      Look
      <a href="https://github.com/pikapkg/web" target="_blank" rel="noopener noreferrer">here</a>
      for more info about Pika!
    </div>
    <div>
      Look
      <a href="https://github.com/lukejacksonn/servor" target="_blank" rel="noopener noreferrer">here</a>
      for more info about servor!
    </div>
  `
}

render(Hello(), document.querySelector('#app'))
