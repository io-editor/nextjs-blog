import { memo } from 'react'

let render = 0

const Header = memo(() => {
  console.log(`render${render}`)
  render++
  return <header>header</header>
})

export default Header