import { useRouter } from "next/router";
import Link from "next/link";
import { volumes } from "../../lib/data";
import Image from "next/image";

export default function Volume() {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);

  const currentVolume = volumes.find((volume) => {
    return volume.slug === slug;
  });

  const volumeIndex = volumes.findIndex((volume) => {
    return volume.slug === currentVolume.slug;
  });

  if (!currentVolume) {
    return null;
  }

  const { title, description, cover, books } = currentVolume;

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <ul>
        {books.map((book) => {
          return (
            <li key={book.ordinal}>
              {book.ordinal} - {book.title}
            </li>
          );
        })}
      </ul>
      <Image src={cover} alt={title} width={140} height={230} />
      {volumeIndex > 0 ? (
        <Link href={`/volumes/${volumes[volumeIndex - 1].slug}`}>
          Previous Volume
        </Link>
      ) : null}
      {volumeIndex < 2 ? (
        <Link href={`/volumes/${volumes[volumeIndex + 1].slug}`}>
          Next Volume
        </Link>
      ) : null}
    </>
  );
}
