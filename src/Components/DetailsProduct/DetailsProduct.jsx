import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './DetailsProducts.css'


const DetailsProduct = () => {
  const {id}=useParams()
  const [producto, setProducto]= useState(null)
  const [error, setError ] =useState(null)

  useEffect(()=>{
    const fetchProductos = async ()=>{
      try{
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok){
          throw new Error("Error al cargar los detalles del producto")
        }
        const data = await response.json()
        setProducto(data)
      }catch(err){
        setError(err.message)
      }
    }
    fetchProductos();
  }, [id])
  if(error){
    return <h2>{error}</h2>
  }
  return (
    <>
      <div className="product-details">
      { 
        producto? (
          <>
          <div className="w-50 align-center d-flex aling-items-center flex-column mt-5 mb-5 ms-auto me-auto border border-4 p-5">
            <img src={producto.image} alt={producto.title} className="image-small" />
            <div className ="producto-infos">
              <h1>{producto.title}</h1>
              <p className="price">{producto.description}</p>
              <button className="btn btn-primary" type="button">Añadir al carrito</button>
            </div>
          </div>
          </>
        ) : (
          <div className="spinner-border text-info" role="status">
            <span className="visually-hidden">Cargando producto ...</span>
          </div>
        )
      }
      </div>
    </>
  )
}

export default DetailsProduct