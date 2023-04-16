import redirectToGitHub from '@/components/Auth'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { signUp, signIn } from './api/community.api'
import { useGlobalContext } from '../contexts/globalContext'
import { useRouter } from 'next/router'

export default function Login() {
    const [registredUser, setRegistredUser] = useState(true);
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [disabled, setDisabled] = useState(false);
    const { token, setToken } = useGlobalContext();
    const router = useRouter();
  
    function handleSignIn(e: React.ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setDisabled(true);
    
        signIn(email, password)
        .then((res) => {
            setToken(res);
            if (typeof window !== "undefined") {
                localStorage.setItem("token", JSON.stringify(res))
            };
            router.push('/community');
        })
        .catch((err) => {
            console.log(err.message);
            setDisabled(false);
            toast('Ops... algo deu errado =[');
        })
    }

    function handleSignUp(e: React.ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
console.log(password, confirmPassword)
        if (password !== confirmPassword) {
            toast('A senha e sua confirmação devem ser iguais');
            setPassword("");
            setConfirmPassword("");
            return
        }

        setDisabled(true);
    
        signUp(userName, email, password)
        .then((res) => {
            console.log(res)
            toast('Usuário cadastrado com sucesso!');//navigate
        })
        .catch((err) => {
            console.log(err.message);
            setDisabled(false);
            alert('deu ruim')
            toast('Ops... algo deu errado =[');
        })
    }

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                {registredUser === true &&
                    <>
                        <h1>Login</h1>
                        <Form onSubmit={handleSignIn}>
                            <input
                                disabled={disabled}
                                type="email"
                                placeholder="e-mail"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                disabled={disabled}
                                type="password"
                                placeholder="senha"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button type='submit' disabled={disabled}>Enviar</button>
                            <button disabled={disabled} onClick={redirectToGitHub}>Logar com GitHub</button>
                            <button
                                type='submit'
                                disabled={disabled}
                                onClick={() => setRegistredUser(!registredUser)}
                            >
                                Primeiro acesso? Cadastre-se!
                            </button>
                        </Form>
                    </>                        
                }
                {registredUser === false &&
                    <>
                        <h1>Cadastro</h1>
                        <Form onSubmit={handleSignUp}>
                            <input
                                disabled={disabled}
                                type="username"
                                placeholder="nome"
                                onChange={(e) => setUserName(e.target.value)}
                                required
                            />
                            <input
                                disabled={disabled}
                                type="email"
                                placeholder="e-mail"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                disabled={disabled}
                                type="password"
                                placeholder="senha"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <input
                                disabled={disabled}
                                type="password"
                                placeholder="confirmação de senha"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                            <button type='submit' disabled={disabled}>Enviar</button>
                            <button onClick={() => setRegistredUser(!registredUser)}>Já se cadastrou?</button>
                        </Form>
                    </>                        
                }                        
            </div>           
        </main>
    )
}   