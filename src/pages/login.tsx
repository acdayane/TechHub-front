import redirectToGitHub from "@/components/Auth";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { signUp, signIn } from "./api/users.api";
import { useGlobalContext } from "../contexts/globalContext";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillGithub } from "react-icons/ai";
import Image from "next/legacy/image";
import photo4 from "../assets/photo4.jpg";

export default function Login() {
  const [registeredUser, setRegisteredUser] = useState(true);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [disabled, setDisabled] = useState(false);
  const { setToken, setUser } = useGlobalContext();
  const router = useRouter();

  function handleSignIn(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setDisabled(true);

    signIn(email, password)
      .then((res) => {
        setToken(res.token);
        setUser(res);
        if (typeof window !== "undefined") {
          localStorage.setItem("token", JSON.stringify(res.token));
        }
        router.push("/community");
      })
      .catch((err) => {
        console.log(err.message);
        setDisabled(false);
        alert("Ops... algo deu errado =[");
      });

    setDisabled(false);
  }

  function checkPassword(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("A senha e sua confirmação devem ser iguais");
      setPassword(" ");
      setConfirmPassword("");
    } else {
      handleSignUp(e);
    }
  }

  function handleSignUp(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setDisabled(true);

    signUp(userName, email, password)
      .then((res) => {
        setRegisteredUser(true);
        console.log(res);
        alert("Usuário cadastrado com sucesso!");
      })
      .catch((err) => {
        console.log(err.message);
        alert("deu ruim");
        toast("Ops... algo deu errado =[");
      });

    setDisabled(false);
  }

  return (
    <main className={styles.main}>
      <Image
        style={{ opacity: "20%" }}
        unoptimized
        src={photo4}
        alt="students"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className={styles.container}>
        {registeredUser === true && (
          <>
            <h1>Login</h1>
            <Form onSubmit={handleSignIn}>
              <input
                disabled={disabled}
                type="email"
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                disabled={disabled}
                type="password"
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" disabled={disabled}>
                Enviar
              </button>
              <button
                style={{display: "flex", justifyContent: "center", alignItems: "center"}}
                className="login"
                disabled={true}
                onClick={redirectToGitHub}
              >
              <AiFillGithub className={styles.iconLogo}/>
                Autenticar com GitHub (em breve)
              </button>
              <button
                disabled={disabled}
                onClick={() => setRegisteredUser(false)}
              >
                Primeiro acesso? Cadastre-se!
              </button>
            </Form>
          </>
        )}
        {registeredUser === false && (
          <>
            <h1>Cadastro</h1>
            <Form onSubmit={checkPassword}>
              <input
                disabled={disabled}
                type="username"
                placeholder="Nome"
                onChange={(e) => setUserName(e.target.value)}
                required
              />
              <input
                disabled={disabled}
                type="email"
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                disabled={disabled}
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                disabled={disabled}
                type="password"
                placeholder="Confirmação de senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button type="submit" disabled={disabled}>
                Enviar
              </button>
              <button onClick={() => setRegisteredUser(true)}>
                Já se cadastrou?
              </button>
            </Form>
          </>
        )}
      </div>
    </main>
  );
}
