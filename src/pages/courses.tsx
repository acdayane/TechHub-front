import Link from "next/link"

export default function Courses() {
    return (
        <Link href='/courses/[id]' as={'/courses/' + value[0]}>
              <a>{value[1].title}</a>
        </Link>
    )
}