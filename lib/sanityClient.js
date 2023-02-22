import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '34itczan',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'sk9ogQ6jebKcZ5QBoQQkZFiKOS0nwYM5pzT2jMTwm6NyVLExYIskwlbuy5NZ7B1oO0U8zEYxNOlaM2drR7l29Xuo4y1BYtzwwiWPc4EaEl2zE9spq2u1SyYgcIlbGHOZ9NzAD5Ou8FeQ2VmDULRZPUIbOOSLlUvi7I4aAV9Dsj4YHkPA4Ggd',
  useCdn: false,
})
