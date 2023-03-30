import Link from "next/link"
import styles from '@/styles/Home.module.css'

export default function Courses() {
    return (
        <Link href='/courses/[id]' as={'/courses/' + value[0]}>
              <a>{value[1].title}</a>
        </Link>
    )
}