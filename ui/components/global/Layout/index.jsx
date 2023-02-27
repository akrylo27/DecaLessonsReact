import Header from '@/ui/components/global/Header'

export default function Layout({ children }) {
  return (
    <>
      <div className="wrapper">
        <Header />
        { children }
      </div>
    </>
  )
}