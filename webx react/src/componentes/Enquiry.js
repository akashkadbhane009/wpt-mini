import { Component } from "react";
import { validEnquiry } from "./Validation";


export class Enquiry extends Component {



    handlesubmitEnquiry = async (event)=>{
        event.preventDefault();
        validEnquiry();
   }

    render() {
        return (
            <div>
                <main>
                    {/* carosole start */}
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
                                <a href="product.html">
                                    <img src="/img/1660-12.jpg" className="d-block w-100" alt="..." />
                                </a>
                                <div className="carousel-caption d-none d-md-block text-light fw-bold">
                                    <h3>GET THE BEST</h3>
                                    <p className="fs-5">
                                        QUALITY PROFESSIONAL WEBSITE @ JUST RS. 700 IN 12 HOURS.
                                    </p>
                                    {/* <button class="Sbutton" style="border: solid 1px ;">button1</button>
                        <button class="Sbutton" style="border: solid 1px ;">button1</button>
                        <button class="Sbutton" style="border: solid 1px ;">button1</button> */}
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval={1500}>
                                <a href="product.html">
                                    <img src="/img/1660-122.jpg" className="d-block w-100" alt="..." />
                                </a>
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
                                <a href="product.html">
                                    <img src="/img/1660-1 (9).jpg" className="d-block w-100" alt="..." />
                                </a>
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
                    {/* carasole end */}
                    <div className="bgfeed d-flex align-baseline   " style={{ padding: 250 }}>
                        {/* <button data-bs-toggle="modal" data-bs-target="#enquiryModal" href="">enquiry</button> */}
                        <div
                            className="card"
                            style={{ width: "70rem", borderRadius: 0, border: "solid 3px" }}
                        >
                            {/* <img src="..." class="card-img-top" alt="..."> */}
                            <div className="card-body ">
                                <div className="text-center" style={{ fontSize: "3rem" }}>
                                    Enquiry
                                </div>
                                <p className="text-center card-text" style={{ fontSize: "1.2rem" }}>
                                    Click below to get start with. Our execetive will be soon in touch
                                    with you.
                                </p>
                                <a
                                    style={{ display: "flow-root", border: "solid 1px" }}
                                    className="text-center a1  "
                                    data-bs-toggle="modal"
                                    data-bs-target="#enquiryModal"
                                    href=""
                                >
                                    Get free call back
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* enquirey modal */}
                    <div>
                        <div
                            className="modal fade"
                            id="enquiryModal"
                            tabIndex={-1}
                            aria-labelledby="enquiryModalLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog">
                                <div className="modal-content " style={{ borderRadius: 0 }}>
                                    <div className="modal-header">
                                        <h1
                                            className="modal-title fs-7 "
                                            style={{ fontWeight: "bold" }}
                                            id="LoginModalLabel"
                                        >
                                            Enquiry
                                        </h1>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        />
                                    </div>
                                    <div className="modal-body">
                                        <form name="Eform" onSubmit={this.handlesubmitEnquiry}>
                                            <div className="mb-2">
                                                <label htmlFor="exampleInputEmail1" className="form-label">
                                                    Email address
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="Eemail"
                                                    name="EMail"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Email"
                                                  
                                                />
                                                <div id="emailHelp" className="form-text" />
                                            </div>
                                            <div className="mb-2">
                                                <label className="form-label">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    id="Ephone"
                                                    name="PNo"
                                                    placeholder="10-digit Phone Number"
                                                    required=""
                                                />
                                            </div>
                                            <div className="mb-2">
                                                <label className="form-label">Support Language</label>
                                                <select name="lang" className="form-control" >
                                                    <option value="">Please choose an option</option>
                                                    <option value="Marathi">Marathi</option>
                                                    <option value="Hindi">Hindi</option>
                                                    <option value="English">English</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                            <div className="mb-2">
                                                <label className="form-label">Type of Website</label>
                                                <select name="web" className="form-control">
                                                    <option value="">Please choose an option</option>
                                                    <option value="Business Website">Business Website</option>
                                                    <option value="eCommerce Website">eCommerce Website</option>
                                                    <option value="Custome Website">Custome Website</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                            <div className="mb-2">
                                                <label className="form-label">Comment or Messege</label>
                                                <textarea
                                                    className="form-control"
                                                    id="Etext"
                                                    name="msg"
                                                    cols={30}
                                                    rows={2}
                                                    placeholder="Write here..."
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <div className="mb-2 form-check">
                                                <input type="checkbox" className="form-check-input" />
                                                <label className="form-check-label" htmlFor="exampleCheck1">
                                                    Check me out <a href="">Terms &amp; Privacy.</a>
                                                </label>
                                            </div>
                                            <button
                                            type="submit"
                                            className=" Sbutton"
                                            style={{ border: "solid 1px" }}
                                           
                                        >
                                            submit
                                        </button>
                                        </form>
                                        
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="Sbutton"
                                            style={{ border: "solid 1px" }}
                                            data-bs-dismiss="modal"
                                        >
                                            close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* enquiry modal end */}
                </main>

            </div>
        )
    }
}