'use client'

import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { name: 'Home', href: '/', current: true, index: 0 },
  { name: 'About', href: '/about', current: false, index: 1 },
  { name: 'Blog', href: '/blog', current: false, index: 2 },
  { name: 'Contact Us', href: '/contact', current: false, index: 3 },
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
