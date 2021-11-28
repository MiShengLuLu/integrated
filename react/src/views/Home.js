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
  if (helperModule) {
    helperModule.publicApiFunction('@integrate/react')
  }
  return <div>Home works</div>
}

export default Home
