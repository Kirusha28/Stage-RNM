import React, { useEffect, useState } from 'react';
import "./getProduct.css"
import Edit  from '../editProduct/editProduct'


const Product = () => {
    const [products, setProducts] = useState([]);
    const [editParam, setEditParam] = useState('');
    const [editModal, setEditModal] = useState(false);

    useEffect(() => {
        fetchData()
        }, [])

    const fetchData = async () => {
        const Api_Url = "/GET";
        
        fetch(Api_Url, {
            crossDomain:true,
            mode: "cors",
            method: 'Get',
            headers: {'Content-Type':'application/json'},
            cache: "no-cache"
          })
          .then(response => {return response.json()})
          .then(
            data => {
              setProducts(data)
            }
          )     
        }

    const deleteProduct = async (productId) => {
          fetch("/DELETE/" + productId, {
            method: "DELETE",
          }).then((response) => setProducts((prevProduct)=> prevProduct.filter((products)=> products._id !== productId)))
          fetchData();
        }

    const editHandle = (id) => {
        setEditParam(id)
        setEditModal(true)
    }       
    

    return (
        <div className='ProductTable'>
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>s.no.</th>
                        <th>Sku</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Proveedor</th>
                        <th>Unit</th>
                        <th>C.Qty</th>
                        <th>O.Qty</th>
                        <th>IVA</th>
                        <th>Entry Price</th>
                        <th>CP</th>
                        <th>Profit</th>
                        <th>Margen</th>
                        <th>Total</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((products, index) =>{
                            return(
                                <tr key={products._id}>
                                    <td>{index+1}</td>
                                    <td>{products.sku}</td>
                                    <td><img src={products.image} alt={products.title} width={80} height={80}/></td>
                                    <td>{products.name}</td>
                                    <td>{products.category}</td>
                                    <td>{products.proveedor}</td>
                                    <td>{products.unit}</td>
                                    <td>{products.cqty}</td>
                                    <td>{products.oqty}</td>
                                    <td>{products.iva}</td>
                                    <td>{products.entryPrice}</td>
                                    <td>{products.cp}</td>
                                    <td>{products.profit}</td>
                                    <td>{products.margen}</td>
                                    <td>{products.total}</td>
                                    <td>
                                        <button><span className="material-symbols-outlined" onClick={() => deleteProduct(products._id)}>delete</span></button>
                                        <button><span className="material-symbols-outlined" onClick={() => editHandle(products._id)}>edit</span></button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {editModal && <Edit idProd={editParam}/>}
        </div>
    )
}

export default Product