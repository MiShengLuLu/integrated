let integratedContainer = null

export async function bootstrap() {
  console.log("应用正在启动")
}
export async function mount() {
  console.log("应用正在挂载")
  integratedContainer = document.createElement("div")
  integratedContainer.id = "integratedContainer"
  integratedContainer.innerHTML = "hello integrated web"
  document.body.appendChild(integratedContainer)
}
export async function unmount() {
  console.log("应用正在卸载")
  document.body.removeChild(integratedContainer)
}


// const application = {
//   bootstrap: async () => {
//     console.log('应用启动了')
//   }, //bootstrap function
//   mount: async () => {
//     console.log('应用正在挂载')
//     integratedContainer = document.createElement('div')
//     integratedContainer.id = 'integratedContainer'
//     integratedContainer.innerHTML = 'hello integrated web'
//     document.body.appendChild(integratedContainer)
//   }, //mount function
//   unmount: async () => {
//     console.log('应用正在卸载')
//     document.body.removeChild(integratedContainer)
//   }, //unmount function
// }
// registerApplication('applicationName', application)
