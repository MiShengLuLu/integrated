const { start } = require('single-spa')

let integratedContainer = null

export async function start() {
  console.log('应用启动了')
}

// export const mounted = async () => {
//   console.log('应用正在挂载')
//   integratedContainer = document.createElement('div')
//   integratedContainer.id = 'integratedContainer'
//   integratedContainer.innerHTML = 'hello integrated web'
//   document.body.appendChild(integratedContainer)
// }

// export const unmounted = async () => {
//   console.log('应用正在卸载')
//   document.body.removeChild(integratedContainer)
// }