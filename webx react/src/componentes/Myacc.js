import './Myacc.css'
import { useEffect, useState } from 'react';
import { getUserFromServer } from '../Axiousserver';

export function Myacc() {
    const [userdata, setUserdata] = useState([]);
    async function getUser() {
        const response = await getUserFromServer();
        setUserdata(response.data);
    }
    useEffect(() => {
        getUser();
    }, []);

    return (
        <>
            <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
                <div className="card p-4">

                    <div className=" image d-flex flex-column justify-content-center align-items-center">

                        <button className="btn btn-secondary">

                            <img src="" width={100} height={100} />
                        </button>
                        {
                            userdata.map((user) => {
                                return (
                                    <><span className="name mt-3">{user.username}</span>
                                        <span className="idd">{user.email}</span>
                                        <div className="d-flex flex-row justify-content-center align-items-center gap-2">

                                            <span className="idd1">{user.phone}</span>

                                        </div>
                                        <div className=" d-flex mt-2">

                                            <button className="btn1 btn-dark">Edit Profile</button>
                                        </div>
                                        <div className=" d-flex mt-2">

                                            <button className="btn1 btn-danger">Delete Profile</button>
                                        </div>
                                    </>

                                )
                            })
                        }


                        {/* <div className="text mt-3">

                            <span>
                                Eleanor Pena is a creator of minimalistic x bold graphics and digital
                                artwork.
                                <br />
                                <br /> Artist/ Creative Director by Day #NFT minting@ with FND night.{" "}
                            </span>
                        </div> */}

                    </div>
                </div>
            </div>


        </>
    )
}
