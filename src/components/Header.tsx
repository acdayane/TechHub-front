import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo_techHUB.png";
import { MdOutlineLogout } from "react-icons/md";
import { useGlobalContext } from "../contexts/globalContext";

export default function Header() {
  const { token, setToken } = useGlobalContext();
  console.log(token)

  function logout() {
    console.log('oi')
   
    // if (typeof window !== "undefined") {
    //     console.log("oi")
    //     localStorage.removeItem("token");
    //     //setToken(null);
    //     alert("Até breve!");
    // } else {
    //   alert ("Você não está logado");
    // }

  }

  return (
    <div className={styles.header}>
      <Link href="/">
        <Image src={logo} width={100} height={100} alt="logo" />
      </Link>
      < div className={styles.menu}>
        <Link href={"/schools"}><span>Escolas</span></Link>
        <Link href={"/courses"}><span>Cursos</span></Link>
        <Link href={token!==null?"/community":"/login"}><span>Comunidade</span></Link>
        <Link href={"/technologies/2"}><span>Tecnologias</span></Link>       
        <MdOutlineLogout className={styles.icon} onClick={logout}/>      
      </div>
    </div>
  );
}
