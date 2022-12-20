import './style.css'
import {Link} from 'react-router-dom';
export function About() {
    return (
        <div>
            <main className="bgfeed">
                <div className="p-4" style={{ textAlign: "center" }}>
                    <div className="contactushead fw-bold">
                        <h1>India’s No 1 Website Design Company</h1>
                        <h3>Successfully Delivered 5800+ Websites</h3>
                        <h5>| Live Chat | Lighting Speed | Resposive Design | Payment Getway | Social Media | 24*7 Support |</h5>
                        <p className="fw-light">
                            We offers wide range of Website design services in India including
                            business website designing, personal blogs, web portals designing, micro
                            websites, flash websites, e-commerce websites designing, static
                            websites, and dynamic websites across all categories &amp; sectors.
                        </p>
                    </div>
                    <br />
                </div>
                {/* carousel start */}
                {/* <div
                    id="carouselExampleInterval"
                    className="carousel slide px-5 "
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval={10000}>
                            <img
                                src="http://source.unsplash.com/1980x720?android"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item" data-bs-interval={2000}>
                            <img
                                src="http://source.unsplash.com/1980x720?seo"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="http://source.unsplash.com/1980x720?socialmedia"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="http://source.unsplash.com/1980x720?marketing"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="http://source.unsplash.com/1980x720?digital-marketing"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleInterval"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleInterval"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div> */}
                {/* carasol end */}
                {/* cards start */}
                <br />
                <br />
                <div>
                    <div className="p-5 m-5 row ">
                        <div className="col-lg-6 ">
                            <div className="card " style={{ width: "500px" }}>
                                <div className="card-body ">
                                    <h5 className="fw-bold text-decoration-underline">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                            className="bi bi-globe-central-south-asia"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM4.882 1.731a.482.482 0 0 0 .14.291.487.487 0 0 1-.126.78l-.291.146a.721.721 0 0 0-.188.135l-.48.48a1 1 0 0 1-1.023.242l-.02-.007a.996.996 0 0 0-.462-.04 7.03 7.03 0 0 1 2.45-2.027Zm-3 9.674.86-.216a1 1 0 0 0 .758-.97v-.184a1 1 0 0 1 .445-.832l.04-.026a1 1 0 0 0 .152-1.54L3.121 6.621a.414.414 0 0 1 .542-.624l1.09.818a.5.5 0 0 0 .523.047.5.5 0 0 1 .724.447v.455a.78.78 0 0 0 .131.433l.795 1.192a1 1 0 0 1 .116.238l.73 2.19a1 1 0 0 0 .949.683h.058a1 1 0 0 0 .949-.684l.73-2.189a1 1 0 0 1 .116-.238l.791-1.187A.454.454 0 0 1 11.743 8c.16 0 .306.084.392.218.557.875 1.63 2.282 2.365 2.282a.61.61 0 0 0 .04-.001 7.003 7.003 0 0 1-12.658.905Z" />
                                        </svg>
                                        &nbsp;WEBSITE DESIGN
                                    </h5>
                                    <p className="card-text">
                                        Here at COMPANY Website Design we have provided website design
                                        to more than 5,900+ businesses across hundreds of industry
                                        sectors. Based in the IT hub of India, we pride ourselves on our
                                        exquisite website design skills. A creative Agency with top marks
                                        for impressive website design india. We believe aesthetics is
                                        important in website design and so far are considered a leading
                                        website design agency in india.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-6">
                            <div className="card " style={{ width: "500px" }}>
                                <div className="card-body">
                                    <h5 className="fw-bold text-decoration-underline">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                            className="bi bi-phone"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                        </svg>
                                        &nbsp;ANDROID APPLICATION DEVELOPMENT
                                    </h5>
                                    <p className="card-text">
                                        COMPANY is a leading Android application development company
                                        across the globe. Considering today’s scenario, 70% of world’s
                                        smart phones run on Android platform and that only indicates how
                                        vital to have Android application for your business. We will
                                        provide a quick analysis and free proposal for it. Don’t worry, it
                                        is secure and confidential. As a leading Android App Development
                                        Company, we ensure that you will get high quality android
                                        application by which you can expand your business.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 m-5 row">
                        <div className="col-lg-6">
                            <div className="card  " style={{ width: "500px" }}>
                                <div className="card-body">
                                    <h5 className="fw-bold text-decoration-underline">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                            className="bi bi-binoculars"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V2.5zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5h-1zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V4zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V3zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14z" />
                                        </svg>
                                        &nbsp;DIGITAL MARKETING
                                    </h5>
                                    <p className="card-text">
                                        Digital Marketing (SEO) India An honest &amp; results-driven
                                        digital marketing agency. COMPANY is a digital marketing agency
                                        based in India. Our honest and transparent digital marketing work
                                        speaks for itself. We deliver a personal, passionate &amp;
                                        tailored service to each and every one of our clients, big or
                                        small, based in india or abroad.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-6">
                            <div className="card " style={{ width: "500px" }}>
                                <div className="card-body">
                                    <h5 className="fw-bold text-decoration-underline">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                            className="bi bi-badge-ad"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="m3.7 11 .47-1.542h2.004L6.644 11h1.261L5.901 5.001H4.513L2.5 11h1.2zm1.503-4.852.734 2.426H4.416l.734-2.426h.053zm4.759.128c-1.059 0-1.753.765-1.753 2.043v.695c0 1.279.685 2.043 1.74 2.043.677 0 1.222-.33 1.367-.804h.057V11h1.138V4.685h-1.16v2.36h-.053c-.18-.475-.68-.77-1.336-.77zm.387.923c.58 0 1.002.44 1.002 1.138v.602c0 .76-.396 1.2-.984 1.2-.598 0-.972-.449-.972-1.248v-.453c0-.795.37-1.24.954-1.24z" />
                                            <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" />
                                        </svg>
                                        &nbsp;AD NETWORK SETUP
                                    </h5>
                                    <p className="card-text">
                                        COMPANY will assist you setup Ad Networks which can help you
                                        earn money, If you have a website, a blog, then Ad Network has
                                        money to give you. It’s called Ad Serving, and it’s a program that
                                        literally makes everyone a winner; provided you follow the terms
                                        and conditions of Ad Network religiously.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* cards end */}
                <div className=" aboutbutton  d-flex justify-content-between align-items-center">
                    <div className=" fw-bold">
                        <h3>
                            Get your website up &amp; running in just <b> 60 minutes.</b>
                        </h3>
                    </div>
                    <div>
                        <Link style={{ border: "solid 1px" }}
                            className="text-center a1  " to={'/enquiry'}>Get free call back</Link>
                        
                    </div>
                </div>
            </main>

        </div>
    )
}