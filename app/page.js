import Image from "next/image";
import { Navbar } from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";



export default function Home() {
  return (
  
    <>
    <Navbar></Navbar>
    <Header></Header>
    <About></About>
    <Work></Work>
    </>
  );
}
