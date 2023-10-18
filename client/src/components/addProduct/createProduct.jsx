import { useState } from "react"
import "./create.css"

const Add = () => {
    const Product = {
        fSku: "",
        fImage: "",
        fName: "",
        fCategory: "",
        fProveedor: "",
        fUnit: "",
        fCqty: "",
        fOqty: "",
        fIva: "",
        fEntryPrice: "",
        fCp: "",
        fProfit: "",
        fMargen: "",
        fTotal: ""
    }
    const [product, setProduct] = useState(Product);

    const inputHandler = (e) => {
        const {name, value} = e.target;
        setProduct({...product, [name]:value});
        
    }

    const submitForm = async() => {
        console.log(product);
        const data = await fetch("/CREATE/",
            {
            method: "POST",
            crossDomain: true,
            headers: {
            'Content-Type':'application/json'
            },
            body: JSON.stringify({
                sku: product.fSku,
                image: product.fImage,
                name: product.fName,
                category: product.fCategory,
                proveedor: product.fProveedor,
                unit: product.fUnit,
                cqty: product.fCqty,
                oqty: product.eOqty,
                iva: product.fIva,
                entryPrice: product.fEntryPrice,
                cp: product.fCp,
                profit: product.fProfit,
                margen: product.fMargen,
                total: product.fTotal
            })
        })
        .then(response => response.json())
    }


    return(
        <div>
            <div className="container">
                <form className="addProductForm" onSubmit={submitForm}>
                <h3>Add Product</h3>
                <div className="cont">
                <div className="one-column">
                    <div className="inputGroup">
                        <label htmlFor="fSku">New Sku</label>
                        <input
                        type="text"
                        onChange={inputHandler}
                        id="fSku"
                        name="fSku"
                        value={product.sku}
                        />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="fImage">New Image link</label>
                        <input
                        type="text"
                        onChange={inputHandler}
                        id="fImage"
                        name="fImage"
                        value={product.image}
                        />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="fName">New Name</label>
                        <input
                        type="text"
                        onChange={inputHandler}
                        id="fName"
                        name="fName"
                        value={product.name}
                        />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="fCategory">New Category</label>
                        <input
                        type="text"
                        onChange={inputHandler}
                        id="fCategory"
                        name="fCategory"
                        value={product.category}
                        />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="fProveedor">New Proveedor</label>
                        <input
                        type="text"
                        onChange={inputHandler}
                        id="fProveedor"
                        name="fProveedor"
                        value={product.proveedor}
                        />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="fUnit">New Unit</label>
                        <input
                        type="text"
                        onChange={inputHandler}
                        id="fUnit"
                        name="fUnit"
                        value={product.unit}
                        />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="fCqty">New C.Qty</label>
                        <input
                        type="text"
                        onChange={inputHandler}
                        id="fCqty"
                        name="fCqty"
                        value={product.cqty}
                        />
                    </div>
                </div>
                <div className="two-column">
                    <div className="inputGroup">
                        <label htmlFor="fOqty">New O.Qty</label>
                        <input
                        type="text"
                        onChange={inputHandler}
                        id="fOqty"
                        name="fOqty"
                        value={product.oqty}
                        />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="fIva">New IVA</label>
                        <input
                        type="text"
                        onChange={inputHandler}
                        id="fIva"
                        name="fIva"
                        value={product.iva}
                        />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="fEntryPrice">New Entry Price</label>
                        <input
                        type="text"
                        onChange={inputHandler}
                        id="fEntryPrice"
                        name="fEntryPrice"
                        value={product.entryPrice}
                        />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="fCp">New CP</label>
                        <input
                        type="text"
                        onChange={inputHandler}
                        id="fCp"
                        name="fCp"
                        value={product.cp}
                        />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="fProfit">New Profit</label>
                        <input
                        type="text"
                        onChange={inputHandler}
                        id="fProfit"
                        name="fProfit"
                        value={product.profit}
                        />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="fMargen">New Margen</label>
                        <input
                        type="text"
                        onChange={inputHandler}
                        id="fMargen"
                        name="fMargen"
                        value={product.margen}
                        />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="fTotal">New Total</label>
                        <input
                        type="text"
                        onChange={inputHandler}
                        id="fTotal"
                        name="fTotal"
                        value={product.total}
                        />
                    </div>
                </div>
                </div>
                <button type="submit" className="Btn-add">Add</button>
                </form>
            </div>
        </div>
    )
}

export default Add