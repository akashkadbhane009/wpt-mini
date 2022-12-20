import { Component } from 'react';
import './style.css'
// import Link from 'react-dom';
import { Link } from 'react-router-dom'
import { saveUser } from '../Axiousserver';
import { validLogin, validSignup } from './Validation';
// import { validateSignIn } from './SignInValidationyoy';
export class Navigation extends Component {
    constructor() {
        super();
        this.state = {
            formData: {},


        }
    }

    handleChange = (event) => {
        this.setState(
            {

                formData: {
                    ...this.state.formData,
                    [event.target.name]: event.target.value
                }
            }
        );
    }
    // handlesubmitsignup = async (event) => {
    //     event.preventDefault();
    //         const response = await saveUser(this.state.formData);
    //         console.log(response.data);
    //         if (response.status == 200) {
    //             this.setState({ formData: { username: '', email: '', phone: '', password: '', repassword: '' } });
    //             // this.setState({formData:{email:''}});
    //             // this.setState({formData:{phone:''}});
    //             // this.setState({formData:{password:''}});
    //             // this.setState({formData:{repassword:''}});
    //             alert("Submitted succescfully!!!")
    //         }
    // }
  
    handlesubmitsignup = async (event) => {
        event.preventDefault();
        var v = validSignup();
        console.log(v);
        if (v === true) {
            const response = await saveUser(this.state.formData);
            console.log(response.data);
            if (response.status == 200) {
                this.setState({ formData: { username: '', email: '', phone: '', password: '', repassword: '' } });
                // this.setState({formData:{email:''}});
                // this.setState({formData:{phone:''}});
                // this.setState({formData:{password:''}});
                // this.setState({formData:{repassword:''}});
                alert("Submitted succescfully!!!")
            }
        }
    }
    handlesubmitlogin = async (event)=>{
        event.preventDefault();
        validLogin();
   }


    render() {
        return (
            <div>
                <div className="fttr">
                    <nav className="navbar navbar-expand-lg bg-light ">
                        <div className="container-fluid">
                            <Link className="navbar-brand brndfs " to={'/'} ><b><b>WeB
                                X </b></b></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link active" to={'/'} >Home</Link>
                                        {/* <a className="nav-link active" aria-current="page" href="index.html">Home</a> */}
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to={'/values'}>values</Link>

                                        {/* <a className="nav-link" href="Values.html">values</a> */}
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to={'/About'}>About</Link>
                                        {/* <a className="nav-link" href="about.html">About</a> */}
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to={'/products'}>products</Link>

                                        {/* <a className="nav-link" href="product.html">products</a> */}
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to={'/enquiry'}>enquiry</Link>
                                        {/* <a className="nav-link" href="enquiery.html">enquiry</a> */}
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to={'/feedback'}>feedback</Link>
                                        {/* <a className="nav-link" href="feedback.html">feedback</a> */}
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to={'/contactus'}>contact us</Link>
                                        {/* <a className="nav-link" href="contactus.html">contact us</a> */}
                                    </li>
                                </ul>
                                <div>
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item"><Link className="nav-link" data-bs-toggle="modal" data-bs-target="#LoginModal">login</Link></li>

                                        <li className="nav-item"><Link className="nav-link" data-bs-toggle="modal" data-bs-target="#SignupModal">signup</Link>
                                        </li>
                                        <li className="nav-item myacclogo"><Link className="nav-link" to={'/Myacc'}><i
                                            className='far'>&#xf2bd;</i></Link></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="modal fade" id="LoginModal" tabIndex="-1" aria-labelledby="LoginModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content modalbr" >
                            <div className="modal-header">
                                <h1 className="modal-title fs-7 modalheading" id="LoginModalLabel">
                                    Log in</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form name="RegForm" onSubmit={this.handlesubmitlogin} method="get">
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">email
                                            address</label>
                                        <input type="email" name="EMail" className="form-control" id="Lemail" aria-describedby="emailHelp"
                                             />
                                        <div id="emailHelp" className="form-text"></div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label">password</label>
                                        <input type="password" className="form-control" id="Lpassword" name="Password"  />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" for="exampleCheck1">stay log in.</label>
                                    </div>
                                    <button type="submit" className=" Sbutton" name="submit">submit</button>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="Sbutton" data-bs-dismiss="modal">close</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="SignupModal" tabIndex="-1" aria-labelledby="SignupModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content modalbr">
                            <div className="modal-header">
                                <h1 className="modal-title fs-7 modalheading " id="SignupModalLabel">Sign up</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form name="SignupForm" onSubmit={this.handlesubmitsignup} method="get">
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">username</label>
                                        <input type="text" value={this.state.formData.username} className="form-control" id="username" aria-describedby="textHelp" name="username"
                                          onChange={this.handleChange} />

                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">email
                                            address</label>
                                        <input type="email" value={this.state.formData.email} className="form-control" id="email" aria-describedby="emailHelp" name="email"
                                            onChange={this.handleChange} />

                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">phone</label>
                                        <input type="tel" value={this.state.formData.phone} className="form-control" id="phone" name="phone" onChange={this.handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">password</label>
                                        <input type="password"  value={this.state.formData.password} className="form-control" id="password" name="password" onChange={this.handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">re-enter password</label>
                                        <input type="password"  value={this.state.formData.repassword} className="form-control" id="repassword" name="repassword" />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox"  className="form-check-input" id="exampleCheck1" onChange={this.handleChange} />
                                        <label className="form-check-label" htmlFor="exampleCheck1">check me
                                            out <a href="">terms&privacy.</a></label>
                                    </div>
                                    <button type="submit" className="Sbutton" name="submit" >submit</button>
                                </form>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="Sbutton" data-bs-dismiss="modal">close</button>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        )
    }
}