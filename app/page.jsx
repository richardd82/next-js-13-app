'use client'
import test from '../Logic/Test.js'


export default function Page () {

const text = test()

console.log(text)

  return <h1>{text}

    Esta es mi App por el momento</h1>
}
