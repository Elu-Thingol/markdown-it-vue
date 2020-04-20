//HTML转义
function HTMLEncode(html) {
  var temp = document.createElement('div')
  temp.textContent != null ? (temp.textContent = html) : (temp.innerText = html)
  var output = temp.innerHTML
  temp = null
  return output
}

const highlightPlugin = md => {
  md.renderer.rules.fence = (tokens, idx) => {
    const token = tokens[idx]
    const code = token.content.trim()
    const lang = token.info ? token.info : 'none'
    return `<pre class="language-${lang} line-numbers"><code class="language-${lang}">${HTMLEncode(code)}</code></pre>`
  }
}

export default highlightPlugin
