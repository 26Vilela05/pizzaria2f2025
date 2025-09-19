const Produtos = () => {
    const pizzas = [
            'Pizza de Muçarela',
            'Pizza de Calabresa',
            'Pizza de Frango',
            'Pizza Portuguesa'

    ]

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