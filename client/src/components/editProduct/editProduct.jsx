import { useState } from "react"
import "./edit.css"

export default function Edit ( idProd, modal ) {
    const [id, setId] = useState('')
    
    const eProduct = {
        eSku: "",
        eImage: "",
        eName: "",
        eCategory: "",
        eProveedor: "",
        eUnit: "",
        eCqty: "",
        eOqty: "",
        eIva: "",
        eEntryPrice: "",
        eCp: "",
        eProfit: "",
        eMargen: "",
        eTotal: ""
    }
    
    const [editProduct, setEditProduct] = useState(eProduct);
    
    const inputHandler = (e) => {
        const {name, value} = e.target;
        setEditProduct({...editProduct, [name]:value})
        setId(idProd.idProd)
    }
    
    const fetchData = async (id) => {
            const Api_Url = "/GET/"+id;
            
            const data = await fetch(Api_Url, {
                crossDomain:true,
                mode: "cors",
                method: 'Get',
                headers: {'Content-Type':'application/json'},
                cache: "no-cache"
              })
              .then(response => {
                setEditProduct(response.json())
              })
            }
            
    const updateProduct = async (idProd) => {
        await fetch("/UPDATE/" + idProd, {
            method: "PUT",
            crossDomain: true,
            headers: {
            'Content-Type':'application/json'
            },
            body: JSON.stringify({
                sku: editProduct.eSku,
                image: editProduct.eImage,
                name: editProduct.eName,
                category: editProduct.eCategory,
                proveedor: editProduct.eProveedor,
                unit: editProduct.eUnit,
                cqty: editProduct.eCqty,
                oqty: editProduct.eOqty,
                iva: editProduct.eIva,
                entryPrice: editProduct.eEntryPrice,
                cp: editProduct.eCp,
                profit: editProduct.eProfit,
                margen: editProduct.eMargen,
                total: editProduct.eTotal
            })
        })
        .then(response => response.json())
      }


    if (modal) {
        return(
            <div>
                <div className="container">
                    <form className="addProductForm" onSubmit={() => updateProduct(id)}>
                        <h3>Edit Product</h3>
                        <div className="cont">
                            <div className="one-column">
                                <div className="inputEditGroup">
                                <label htmlFor="eSku">New Sku</label>
                                <input
                                type="text"
                                onChange={inputHandler}
                                id="eSku"
                                name="eSku"
                                value={editProduct.sku}
                                />
                            </div>
                            <div className="inputEditGroup">
                                <label htmlFor="eImage">New Image link</label>
                                <input
                                type="text"
                                onChange={inputHandler}
                                id="eImage"
                                name="eImage"
                                value={editProduct.image}
                                />
                            </div>
                            <div className="inputEditGroup">
                                <label htmlFor="eName">New Name</label>
                                <input
                                type="text"
                                onChange={inputHandler}
                                id="eName"
                                name="eName"
                                value={editProduct.name}
                                />
                            </div>
                            <div className="inputEditGroup">
                                <label htmlFor="eCategory">New Category</label>
                                <input
                                type="text"
                                onChange={inputHandler}
                                id="eCategory"
                                name="eCategory"
                                value={editProduct.category}
                                />
                            </div>
                            <div className="inputEditGroup">
                                <label htmlFor="eProveedor">New Proveedor</label>
                                <input
                                type="text"
                                onChange={inputHandler}
                                id="eProveedor"
                                name="eProveedor"
                                value={editProduct.proveedor}
                                />
                            </div>
                            <div className="inputEditGroup">
                                <label htmlFor="eUnit">New Unit</label>
                                <input
                                type="text"
                                onChange={inputHandler}
                                id="eUnit"
                                name="eUnit"
                                value={editProduct.unit}
                                />
                            </div>
                            <div className="inputEditGroup">
                                <label htmlFor="eCqty">New C.Qty</label>
                                <input
                                type="text"
                                onChange={inputHandler}
                                id="eCqty"
                                name="eCqty"
                                value={editProduct.cqty}
                                />
                            </div>
                        </div>
                            <div className="two-column">
                                <div className="inputEditGroup">
                                <label htmlFor="eOqty">New O.Qty</label>
                                <input
                                type="text"
                                onChange={inputHandler}
                                id="eOqty"
                                name="eOqty"
                                value={editProduct.oqty}
                                />
                            </div>
                            <div className="inputEditGroup">
                                <label htmlFor="eIva">New IVA</label>
                                <input
                                type="text"
                                onChange={inputHandler}
                                id="eIva"
                                name="eIva"
                                value={editProduct.iva}
                                />
                            </div>
                            <div className="inputEditGroup">
                                <label htmlFor="eEntryPrice">New Entry Price</label>
                                <input
                                type="text"
                                onChange={inputHandler}
                                id="eEntryPrice"
                                name="eEntryPrice"
                                value={editProduct.entryPrice}
                                />
                            </div>
                            <div className="inputEditGroup">
                                <label htmlFor="eCp">New CP</label>
                                <input
                                type="text"
                                onChange={inputHandler}
                                id="eCp"
                                name="eCp"
                                value={editProduct.cp}
                                />
                            </div>
                            <div className="inputEditGroup">
                                <label htmlFor="eProfit">New Profit</label>
                                <input
                                type="text"
                                onChange={inputHandler}
                                id="eProfit"
                                name="eProfit"
                                value={editProduct.profit}
                                />
                            </div>
                            <div className="inputEditGroup">
                                <label htmlFor="eMargen">New Margen</label>
                                <input
                                type="text"
                                onChange={inputHandler}
                                id="eMargen"
                                name="eMargen"
                                value={editProduct.margen}
                                />
                            </div>
                            <div className="inputEditGroup">
                                <label htmlFor="eTotal">New Total</label>
                                <input
                                type="text"
                                onChange={inputHandler}
                                id="eTotal"
                                name="eTotal"
                                value={editProduct.total}
                                />
                            </div>
                        </div>
                        </div>
                        
                        <button type="submit" className="Btn-edit">Save</button>
                    </form>
                </div>
            </div>
        )
    }
}