import React from 'react'
import './Carousal.css'

export default function Carousal() {
  return (
    <div>
      <div id="carouselExampleIndicators" class="carousel slide position-relative">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://s3-alpha-sig.figma.com/img/fea6/f949/39add110087e5f2fa0b25265bcfb43b7?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MI8g-gOuPCy0~2-KmepI489QQf74hdUyObnVrfbRYy6K2J9Og-SDTpCefe97DgkAMIGW36I7BPiBRDmA-jogJkD1nYeQTdrtmc3RDO0SFdxrx157LXaSoI8jKzf3N-iNn5cr4Y9jLeIIhjP4hmbHZx2vtF64Se~jZ-CEJcLoJ~huUfiu3MenvESHvLJhLVX9ZTuxSa~8BBPcncm76~-LEvtItn2RXmrltoN2V3hLGfexXn5fIGUiDBa4jNgtHevVLN9HQtI~TbmmnRbwKNREMVjLp9zEveoLgj7-NgMHHZvQE4V5TXHh~vxVcjUWjuzx5UDUmn22yky7QSPYboVuBw__" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://s3-alpha-sig.figma.com/img/fea6/f949/39add110087e5f2fa0b25265bcfb43b7?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MI8g-gOuPCy0~2-KmepI489QQf74hdUyObnVrfbRYy6K2J9Og-SDTpCefe97DgkAMIGW36I7BPiBRDmA-jogJkD1nYeQTdrtmc3RDO0SFdxrx157LXaSoI8jKzf3N-iNn5cr4Y9jLeIIhjP4hmbHZx2vtF64Se~jZ-CEJcLoJ~huUfiu3MenvESHvLJhLVX9ZTuxSa~8BBPcncm76~-LEvtItn2RXmrltoN2V3hLGfexXn5fIGUiDBa4jNgtHevVLN9HQtI~TbmmnRbwKNREMVjLp9zEveoLgj7-NgMHHZvQE4V5TXHh~vxVcjUWjuzx5UDUmn22yky7QSPYboVuBw__" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://s3-alpha-sig.figma.com/img/fea6/f949/39add110087e5f2fa0b25265bcfb43b7?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MI8g-gOuPCy0~2-KmepI489QQf74hdUyObnVrfbRYy6K2J9Og-SDTpCefe97DgkAMIGW36I7BPiBRDmA-jogJkD1nYeQTdrtmc3RDO0SFdxrx157LXaSoI8jKzf3N-iNn5cr4Y9jLeIIhjP4hmbHZx2vtF64Se~jZ-CEJcLoJ~huUfiu3MenvESHvLJhLVX9ZTuxSa~8BBPcncm76~-LEvtItn2RXmrltoN2V3hLGfexXn5fIGUiDBa4jNgtHevVLN9HQtI~TbmmnRbwKNREMVjLp9zEveoLgj7-NgMHHZvQE4V5TXHh~vxVcjUWjuzx5UDUmn22yky7QSPYboVuBw__" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  <div className="slidertext position-absolute   ">
  <h1>Interior Studio
  </h1>
  <div className="sliderbtn gap-4 d-flex justify-content-center">
  <button className='btn rounded-pill me-5 ps-3 pe-3 fs-5'>Shop Now</button>
  <button className='btn rounded-pill  ps-3 pe-3 fs-5'>Explore</button>
  </div>
  </div>
</div>
    </div>
  )
}
