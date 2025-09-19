import axios from "axios"

const Produtos = () => {

    axios.get("http://172.19.0.49/pizzariateste/api/v1/index")
    .then((response) => {
        console.log(response.data)
    })
  
    const ListaPizzas = pizzas.map(pizza => <li>{pizza}</li>)

    return (
        <div>
            <ul>
          {ListaPizzas}
            </ul>
        </div>
    )
}

export default Produtos