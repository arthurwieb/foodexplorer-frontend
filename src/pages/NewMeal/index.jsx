import { Container, Form } from "./styles";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { Footer } from "../../components/Footer";
import { TxtArea } from "../../components/TxtArea";
import { RedButton } from "../../components/RedButton";
import { Input } from "../../components/Input";
import { InputCategory } from "../../components/InputCategory";
import { MealIngredient } from "../../components/MealIngredient";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiUpload } from "react-icons/fi";
import { api } from "../../services/api";

export function NewMeal() {
  // const options = ["Refeições", "Sobremesas", "Bebidas"];


  const [search, setSearch] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState();
  const [category_id, setCategory] = useState();
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  var [price, setPrice] = useState("");
  const [newIngredient, setNewIngredient] = useState("");

  const navigate = useNavigate();

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
    setNewIngredient("");
  }

  function handleAddIngredient() {
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleAddImage(e) {
    const file = e.target.files[0];
    setImageFile(file);
  }

  async function handleSaveMealSubmit(e) {
    e.preventDefault();

    if (newIngredient) {
      return alert(
        "Você deixou um ingrediente para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio"
      );
    }
    setIsSubmitting(true);
    if (
      !title ||
      !description ||
      !category_id ||
      !price ||
      !ingredients ||
      !imageFile
    ) {
      alert("Todos os campos são obrigatórios!");

      setIsSubmitting(false);
    } else {
      price = price.replace("R$ ", "").replace(",", ".");
      const mealPrev = {
        title,
        description,
        category_id,
        price,
        ingredients,
        imageFile,
      };

      const meal = JSON.stringify(mealPrev);

      try {

        const fileUploadForm = new FormData();

        fileUploadForm.append("image", imageFile);
        fileUploadForm.append("meal", meal);

        const response = await api.post("/meals", fileUploadForm, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        alert("A comida foi cadastrada com sucesso!");
        setIsSubmitting(false);

        navigate("/");
      } catch (error) {
        console.log(error);
        alert("Ocorreu um erro ao cadastrar a comida!");
        setIsSubmitting(false);
      }
    }
  }

  return (
    <Container>
      <HeaderAdmin setSearch={setSearch} />
      <div className="Form">
        <Link to="/">
          <FiArrowLeft /> Voltar
        </Link>
        <h1>Novo prato</h1>
        <div>
          <Form onSubmit={handleSaveMealSubmit}>
            <div className="infoSide">
              <div className="topInfoSide">
                <div>
                  <p>Imagem do prato</p>

                  <label htmlFor="avatar">
                    <FiUpload />
                    Selecione a imagem
                    <div>
                      <input
                        id="avatar"
                        type="file"
                        onChange={handleAddImage}
                      ></input>
                    </div>
                  </label>
                </div>
                <div>
                  <p>Nome</p>
                  <Input
                    difColor
                    placeholder="Ex: Salada Cezar"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div>
                  <p>Categoria</p>

                  {/* <InputCategory
                    difColor
                    onSelectionChange={(e) => setCategory(parseInt(e.target.value))}
                  /> */}
                  <InputCategory
                    difColor
                    onSelectionChange={(value) => setCategory(value)}
                  />
                </div>
              </div>
              <div className="bottomInfoSide">
                <div>
                  <p>Ingredientes</p>
                  <div className="ingredients bckgrndColor">
                    {ingredients.map((ingredient, index) => (
                      <MealIngredient
                        key={String(index)}
                        value={ingredient}
                        onClick={() => handleRemoveIngredient(ingredient)}
                      ></MealIngredient>
                    ))}

                    <MealIngredient
                      placeholder="Adicionar"
                      isNew
                      value={newIngredient}
                      onChange={(e) => setNewIngredient(e.target.value)}
                      onClick={handleAddIngredient}
                    ></MealIngredient>
                  </div>
                </div>
                <div className="price">
                  <p>Preço</p>

                  <Input
                    type="text"
                    placeholder="R$ 00,00"
                    mask="R$ 00,00"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    difColor
                  />
                </div>
              </div>
            </div>
            <div>
              <p>Descrição</p>
              <TxtArea
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              />
            </div>

            <div className="saveBtn">
              <RedButton
                title={isSubmitting ? "Carregando..." : "Novo prato"}
              ></RedButton>
            </div>
          </Form>
        </div>
      </div>

      <Footer />
    </Container>
  );
}
