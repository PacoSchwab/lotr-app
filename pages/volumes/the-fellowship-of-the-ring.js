import { volumes } from "../../lib/data";
import Link from "next/link";
import Image from "next/image";

const vol1 = volumes.find(({ slug }) => slug === "the-fellowship-of-the-ring");

export default function Volume1() {
  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>The Fellowship Of The Ring</h1>
      <h2>{vol1.description}</h2>
      <ul>
        {vol1.books.map((book) => {
          return (
            <li key={book.ordinal}>
              {book.ordinal} - {book.title}
            </li>
          );
        })}
      </ul>
      <Image
        src={vol1.cover}
        alt="The Fellowship Of The Ring"
        width={140}
        height={230}
      />
      <Link href="/volumes/the-two-towers">Next Volume</Link>
    </>
  );
}
