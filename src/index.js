import 'paper-css/paper.css'

import './index.postcss'

document.getElementById('redact')?.addEventListener('click', () => {
  document.body.classList.toggle('redacted')
})
