// TODO: create a component that displays a single bakery item
import "../App.css"

const BakeryItem = ({key, item, addToCart}) => {

    return (
        <div className="card-container" key={key}>
            <img className="preview" src={item.image}></img>
            <div className="info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
            </div>
            <div className="card-display">
                <p><b>${item.price}</b></p>
                <button className="purchase" onClick={() => addToCart(item.name, item.price)}>Add to Cart</button>
            </div>
        </div>
    )
}

export default BakeryItem;