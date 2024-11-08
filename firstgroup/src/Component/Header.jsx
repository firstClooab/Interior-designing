import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className='container-fluid '>
        <header>
      <nav class="navbar navbar-expand-lg bg-body-tertiary ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">TheFurniture</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul class="navbar-nav gap-5 ">
        <li class="nav-item">
          <a class="nav-link active fs-5" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active fs-5" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active fs-5" href="#">Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active fs-5" href="#">Contact Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active fs-5" href="#">Blog</a>
        </li>
        <li class="nav-item ms-5">
          <a class="nav-link active fs-5" href="#"><i class="bi bi-person"></i></a>
        </li> <li class="nav-item">
          <a class="nav-link active fs-5" href="#"><i class="bi bi-cart"></i></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>
    </div>
  )
}
