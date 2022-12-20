

export function Contactus() {
    return (
        <div>
            <main className="bgfeed ">
                <div className="p-4" style={{ textAlign: "center" }}>
                    <div className="contactushead fw-bold">
                        <h1>Contact Us</h1>
                        <h3>
                            Please feel free to contact us &amp; we would be happy to assist you!
                        </h3>
                    </div>
                    <br />
                    <div className="contact-text text-light">
                        <p className="fw-bold ">| E-mail ID |</p>
                        <p>For Sale: Vibha@webx.com</p>
                        <p>For Support: Basant@webx.com</p>
                        <br />
                        <p className="fw-bold">| Contact Numbers |</p>
                        <p>Sales: 1800-212-4567</p>
                        <p> Support: 080-6777-0000 </p>
                        <br />
                        {/* <p class="fw-bold">| Contact Address |</p>
                          <p>Sales: 1800-212-4567</p>
                          <p> Support: 080-6777-0000 </p> */}
                    </div>
                </div>
            </main>

        </div>
    )
}