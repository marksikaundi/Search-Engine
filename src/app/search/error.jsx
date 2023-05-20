"use client"
import React, { useEffect } from 'react'

export default function Error({error, reset}) {
    useEffect(() => {
        console.log(error)
    })    
  return (
    <div>
      <h1>Something went wrong</h1>
      <button onClick={() => reset()}>Try again</button>    
    </div>
  )
}
