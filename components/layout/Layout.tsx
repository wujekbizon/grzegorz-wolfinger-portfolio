import { Navbar } from '@/components'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
