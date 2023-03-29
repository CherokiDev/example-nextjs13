import Link from 'next/link'
import { LikeButton } from './LikeButton'

const fetchPosts = () => {
  console.log('fetching posts')
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60
    }
  })
    .then((response) => response.json())
}

export default async function ListOfPosts () {
  const posts = await fetchPosts()

  return posts.slice(0, 5).map((post) => (
    <article key={post.id}>
      {/* <Link href='/posts/[id]' as={`/posts/${post.id}`}> */}
      <Link href={`/posts/${post.id}`}>
        <h2 style={{ color: '#09f' }}>{post.title}</h2>
        <p>{post.body}</p>
        <LikeButton id={post.id} />
      </Link>
    </article>
  ))
}
