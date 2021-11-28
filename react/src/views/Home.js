import React, { useState, useEffect } from 'react'

function useHelperModule () {
  const [helperModule, setHelperModule] = useState()
  useEffect(() => {
    System.import('@integrated/helper').then(setHelperModule)
  }, [])
  return helperModule
}

const Home = () => {
  const helperModule = useHelperModule()
  
  useEffect(() => {
    let subjection = null
    if (helperModule) {
      helperModule.publicApiFunction('@integrate/react')
      subjection = helperModule.sharedSubject.subscribe(console.log)
    }
    // return () => subjection.unsubscribe()
  }, [helperModule])
  return <div>Home works <button onClick={() => helperModule.sharedSubject.next('hello world')}>按钮</button></div>
}

export default Home
