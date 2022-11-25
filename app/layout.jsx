'use client'

import { Provider } from 'react-redux'
import store from '../store/store'

import Navbar from '../components/layout/Navbar/Navbar'
import Others from '../components/layout/Section/Others/Others'
import Footer from '../components/layout/Footer/Footer'
import Badge from '../components/UI/Button/Badge'

import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth bg-white dark:bg-white scrollbar-thin scrollbar-track-{#FFC107} scrollbar-thumb-{#4A171E} hover:scrollbar-track-{#4A171E} hover:scrollbar-thumb-{#FFC107}`}
    >
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
          <Others />
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
