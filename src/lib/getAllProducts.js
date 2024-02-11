export default async function getAllProducts ()  {
    const response = await fetch('https://fakestoreapi.com/products?limit=10')
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return response.json()
}