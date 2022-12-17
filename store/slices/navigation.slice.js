'use client'

import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { name: 'Home', href: '/', current: true, index: 0, top: false },
  { name: 'About', href: '/about', current: false, index: 1, top: false },
  { name: 'Brands', href: '/#brands', current: false, index: 2, top: true },
  { name: 'Blog', href: '/blog', current: false, index: 3, top: false },
  { name: 'ContactUs', href: '/contact', current: false, index: 4, top: false },
]

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    navigate(state, action) {
      state.forEach((element) => (element.current = false))

      const activeLinkIndex = state.findIndex(
        (element) => element.index === action.payload,
      )

      state[activeLinkIndex].current = true
    },
  },
})

export const navigationActions = navigationSlice.actions

export default navigationSlice
