
export default function CategoryPage({ params }) {
  const{products}  = params
console.log(params)
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">category:{products}</h1>
      
    </div>
  )
}