import { Container } from "./styles";
import { useState } from "react";
import optionsPhonesvg from "../../assets/optionsPhone.svg";
import hexagonalLogo from "../../assets/hexagonalLogo.svg";
import orderlogo from "../../assets/orderlogo.svg";
import { SideBar } from "../SideBar";
import { Input } from "../Input";
import { RedButton } from "../RedButton";
import { FiSearch, FiLogOut } from "react-icons/fi";
import { useAuth } from "../../hooks/auth";

export function Header({ setSearch }) {
  const { signOut, user } = useAuth();

  const [sidebar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sidebar);

  return (
    <Container>
      <div className="header">
        <div className="optionsPhone">
          <img
            src={optionsPhonesvg}
            alt="Logo para sideBar"
            className="LogoForSideBar"
            onClick={showSideBar}
          />

          {sidebar && <SideBar setSearch={setSearch} active={setSideBar} />}
        </div>

        <div className="logoFoodsExplorer">
          <img src={hexagonalLogo} alt="logo foodexplorer" />
          <h1>food explorer</h1>
        </div>
        <div className="searchBar desapear">
          <Input
            className="searchInput"
            placeholder="Busque por pratos ou ingredientes"
            icon={FiSearch}
            onChange={(e) => setSearch(e.target.value)}
          ></Input>
        </div>

        <div className="ordersBTN">
          <p className="desktopDesapear">0</p>

          <img src={orderlogo} alt="order Logo" className="imageorderlogo" />
        </div>
        <div className=" desapear">
          <RedButton title="pedidos (0)" icon={orderlogo}></RedButton>
        </div>
        <div className="logOutLogo desapear">
          <a onClick={signOut}>
            {" "}
            <FiLogOut></FiLogOut>
          </a>
        </div>
      </div>
    </Container>
  );
}
