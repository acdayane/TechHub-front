import Image from "next/legacy/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getCourses } from "./api/courses.api";
import { Course } from "@/types/index.types";
import { MdExpandMore } from "react-icons/md";
import Info from "@/components/Info";

export default function Courses() {
  const [coursesList, setCoursesList] = useState<Course[] | null>(null);
  const [courseSelected, setCourseSelected] = useState(0);

  useEffect(() => {
    getCourses()
      .then((res) => setCoursesList(res))
      .catch((err) => console.log(err));
  }, []);

  if (coursesList === null) {
    return (
      <div className={styles.main}>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className={styles.main}>
      <div className={styles.containerLeft}>
        <h1>Cursos</h1>
        {coursesList.map((c) => (
          <div key={c.id} className={styles.content}>
            <Link
              href={c.Schools.website}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                className={styles.picture}
                unoptimized
                src={c.Schools.image}
                alt="School"
                width={100}
                height={100}
                priority
              />
            </Link>
            <h3>{c.Schools.name}</h3>
            <h2>{c.Names.name}</h2>
            <h3>{c.Types.name}</h3>
            <span>Aprenda:</span>
            {c.TechCourses.map((t) => (
              <span key={t.id}>&nbsp;{t.Technologies.name},</span>
            ))}
            <span>&nbsp; etc.</span>
            <p>{c.description}</p>
            <p>Carga horária: {c.durationInHours}h</p>
            <p>Duração: {c.durationInMonths} meses</p>
            <p>
              R$:{" "}
              {c.minTuitionFee.toLocaleString("pt-BR", {
                style: "decimal",
                minimumFractionDigits: 2,
              })}{" "}
              -{" "}
              {c.maxTuitionFee.toLocaleString("pt-BR", {
                style: "decimal",
                minimumFractionDigits: 2,
              })}{" "}
              *
            </p>
            <p>MSC: {c.msc === true ? "Sim" : "Não"} **</p>
            <MdExpandMore
              className={styles.icon}
              onClick={() => setCourseSelected(c.id)}
            />
            <div
              className={styles.contentComments}
              style={{
                display: c.id === courseSelected ? "flex" : "none",
              }}
            >
              {c.Comments?.map((cm, index) => (
                <div key={index} className={styles.contentComment}>
                  <span>
                    <strong>{cm.Users.name}:&nbsp;</strong>
                  </span>
                  <span>{cm.content}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
        <Info />
      </div>
    </div>
  );
}
