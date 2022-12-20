import { Link } from 'react-router-dom'
import './style.css'

export function Home() {
    return (
        <div>
            <main>
                {/* carosoul start */}
                <div
                    id="carouselExampleCaptions"
                    className="carousel slide "
                    data-bs-ride="carousel"
                >
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={0}
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        />
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={1}
                            aria-label="Slide 2"
                        />
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={2}
                            aria-label="Slide 3"
                        />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item  active" data-bs-interval={1500}>
                            <Link to={'/Products'} >
                                <img src="/img/1660-12.jpg" className="d-block w-100" alt="..." />
                            </Link>
                            <div className="carousel-caption d-none d-md-block text-light fw-bold">
                                <h3>GET THE BEST</h3>
                                <p className="fs-5">
                                    QUALITY PROFESSIONAL WEBSITE @ JUST RS. 7000 IN 12 HOURS.
                                </p>
                                {/* <button class="Sbutton" style="border: solid 1px ;">button1</button>
                        <button class="Sbutton" style="border: solid 1px ;">button1</button>
                        <button class="Sbutton" style="border: solid 1px ;">button1</button> */}
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval={1500}>
                            <Link to={'/Products'}>
                                <img src="/img/1660-122.jpg" className="d-block w-100" alt="..." />
                            </Link>
                            <div className="carousel-caption d-none d-md-block text-light fw-bold">
                                <h3>JOIN US</h3>
                                <p className="fs-5">
                                    Live Chat, Lighting Speed, Resposive Design, Payment Getway, Social Media, 24*7 Support.
                                </p>
                                {/* <button class="Sbutton" style="border: solid 1px ;">button1</button>
                        <button class="Sbutton" style="border: solid 1px ;">button1</button>
                        <button class="Sbutton" style="border: solid 1px ;">button1</button> */}
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval={1500}>
                            <Link to={'/Enquiry'}>
                                <img src="/img/1660-1 (9).jpg" className="d-block w-100" alt="..." />
                            </Link>
                            <div className="carousel-caption d-none d-md-block text-light fw-bold">
                                <h3>GST & Establishment Registration</h3>
                                <p className="fs-5">
                                Online Documents submission and hassle-free GST Registration in 3 days.
                                </p>
                                {/* <button class="Sbutton" style="border: solid 1px ;">button1</button>
                        <button class="Sbutton" style="border: solid 1px ;">button1</button>
                        <button class="Sbutton" style="border: solid 1px ;">button1</button> */}
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                {/* portfolio cards */}
                <div className="bgfeed p-5">
                    <h1 className="text-center text-white fw-bold ">Portfolio</h1>
                    <p className="text-center text-light">
                        With the Internet spreading like wildfire and reaching every part of our
                        daily life, more and more traffic is directed to websites in search for
                        information
                    </p>
                    <div className="d-flex justify-content-evenly my-2">
                        <div className="card" style={{ width: "20rem" }}>
                            <img src="/img/p1z.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4>Empirical Strategy, USA</h4>
                                <br />
                                <p className="card-text text-start">
                                    Corporate Strategy in Lakecity, USA, Business Unit Strategy, Lake
                                    City, Privaty Equity Business Website, Strategy Realisation Website
                                    Design, Business Analytics Website Design in USA.
                                </p>
                            </div>
                        </div>
                        <div className="card" style={{ width: "20rem" }}>
                            <img src="/img/p2z.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4>Ria Institute, Bangalore</h4>
                                <br />
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </p>
                            </div>
                        </div>
                        <div className="card" style={{ width: "20rem" }}>
                            <img src="/img/p3z.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4>XRM ROI, Australia</h4>
                                <br />
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-evenly my-4 ">
                        <div className="card" style={{ width: "20rem" }}>
                            <img src="/img/p4z.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4>Richal Forex, New Zeland</h4>
                                <br />
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </p>
                            </div>
                        </div>
                        <div className="card" style={{ width: "20rem" }}>
                            <img src="/img/p5z.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5>Engless Concepts – Tanzania</h5>
                                <br />
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </p>
                            </div>
                        </div>
                        <div className="card" style={{ width: "20rem" }}>
                            <img src="/img/p6z.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5>eCommerce Website Demo</h5>
                                <br />
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}