import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CourseByTechnology, Technology } from "@/types/index.types";
import { MdExpandMore } from "react-icons/md";
import Info from "@/components/Info";
import { getTechnologies, getTechnologyById } from "../api/technologies.api";

export default function Technologies() {
  const router = useRouter();
  const id = router.query.id;
  const [coursesByTechnology, setCoursesByTechnology] = useState<CourseByTechnology[] | null>(null);
  const [techList, setTechList] = useState<Technology[] | null>(null);

  useEffect(() => {
    getTechnologyById(Number(id))
      .then((res) => setCoursesByTechnology(res))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    getTechnologies()
      .then((res) => setTechList(res))
      .catch((err) => console.log(err));
  }, []);

  if (coursesByTechnology === null || techList === null) {
    return (
      <div className={styles.container}>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className={styles.main}>
      <div className={styles.containerLeft}>
        <h1>Onde aprender {coursesByTechnology[0].Technologies.name}?</h1>
        {coursesByTechnology.map((c) => (
          <div key={c.id} className={styles.content}>
            <Link
              href={c.Courses.Schools.website}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                className={styles.picture}
                unoptimized
                src={c.Courses.Schools.image}
                alt="School"
                width={100}
                height={100}
                priority
              />
            </Link>
            <h3>{c.Courses.Schools.name}</h3>
            <h2>{c.Courses.Names.name}</h2>
            <h4>{c.Courses.Types.name}</h4>
            <span>Aprenda:</span>
            {c.Courses.TechCourses.map((t, index) => (
              <span key={index}>&nbsp;{t.Technologies.name},</span>
            ))}
            <span>&nbsp; etc.</span>
            <p>{c.Courses.description}</p>
            <p>Carga horária: {c.Courses.durationInHours}h</p>
            <p>Duração: {c.Courses.durationInMonths} meses</p>
            <p>
              R$:{" "}
              {c.Courses.minTuitionFee.toLocaleString("pt-BR", {
                style: "decimal",
                minimumFractionDigits: 2,
              })}{" "}
              -{" "}
              {c.Courses.maxTuitionFee.toLocaleString("pt-BR", {
                style: "decimal",
                minimumFractionDigits: 2,
              })}{" "}
              *
            </p>
            <p>MSC: {c.Courses.msc === true ? "Sim" : "Não"} **</p>
            <MdExpandMore />
          </div>
        ))}
        <h1>Pesquise outra tecnologia:</h1>
        <div className={styles.boxTechnology}>
          {techList.map((t) => (
            <div key={t.id} className={styles.pictureTechnology}>
              <Link href={`/technologies/${t.id}`}>
                <Image
                  unoptimized
                  src={t.image}
                  alt={t.name}
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              </Link>
            </div>
          ))}
        </div>
        <Info />
      </div>
    </div>
  );
}
