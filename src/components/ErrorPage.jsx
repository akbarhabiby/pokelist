import React from 'react'

export default function ErrorPage(props) {
  const { error } = props
  return (
    <>
      <center><h1>{error}</h1></center>
      <hr/>
      <center>Support: <a href="mailto:akbarhabiby@icloud.com">akbarhabiby@icloud.com</a></center>
    </>
  )
}
