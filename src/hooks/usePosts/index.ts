import { useQuery } from '@tanstack/react-query'

const fetchPosts = async (limit = 10) => {
  const parsed = await fetch('https://jsonplaceholder.typicode.com/posts')
  return parsed.json()
}

const usePosts = (limit: number) => {
  return useQuery({
    queryKey: ['posts', limit],
    queryFn: () => fetchPosts(limit),
  })
}

export { usePosts, fetchPosts }
