export type Technology = {
    id: number,
    name: string,
    image: string
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
    Schools: School[]
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
