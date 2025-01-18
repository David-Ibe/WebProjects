import React from 'react';
import './global.css'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from './components/navbar'
import { Footer } from './components/layout/Footer'
import { useEffect } from 'react'

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <Layout>
      {children}
    </Layout>
  );
}

export function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
