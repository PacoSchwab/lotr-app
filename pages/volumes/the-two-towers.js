import { volumes } from "../../lib/data";
import Link from "next/link";
import Image from "next/image";

const vol2 = volumes.find(({ slug }) => slug === "the-two-towers");

export default function Volume3() {
  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>The Two Towers</h1>
      <h2>{vol2.description}</h2>
      <ul>
        {vol2.books.map((book) => {
          return (
            <li key={book.ordinal}>
              {book.ordinal} - {book.title}
            </li>
          );
        })}
      </ul>
      <Image
        src={vol2.cover}
        alt="The Fellowship Of The Ring"
        width={140}
        height={230}
      />
      <Link href="/volumes/the-fellowship-of-the-ring">Previous Volume</Link>
      <br />
      <Link href="/volumes/the-return-of-the-king">Next Volume</Link>
    </>
  );
}
