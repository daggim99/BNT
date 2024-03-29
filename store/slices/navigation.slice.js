'use client'

import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { name: 'Home', href: '/', current: true, index: 0, top: false, foot: true },
  {
    name: 'About',
    href: '/about',
    current: false,
    index: 1,
    top: false,
    foot: true,
    blog: false,
  },
  {
    name: 'Business',
    href: '/business',
    current: false,
    index: 2,
    top: false,
    foot: false,
    blog: false,
  },
  {
    name: 'Brands',
    href: '/#brands',
    current: false,
    index: 3,
    top: true,
    foot: false,
    blog: false,
  },
  {
    name: 'Subsidiaries',
    href: '/subsidiaries',
    current: false,
    index: 4,
    top: false,
    foot: false,
    blog: false,
  },
  {
    name: 'Blog',
    href: '/blog',
    current: false,
    index: 5,
    top: true,
    foot: true,
    blog: true,
  },
  {
    name: 'ContactUs',
    href: '/contact',
    current: false,
    index: 6,
    top: false,
    foot: true,
    blog: false,
  },
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
