export default function Nav() {
    return (
      <ul className="nav bg-dark justify-content-center mb-2">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page">
            <img
              src="./icon/trace.svg"
              style={{
                height: "45px",
                width: "95px",
              }}
            />
          </a>
        </li>
      </ul>
    );
  }