import { introduction } from "../../lib/data";
import Link from "next/link";
import { volumes } from "../../lib/data";
import { useRouter } from "next/router";

export default function Overview() {
  const router = useRouter();

  function getRandomElement(volumes) {
    return volumes[Math.floor(Math.random() * volumes.length)];
  }

  const randomVolume = getRandomElement(volumes).slug;

  return (
    <>
      <h1>Lord of the rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map(({ slug, title }) => {
          return (
            <li key={slug}>
              <Link href={`/volumes/${slug}`}>{title}</Link>
            </li>
          );
        })}
        {/* <li>
          <Link href="/volumes/the-fellowship-of-the-ring">
            The Fellowship of the Ring
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-two-towers">The Two Towers</Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">
            The Return of the King
          </Link>
        </li> */}
      </ul>
      <button
        type="button"
        onClick={() => {
          router.push(`/volumes/${randomVolume}`);
        }}
      >
        Get a random volume 😍
      </button>
    </>
  );
}
