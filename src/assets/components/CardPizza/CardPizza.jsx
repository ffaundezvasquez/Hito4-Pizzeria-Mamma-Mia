import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { clp } from "../../utils/total";
import './cardpizza.css'

function CardPizza() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    const response = await fetch("http://localhost:5000/api/pizzas");
    const data = await response.json();
    setPizzas(data);
  };


  return (
    <div>
      <br></br>
      <div className="card">
        <img src={pizza.img} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{pizza.name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <p>Ingredientes:</p>
          <div className="lista">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{pizza.ingredient}</li>
            ))}
          </div>
          <li className="list-group-item"></li>
          <li className="costo list-group-item">
            Precio: ${clp(pizza.price)}
          </li>
        </ul>
        <div className="card-body">
          <button type="button" className="btn btn-outline-secondary me-md-5">
            Ver más <FontAwesomeIcon icon={faCircleInfo} />
          </button>
          <button type="button" className="btn btn-outline-dark">
            Añadir <FontAwesomeIcon icon={faCartShopping} />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;
