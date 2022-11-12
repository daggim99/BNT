'use client'

import { Provider } from 'react-redux'
import store from '../store/store'

import Navbar from '../components/layout/Navbar/Navbar'
import Footer from '../components/layout/Footer/Footer'
import Badge from '../components/UI/Button/Badge'

import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Provider store={store}>
          <Navbar />
          <Badge />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
