import Link from "next/link.js";
import LikeButton from "./LikeButton.jsx";

const fetchPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        cache: 'no-store'
        /** next: {
            revalidate: 10,  ===> esto es para que la petición Fetch se actualice cada 10 segundos
        }**/
    })
        .then(response => response.json())
}

const ListOfPost = async () => {
    const posts = await fetchPosts();

    return posts.slice(0, 5).map(p => (
        <article key={p.id}>
            <Link href={`/posts/${p.id}`}>
                <h2 style={{ color: '#09f' }}>{p.title}</h2>
                <p>{p.body}</p>
            </Link>
            <LikeButton id={p.id} />
            <br />
        </article>
    )
    )

}

export default ListOfPost