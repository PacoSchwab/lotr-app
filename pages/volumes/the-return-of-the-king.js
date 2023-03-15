import { volumes } from "../../lib/data";
import Link from "next/link";
import Image from "next/image";

const vol3 = volumes.find(({ slug }) => slug === "the-return-of-the-king");

export default function Volume2() {
  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>The Return Of The Kings</h1>
      <h2>{vol3.description}</h2>
      <ul>
        {vol3.books.map((book) => {
          return (
            <li key={book.ordinal}>
              {book.ordinal} - {book.title}
            </li>
          );
        })}
      </ul>
      <Image
        src={vol3.cover}
        alt="The Fellowship Of The Ring"
        width={140}
        height={230}
      />
      <Link href="/volumes/the-two-towers">Previous Volume</Link>
    </>
  );
}
