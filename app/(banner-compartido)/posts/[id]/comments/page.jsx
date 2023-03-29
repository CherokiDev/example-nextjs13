const fetchComments = (id) => {
  // throw new Error('Error fetching comments')
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60
    }
  })
    .then((response) => response.json())
}

export default async function Post ({ params }) {
  const { id } = params
  const comments = await fetchComments(id)

  return (
    <ul style={{ fontSize: 12, background: '#ddd' }}>
      {comments.map((comment) => (
        <li key={comment.id}>
          <h3>{comment.name}</h3>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>

  )
}
