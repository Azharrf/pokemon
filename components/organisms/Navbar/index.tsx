import Link from 'next/link';
import Button from '../../atoms/Button';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container d-flex justify-content-between align-items-center flex-rows">
        <div className="navbar-brand">
          <Link href="/">
            <img src="./images/logo-pokemon.png" alt="Logo" />
          </Link>
        </div>
        <div className="button-group">
          <Button classBtn="btn btn-add" icon="bx bx-plus" link="tambah" />
        </div>
      </div>
    </nav>
  )
}
