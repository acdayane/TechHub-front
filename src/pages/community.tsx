import { useGlobalContext } from "@/contexts/globalContext";
import styles from "@/styles/Home.module.css";
import { Comment, Course } from "@/types/index.types";
import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import photo3 from "../assets/photo3.jpg";
import { postComment } from "./api/comments.api";
import { getCourses } from "./api/courses.api";
import { RxDiscordLogo } from "react-icons/rx";

export default function Community() {
  const [comment, setComment] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [courseSelected, setCourseSelected] = useState(2);
  const [coursesList, setCoursesList] = useState<Course[] | null>(null);
  const { token } = useGlobalContext();
  const router = useRouter();

  useEffect(() => {
    getCourses()
      .then((res) => setCoursesList(res))
      .catch((err) => console.log(err.message));
  }, []);

  function sendComment(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setDisabled(true);

    if (token === null) {
      confirm("Você precisa logar primeiro!");
      router.push("/login");
    } else {
      const post: Comment = {
        content: comment,
        courseId: courseSelected,
        token,
      };

      postComment(post.content, post.courseId, post.token)
        .then(() => {
          alert("Comentário registrado! =]");
          setComment("");
        })
        .catch((err) => {
          console.log(err.message);
          alert("Ops... algo deu errado =[");
        });
    }

    setDisabled(false);
  }

  if (coursesList === null)
    return (
      <div className={styles.container}>
        <p>Loading...</p>
      </div>
    );

  return (
    <main className={styles.main}>
      <Image
        style={{ opacity: "20%" }}
        unoptimized
        src={photo3}
        alt="students"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className={styles.container}>
        <h1>Comunidade</h1>
        <div className={styles.community}>
          <h3>Selecione seu curso</h3>
          <div className={styles.scrollCourses}>
            {coursesList.map((s, index) => (
              <div
                className={styles.course}
                key={index}
                onClick={() => setCourseSelected(s.id)}
                style={{borderRadius: "12px", backgroundColor: s.id === courseSelected ? "#4ccca4" : "" }}
              >
                <Image
                  className={styles.picture}
                  unoptimized
                  src={s.Schools.image}
                  alt="Course"
                  width={50}
                  height={50}
                  priority
                />
                <p>{s.Names.name}</p>
              </div>
            ))}
          </div>
          <h3>Faça sua avaliação</h3>
          <Form onSubmit={sendComment}>
            <textarea
              className={styles.inputComment}
              disabled={disabled}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
            <button type="submit" disabled={disabled}>
              Enviar
            </button>
          </Form>
          <h2>e/ou</h2>
          <Link
            href="https://discord.gg/azazBrJR"
            rel="noopener noreferrer"
            target="_blank"
          >            
            <button className={styles.buttonLogo}>
              <RxDiscordLogo className={styles.iconLogo}/>
              Junte-se a nós no Discord
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
