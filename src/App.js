import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import Works from "./components/pages/Works";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import FruitBox from "./components/pages/FruitBox";
import FruitBoxPina from "./components/pages/FruitBoxPina";
import Luciferina from "./components/pages/Luciferina";
import Pelotero from "./components/pages/Pelotero";
import MensWearhouse from "./components/pages/mens-wearhouse";
import JohnDeere from "./components/pages/johndeere";
import Wordpress from "./components/pages/wordpress";
import TigoFamilia from "./components/pages/TigoFamilia";
import TigoCafe from "./components/pages/TigoCafe";
import Latitud from "./components/pages/Latitud33";
import Dewars from "./components/pages/Dewars";
import Dewars2 from "./components/pages/Dewars2";
import Lucifer from "./components/pages/Lucifer";
import Oikos from "./components/pages/Oikos";
import RealCola from "./components/pages/RealCola";
import CruzDeMalta from "./components/pages/cruzdemalta";
import Volkswagen from "./components/pages/Volkswagen";
import Chandon from "./components/pages/Chandon";
import Dada from "./components/pages/Dada";
import Ayudin from "./components/pages/ayudin";
import Toyota from "./components/pages/Toyota";
import Elena from "./components/pages/Elena";
import Tecnomaster from "./components/pages/Tecnomaster";
import Parval from "./components/pages/Parval";
import Ciel from "./components/pages/Ciel";
import Alamaula1 from "./components/pages/Alamaula1";
import Alamaula2 from "./components/pages/Alamaula2";
import Fox from "./components/pages/fox";
import Aquarius from "./components/pages/Aquarius";
import Peugeot from "./components/pages/peugeot";
import Peugeot2 from "./components/pages/peugeot2";
import Minions from "./components/pages/Minions";
import Nissan from "./components/pages/Nissan";
import Vitamin from "./components/pages/Vitamin";
import Days from "./components/pages/Days";
import Barcelo from "./components/pages/Barcelo";
import Tivalsa from "./components/pages/Tivalsa";
import Modelo from "./components/pages/Modelo";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/barcelo" element={<Barcelo />} />
          <Route path="/fruit-box" element={<FruitBox />} />
          <Route path="/fruit-box-pina" element={<FruitBoxPina />} />
          <Route path="/pelotero" element={<Pelotero />} />
          <Route path="/luciferina" element={<Luciferina />} />
          <Route path="/menswearhouse" element={<MensWearhouse />} />
          <Route path="/johndeere" element={<JohnDeere />} />
          <Route path="/wordpress" element={<Wordpress />} />
          <Route path="/tigofamilia" element={<TigoFamilia />} />
          <Route path="/tigocafe" element={<TigoCafe />} />
          <Route path="/latitud" element={<Latitud />} />
          <Route path="/dewars" element={<Dewars />} />
          <Route path="/dewars2" element={<Dewars2 />} />
          <Route path="/lucifer" element={<Lucifer />} />
          <Route path="/oikos" element={<Oikos />} />
          <Route path="/red-cola" element={<RealCola />} />
          <Route path="/cruz-de-malta" element={<CruzDeMalta />} />
          <Route path="/vw" element={<Volkswagen />} />
          <Route path="/chandon" element={<Chandon />} />
          <Route path="/dada" element={<Dada />} />
          <Route path="/ayudin" element={<Ayudin />} />
          <Route path="/toyota" element={<Toyota />} />
          <Route path="/elena" element={<Elena />} />
          <Route path="/tecnomaster" element={<Tecnomaster />} />
          <Route path="/parval" element={<Parval />} />
          <Route path="/ciel" element={<Ciel />} />
          <Route path="/alamaula1" element={<Alamaula1 />} />
          <Route path="/alamaula2" element={<Alamaula2 />} />
          <Route path="/fox" element={<Fox />} />
          <Route path="/aquarius" element={<Aquarius />} />
          <Route path="/peugeot" element={<Peugeot />} />
          <Route path="/peugeot2" element={<Peugeot2 />} />
          <Route path="/minions" element={<Minions />} />
          <Route path="/nissan" element={<Nissan />} />
          <Route path="/vitamin" element={<Vitamin />} />
          <Route path="/days" element={<Days />} />
          <Route path="/tivalsa" element={<Tivalsa />} />
          <Route path="/modelo" element={<Modelo />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
