import { Container } from "./styles";
import edit from "../../assets/edit.svg";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
export function FoodCardAdmin({ meal }) {
  const navigate = useNavigate();
  const mealUrl = `${api.defaults.baseURL}/files/${meal.image}`;

  async function handleDetails() {
    navigate(`/mealdetails/${meal.id}`);
  }

  async function handleEdit() {
    console.log(meal.id)
    navigate(`/editmeal/${meal.id}`); // arrumar aqui
  }

  return (
    <Container>
      <div className="card">
        <div className="edit">
          <img onClick={handleEdit} src={edit} alt="logo edição"></img>
        </div>

        <div className="mealphoto">
          <img src={mealUrl} alt={`Foto da refeição ${meal.title}`}></img>
        </div>
        <a onClick={handleDetails} className="mealName">
          {meal.title}<FiArrowRight style={{ marginLeft: "2px" }} />
        </a>
        <label className="mealDesc desapear">{meal.description}</label>
        <p className="mealPrice">
          {`R$ ${meal.price.toLocaleString("pt-br", {
            minimumFractionDigits: 2,
          })}`}
        </p>
      </div>
    </Container>
  );
}
