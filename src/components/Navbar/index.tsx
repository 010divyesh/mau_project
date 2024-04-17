import Image from 'next/image'

export default function Nav() {
  return (
    <ul className="nav bg-dark justify-content-center">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/">
          <Image
            src="/img/file.png"
            width={70}
            height={45}
            alt=""
          />
        </a>
      </li>
    </ul>
  );
}
