import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import logo from './images/logo.png'

const config: DocsThemeConfig = {
  head: (
    <>
      <link rel='icon' href={logo.src}/>
    </>
  ),
  logo: (
    <>
      <img src={logo.src} width={40} height={40} alt='logo'/>
      <span style={{fontWeight: 800, paddingLeft: '10px'}}>wdyjwdy</span>
    </>
  ),
  footer: {
    component: <></>
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  navigation: false,
  useNextSeoProps() {
    return {
      titleTemplate: '%s'
    }
  },
  project: {
    link: 'https://github.com/wdyjwdy/wdyjwdy',
  },
  docsRepositoryBase: 'https://github.com/wdyjwdy/wdyjwdy',
  feedback: {
    content: null
  },
  editLink: {
    component: null
  },
  toc: {
    title: null
  },
  darkMode: false,
}

export default config
