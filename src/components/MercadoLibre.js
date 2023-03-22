import { useEffect, useState } from "react";

const MercaLibre = () => {
    const [products, setProducts] = useState([]);
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);

        fetch('https://api.mercadolibre.com/sites/MLA/search?q=' + input)
            .then(response => {
                return response.json()
            })
            .then(json =>{
                setProducts(json.results);
            })
    }

    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=' + input)
            .then(response => {
                    return response.json()
            })
            .then(json =>{
                setProducts(json.results);
            })
    }, [input])

    return(
        <div>
            <h1>Mercadolibre</h1>
            <form onSubmit={handleSubmit}>
                <input value={input} onChange={(e) => setInput(e.target.value)}/>
                <button type="submit">Buscar</button>
            </form>
            <div>
            {
                products.map(prod => {
                    return(
                        <div>
                            <div key={prod.id}>
                                <h3>{prod.title}</h3>
                                <img  src={prod.thumbnail} alt={prod.title}/>
                                <p>$ {prod.price}</p>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}
export default MercaLibre;