import { type } from "os"

export type Technology = {
    id: number,
    name: string,
    image: string,
    Technologies: {
        name: string
    }
}

export type Course = {
    id: number,
    nameId: number,
    schoolId: number,
    typeId: number,
    description: string,
    durationInHours: number,
    durationInMonths: number,
    minTuitionFee: number,
    maxTuitionFee: number,
    msc: boolean,
    createdAt: string,
    updatedAt: string,
    Schools: School,
    Names: Name,
    Types: Type,
    TechCourses: Technology[]
}

export type School = {
    id: number,
    name: string,
    image: string,
    website: string,
    createdAt: string,
    updatedAt: string,
    Courses: Course[]
}

export type Name = {
    id: number,
    name: string
}

export type Type = {
    id: number,
    name: string
}

export type TypeCourse = {
    id: number,
    courseId?: Course[],
    technologyId?: Technology[]
}