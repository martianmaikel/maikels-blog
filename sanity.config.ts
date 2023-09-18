
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schema'
import { customTheme } from './sanity.theme'
import { codeInput } from '@sanity/code-input'

export default defineConfig({
  basePath: '/studio',
  name: 'MMAIKEL_Blog_Studio',
  title: 'MMAIKEL Blog Studio',
  projectId,
  dataset,
  schema,
  plugins: [
    deskTool(),
    visionTool({ defaultApiVersion: apiVersion }),
    codeInput(),
  ],
  theme: customTheme,
  // studio: {
  //   components: {
  //     logo: () => <div>My custom logo</div>,
  //   }
  // }
})
