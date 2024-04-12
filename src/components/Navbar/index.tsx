"use client";

export default function Nav() {
  return (
    <ul className="nav bg-dark justify-content-center ">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/">
          <img
            src="/img/mau.jpg"
            alt="/"
            style={{
              height: "53px",
              width: "95px",
            }}
          />
        </a>
      </li>
    </ul>
  );
}
