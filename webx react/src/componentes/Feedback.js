import { Component } from "react";
import { saveFeedback } from '../Axiousserver';
import { getFeedback } from "../Axiousserver";

export class Feedback extends Component {

    constructor() {
        super();
        this.state = {
            formData: [],
            sendData:{}


        }
        
    }
    handlechangefeedback = (event) => {
        this.setState(
            {

                sendData: {
                    ...this.state.sendData,
                    [event.target.name]: event.target.value,
                    
            }
            }
        );
    }
    handlesubmitfeedback = async (event) => {
        // event.preventDefault();
        const response = await saveFeedback(this.state.sendData);
        console.log(response.data);

        if (response.status === 200) {
             this.setState( {sendData: { name: '', email: '', feedback: '' } });

            alert("Submitted succescfully!!!")
        }
       
    }

    async componentDidMount() {
        var data = await getFeedback();
        console.log(data.data);
        this.setState({formData: data.data });
        // console.log(formData);
    }
 
    render() {
        return (
            <div>
                <main className="bgfeed">
                    <div className="container p-4 " style={{ textAlign: "center" }}>
                        <div className="feedbackdiv " style={{ fontSize: "3rem" }}>
                            <p>Your feedbacks are welcome.</p>
                            {/* Trigger the modal with a button */}
                            {/* Button trigger modal */}
                            <button
                                type="button"
                                className="Sbutton  w-25 "
                                style={{ border: "solid 1px" }}
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                feedback
                            </button>
                        </div>
                        {/* Modal */}
                        <div
                            className="modal fade"
                            id="exampleModal"
                            tabIndex={-1}
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog">
                                <div className="modal-content" style={{ borderRadius: 0 }}>
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-7 fw-bold" id="exampleModalLabel">
                                            Feedback Form
                                        </h1>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        />
                                    </div>
                                    <div className="modal-body" style={{ textAlign: "left" }}>
                                        <form onSubmit={this.handlesubmitfeedback} name="feedbackform"  >
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputName" className="form-label">
                                                    Name
                                                </label>
                                                <input value={this.state.formData.name}
                                                    type="text"
                                                    className="form-control"
                                                    id="exampleInputName"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Full Name"
                                                    name="name"
                                                    required onChange={this.handlechangefeedback}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">
                                                    email address
                                                </label>
                                                <input value={this.state.formData.email}
                                                    type="email"
                                                    name="email"
                                                    className="form-control"
                                                    id="exampleInputEmail1"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Email"
                                                    required onChange={this.handlechangefeedback}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputFeedback" className="form-label">
                                                    Feedback
                                                </label>
                                                <textarea value={this.state.formData.feedback}
                                                    name="feedback"
                                                    id=""
                                                    cols={30}
                                                    rows={2}
                                                    placeholder="Write here..."
                                                    required onChange={this.handlechangefeedback}
                                                    defaultValue={""}
                                                // 5,24,288 char default

                                                />
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
                    <div className="p-5 text-center" >
                        <h2 className="text-light fw-bold">Real Client Testimonials</h2>
                        <h3 className="text-light pb-5">
                            Don't take our word for it, here's what our clients say:
                        </h3>
                        <div className="row">
                        {this.state.formData.map((feedback) => {
                            return(
                                  <div  className="col-lg-4 mb-4 d-flex justify-content-evenly text-center">
                                <div className="card p-3" style={{ width: "20rem" }}>
                                    <div className="card-body text-center">
                                        <h5 className="card-title fw-bold">{feedback.name}</h5>
                                        <p className="card-text">{feedback.feedback}</p>
                                    </div>
                                </div>
                                &nbsp;
                            </div>
                            )
                          
                        })}
                        </div>
                        {/* <div className="card p-3" style={{ width: "20rem" }}>
                                <img
                                    src="http://source.unsplash.com/200x200/?IT-Company"
                                    className="card-img-top, circleimg"
                                    alt="..."
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title fw-bold">Everwin Technology, Pune</h5>
                                    <p className="card-text">
                                        Got the Website Live within 12 Hours. Excellent Work with affordable
                                        rates. We have done 2 websites for our different companies in no
                                        more than 2 days.
                                    </p>
                                </div>
                            </div>
                            &nbsp; */}
                        {/* <div className="card p-3 " style={{ width: "20rem" }}>
                                <img
                                    src="http://source.unsplash.com/200x200/?man"
                                    className="card-img-top, circleimg"
                                    alt="..."
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title fw-bold">Rajat Mittal</h5>
                                    <p className="card-text">
                                        Very good support provided by the team. i really appreciate the
                                        efforts done by the team.. Very good service. Would rate it 5out of
                                        5
                                    </p>
                                </div>
                            </div>
                            &nbsp; */}
                        {/* <div className="card p-3" style={{ width: "20rem" }}>
                                <img
                                    src="http://source.unsplash.com/200x200/?woman"
                                    className="card-img-top, circleimg"
                                    alt="..."
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title fw-bold">Mary Rose</h5>
                                    <p className="card-text">
                                        Very reasonable price compared in market…. awsome customer
                                        experience… cheers guys
                                    </p>
                                </div>
                            </div> */}

                        {/* <br /> */}
                        {/* <div className="col d-flex justify-content-evenly pb-3">
                            <div className="card p-3" style={{ width: "20rem" }}>
                                <img
                                    src="http://source.unsplash.com/200x200/?Helth-care"
                                    className="card-img-top, circleimg"
                                    alt="..."
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title fw-bold">Yellow Care Hospital</h5>
                                    <p className="card-text">
                                        Successfully completed my website which is amazing work. I like it,
                                        very helpful and ready to solve your write-ups issue. I will give
                                        them 100/100
                                    </p>
                                </div>
                            </div>
                            &nbsp;
                            <div className="card p-3" style={{ width: "20rem" }}>
                                <img
                                    src="http://source.unsplash.com/200x200/?stock-market"
                                    className="card-img-top, circleimg"
                                    alt="..."
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title fw-bold ">Stock bricks traders</h5>
                                    <p className="card-text">
                                        I got the website designed for my start-up from Zauca. From the day
                                        I decided to go with Zauca…Read More on Google Reviews
                                    </p>
                                </div>
                            </div>
                            &nbsp;
                            <div className="card p-3" style={{ width: "20rem" }}>
                                <img
                                    src="http://source.unsplash.com/200x200/?start-up"
                                    className="card-img-top, circleimg"
                                    alt="..."
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title fw-bold">KSA Expoters</h5>
                                    <p className="card-text">
                                        Amazing experience..very helpful and the most important, real time
                                        services are here.Thanks for the support
                                    </p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </main>

            </div>
        )
    }
}