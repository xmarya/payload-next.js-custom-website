import { slug } from '@/fields/slug'
import { CollectionConfig } from 'payload'
// import {slug} from "@/fields/slug";

export const Study: CollectionConfig = {
  slug: 'studies',
  fields: [
    {
      type: 'text',
      name: 'title', // this is going to be used in formatSlug() hook.
      label: 'Title',
      required: true,
    },
    {
      type: 'text',
      name: 'client',
      label: 'Client',
      required: true,
    },
    {
      type: 'text',
      name: 'location',
      label: 'Location',
      required: true,
    },
    {
      type: 'text',
      name: 'service-provider',
      label: 'Service Provider',
      required: true,
    },
    {
      name: 'image',
      label: 'Featured Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'studyCategory',
      label: 'Category',
      type:"relationship",
      relationTo:"categories",
      required: true,
      admin: {
        position: "sidebar"
      }
    },
    slug
  ],
}
