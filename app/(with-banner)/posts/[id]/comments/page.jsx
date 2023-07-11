import Image from 'next/image';

const fetchComments = async (id) => {
    //await new Promise(resolve => setTimeout(resolve, 1000));// ===> esto es para simular una demora de 1 segundo
    //throw new Error('Error al cargar los comentarios'); ==> esto es para simular un error que viene del archivo error.jsx
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        //cache: 'no-store' ===> esto es para la peticion Fetch no sea estatica y se actualice cada vez que se recargue la pagina
        next: {
            revalidate: 10, // ===> esto es para que la petición Fetch se actualice cada 10 segundos
        }
    })
        .then(response => response.json())
}

const Comments = async ({ children, params }) => {
    const id = params.id;
    const comments = await fetchComments(id);
    return (
        <>
                
            <ul style={{ background: '#444', fontSize: '12px'}}>
                {comments.map(c => (
                    <li key={c.id}>
                        <Image width='50' height='50' src={`https://api.dicebear.com/6.x/adventurer/svg?seed=Tiger/${c.email}`} alt={c.name}/>
                        <h2>{c.name}</h2>
                        <small>{c.body}</small>
                    </li>
                ))}
            </ul>
            
        </>
    )
}

export default Comments