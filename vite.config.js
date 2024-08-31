import { defineConfig } from 'vite'
import React from 'react';
//import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  esbuild: {
    jsxFactory: 'React.createElement',
    jsxFragment: 'Fragment',
  }
})


