import Navbar from "@/components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="w-full">
        {children}
      </main>
    </div>
  )
}

export default Layout
