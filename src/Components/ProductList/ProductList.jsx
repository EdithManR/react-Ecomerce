import {useState,  useEffect} from 'react'
import "./ProductList.css"

const ProductList = () => {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);
  const [orden, setOrden] = useState("Relevante");
  

  useEffect(()=>{
    const fetchProductos = async ()=>{
      try{
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok){
          throw new Error("Error al cargar los productos")
        }
        const data = await response.json()
        setProductos(data)
      }catch(err){
        setError(err.message)
      }
    }
    fetchProductos();
  }, [])

  const handleOrdenChange =(e)=>{
    setOrden(e.target.value);
    console.log(productosOrdenados)
  }
  const productosOrdenados = [...productos].sort((a,b)=>{
    if(orden==="Precio menor a mayor"){
      return b.price - a.price
    }if(orden==="Precio mayor a menor"){
      return a.price - b.price
    }
    return 0;
  })

  return (
    <section className='d-flex gap-3 p-1  flex-row flex-wrap'>
      <aside className='Filters'>
        <h2 className="mb-2">Filtros</h2>
        <div className=" p-3 border border-1 mb-3 d-flex flex-column">
          <h3 className="mb-3">Filtrar por categoría</h3>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="checkDisabled" />
            <label className="form-check-label" htmlFor="checkDisabled">
              Hombres
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="mujeres" />
            <label className="form-check-label" htmlFor="mujeres">
              Mujeres
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="ninos" />
            <label className="form-check-label" htmlFor="ninos">
              Niños
            </label>
          </div>
        </div>
        <div className="p-3 border border-1 mb-3 d-flex flex-column">
          <h3 className="mb-2">Filtrar por tipo</h3>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="tipo1" />
            <label className="form-check-label" htmlFor="tipo1">
             Tipo1
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="tipo2" />
            <label className="form-check-label" htmlFor="tipo2">
              Tipo2
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="tipo3" />
            <label className="form-check-label" htmlFor="tipo3">
              Tipo 3
            </label>
          </div>
        </div>
      </aside>
      <main className='colection flex-fill'>
        <div className="options">
          <h2>TODAS LAS COLECCIONES</h2>
          <div className="options  ">
            <label className="sort-options d-flex flex-row">
              <span className="d-inline flex-fill">Ordenar por:</span>
            <select onChange={handleOrdenChange} value={orden} className="form-select d-inline">
              <option >Relevante</option>
              <option >Precio menor a mayor</option>
              <option >Precio mayor a menor</option>
            </select>
            </label>
          </div>
        </div>
        <div className="products d-flex flex-row flex-wrap gap-3 " style={{maxWidth:'80%'}}>
          { error ? (
            <p className="error-mesage">{error}</p>
          ):(
            productosOrdenados.map((producto)=>{
              return(
                <>
                

               <div className="card mt-3 gap-3 " style={{maxWidth:"18rem"}} key={producto.id}>
                  <img src={producto.image} className="card-img-top" alt={producto.image}/>
                  <div className="card-body">
                    <h5 className="card-title fs-4 text fw-bold">{producto.title}</h5>
                    <p className="card-text"> {producto.price}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
                
              </>
              )
            
              
            })
          )}
        </div>
      </main>
    </section>
    
  )
}

export default ProductList