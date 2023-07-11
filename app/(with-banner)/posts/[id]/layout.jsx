import Link from "next/link.js";

const fetchSingelPosts = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      //cache: 'no-store' ===> esto es para la peticion Fetch no sea estatica y se actualice cada vez que se recargue la pagina
      next: {
          revalidate: 10, // ===> esto es para que la petición Fetch se actualice cada 10 segundos
      }
  })
      .then(response => response.json())
}

const Post = async ({children, params}) => {  
    const id = params.id;
    const post = await fetchSingelPosts(id);
  return (
    <article>
      <br />
    <h1>{post.title}</h1>  
    <p>{post.body}</p> 
    <br />
    <Link href={`/posts/${id}/comments`}>Ver Comentarios</Link>     
    {children}
    </article>
  )
}

export default Post