import { Container } from "./styles";
import { Header } from "../../components/Header";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { Footer } from "../../components/Footer";
import { FoodCard } from "../../components/FoodCard";
import { FoodCardAdmin } from "../../components/FoodCardAdmin";
import topHomeImage from "../../assets/topMainImage.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import "swiper/css/navigation";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useNavigate } from "react-router-dom";

export function Home() {
  const [refeicoes, setRefeicoes] = useState([]);
  const [search, setSearch] = useState("");
  const [sobremesas, setSobremesas] = useState([]);
  const [bebidas, setBebidas] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMeals() {
      const responseRefeicoes = await api.get(
        `/meals?category_id=1&search=${search}`
      );
      const responseSobremesas = await api.get(
        `/meals?category_id=2&search=${search}`
      );
      const responseBebidas = await api.get(
        `/meals?category_id=3&search=${search}`
      );
      setSobremesas(responseSobremesas.data);
      setBebidas(responseBebidas.data);
      setRefeicoes(responseRefeicoes.data);
    }
    fetchMeals();
  }, [search]);

  // if (user.admin) {
  //   return (
  //     <Container>
  //       <HeaderAdmin setSearch={setSearch} />
  //       {/* header admn */}
  //       <div className="pageHome">
  //         <div className="head">
  //           <div className="HomeADS">
  //             <div className="imgSide">
  //               <img src={topHomeImage} alt="Imagem de comidas saborosas"></img>
  //             </div>

  //             <div className="textSide">
  //               <h2>Sabores inigualáveis</h2>
  //               <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
  //             </div>
  //           </div>
  //         </div>

  //         <div className="content">
  //           <div className="refeicoes">
  //             <h3>Refeições</h3>
  //             <Swiper
  //               modules={[Navigation, Pagination, Scrollbar, A11y]}
  //               spaceBetween={100}
  //               slidesPerView="auto"
  //               style={{ margin: "0 5vw", paddingRight: "28vw" }}
  //               className="swiper"
  //               navigation
  //               pagination={{ clickable: true }}
  //               scrollbar={{ draggable: true }}
  //             >
  //               {refeicoes.map((meal) => (
  //                 <SwiperSlide key={String(meal.id)}>
  //                   <FoodCardAdmin meal={meal} />
  //                   {/* // if adm */}
  //                 </SwiperSlide>
  //               ))}
  //             </Swiper>
  //           </div>
  //         </div>
  //         <div className="PratosPrincipais">
  //           <h3>Sobremesas</h3>
  //           <Swiper
  //             modules={[Navigation, Pagination, Scrollbar, A11y]}
  //             spaceBetween={100}
  //             slidesPerView="auto"
  //             style={{ margin: "0 5vw", paddingRight: "28vw" }}
  //             className="swiper"
  //             navigation
  //             pagination={{ clickable: true }}
  //             scrollbar={{ draggable: true }}
  //           >
  //             {/* // if adm */}

  //             {sobremesas.map((meal) => (
  //               <SwiperSlide key={String(meal.id)}>
  //                 <FoodCardAdmin
  //                   meal={meal}
  //                   onClick={() => handleDetails(meal.id)}
  //                 />
  //               </SwiperSlide>
  //             ))}
  //           </Swiper>
  //         </div>
  //         <div className="Bebidas">
  //           <h3>Bebidas</h3>
  //           <Swiper
  //             modules={[Navigation, Pagination, Scrollbar, A11y]}
  //             spaceBetween={100}
  //             slidesPerView="auto"
  //             style={{ margin: "0 5vw", paddingRight: "28vw" }}
  //             className="swiper"
  //             navigation
  //             pagination={{ clickable: true }}
  //             scrollbar={{ draggable: true }}
  //           >
  //             {/* // if adm */}

  //             {bebidas.map((meal) => (
  //               <SwiperSlide key={String(meal.id)}>
  //                 <FoodCardAdmin
  //                   meal={meal}
  //                   onClick={() => handleDetails(meal.id)}
  //                 />
  //               </SwiperSlide>
  //             ))}
  //           </Swiper>
  //         </div>
  //         <Footer />
  //       </div>
  //     </Container>
  //   );
  // } else {
  //   return (
  //     <Container>
  //       <Header setSearch={setSearch} />
  //       {/* // if adm */}
  //       <div className="pageHome">
  //         <div className="head">
  //           <div className="HomeADS">
  //             <div className="imgSide">
  //               <img src={topHomeImage} alt="Imagem de comidas saborosas"></img>
  //             </div>

  //             <div className="textSide">
  //               <h2>Sabores inigualáveis</h2>
  //               <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
  //             </div>
  //           </div>
  //         </div>

  //         <div className="content">
  //           <div className="refeicoes">
  //             <h3>Refeições</h3>
  //             <Swiper
  //               modules={[Navigation, Pagination, Scrollbar, A11y]}
  //               spaceBetween={100}
  //               slidesPerView="auto"
  //               style={{ margin: "0 5vw", paddingRight: "28vw" }}
  //               className="swiper"
  //               navigation
  //               pagination={{ clickable: true }}
  //               scrollbar={{ draggable: true }}
  //             >
  //               {refeicoes.map((meal) => (
  //                 <SwiperSlide key={String(meal.id)}>
  //                   <FoodCard meal={meal} />
  //                   {/* // if adm */}
  //                 </SwiperSlide>
  //               ))}
  //             </Swiper>
  //           </div>
  //         </div>
  //         <div className="PratosPrincipais">
  //           <h3>Sobremesas</h3>
  //           <Swiper
  //             modules={[Navigation, Pagination, Scrollbar, A11y]}
  //             spaceBetween={100}
  //             slidesPerView="auto"
  //             style={{ margin: "0 5vw", paddingRight: "28vw" }}
  //             className="swiper"
  //             navigation
  //             pagination={{ clickable: true }}
  //             scrollbar={{ draggable: true }}
  //           >
  //             {/* // if adm */}

  //             {sobremesas.map((meal) => (
  //               <SwiperSlide key={String(meal.id)}>
  //                 <FoodCard
  //                   meal={meal}
  //                   onClick={() => handleDetails(meal.id)}
  //                 />
  //               </SwiperSlide>
  //             ))}
  //           </Swiper>
  //         </div>
  //         <div className="Bebidas">
  //           <h3>Bebidas</h3>
  //           <Swiper
  //             modules={[Navigation, Pagination, Scrollbar, A11y]}
  //             spaceBetween={100}
  //             slidesPerView="auto"
  //             style={{ margin: "0 5vw", paddingRight: "28vw" }}
  //             className="swiper"
  //             navigation
  //             pagination={{ clickable: true }}
  //             scrollbar={{ draggable: true }}
  //           >
  //             {/* // if adm */}

  //             {bebidas.map((meal) => (
  //               <SwiperSlide key={String(meal.id)}>
  //                 <FoodCard
  //                   meal={meal}
  //                   onClick={() => handleDetails(meal.id)}
  //                 />
  //               </SwiperSlide>
  //             ))}
  //           </Swiper>
  //         </div>
  //         <Footer />
  //       </div>
  //     </Container>
  //   );
  // }


  return (
    <Container>
      {user.admin ? (
        <HeaderAdmin setSearch={setSearch} />
      ) : (
        <Header setSearch={setSearch} />
      )}
      <div className="pageHome">
        <div className="head">
          <div className="HomeADS">
            <div className="imgSide">
              <img src={topHomeImage} alt="Imagem de comidas saborosas"></img>
            </div>

            <div className="textSide">
              <h2>Sabores inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="refeicoes">
            <h3>Refeições</h3>

            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={100}
              slidesPerView="auto"
              style={{ margin: "0 5vw", paddingRight: "28vw" }}
              className="swiper"
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              {refeicoes.map((meal) => (
                < SwiperSlide key={String(meal.id)}>
                  {user.admin ? (
                    <FoodCardAdmin meal={meal} onClick={() => handleDetails(meal.id)} />
                  ) : (
                    <FoodCard meal={meal} onClick={() => handleDetails(meal.id)} />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="PratosPrincipais">
          <h3>Sobremesas</h3>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={100}
            slidesPerView="auto"
            style={{ margin: "0 5vw", paddingRight: "28vw" }}
            className="swiper"
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {/* // if adm */}

            {sobremesas.map((meal) => (
              <SwiperSlide key={String(meal.id)}>
                {user.admin ? (
                  <FoodCardAdmin meal={meal} onClick={() => handleDetails(meal.id)} />
                ) : (
                  <FoodCard meal={meal} onClick={() => handleDetails(meal.id)} />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="Bebidas">
          <h3>Bebidas</h3>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={100}
            slidesPerView="auto"
            style={{ margin: "0 5vw", paddingRight: "28vw" }}
            className="swiper"
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >

            {bebidas.map((meal) => (
              <SwiperSlide key={String(meal.id)}>
                {user.admin ? (
                  <FoodCardAdmin meal={meal} onClick={() => handleDetails(meal.id)} />
                ) : (
                  <FoodCard meal={meal} onClick={() => handleDetails(meal.id)} />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Footer />
      </div>
    </Container >
  );

}
