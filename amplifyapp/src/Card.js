import React, { useState } from "react";
import Modal from "./Modal"

import boxingImg from "./images/MasonBoxing.JPEG";
import researchImg from "./images/MasonResearch.PNG";
import headshotImg from "./images/MasonHeadshot.JPG";

function Card() {

    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({
        title: "",
        body: ""
    });

    return (
        <>
            <div className="container mt-4">
                <div className="row justify-content-center">

                    <div className="col-12 col-md-4 mb-4">
                        <div className="card h-100">
                            <img className="card-img-top" src={researchImg} alt="Card image cap" />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Research</h5>
                                <p className="card-text">Since 2024, I have worked as an Undergraduate Researcher in the AWeSOME Research Laboratory within the Department of Chemical and Biomedical Engineering at West Virginia University.</p>
                                <button className="btn btn-primary mt-auto" onClick={() => {
                                    setModalData({
                                        title: "Research Experience",
                                        body: "As an undergraduate researcher, I worked in the AWeSOME Research Lab, primarily on a Glaucoma Medication Adherance study, instrumenting prescription and over-the-counter eyedrop medication to determine whether or not patients are squeezing the bottles hard enough to expel eyedrop medication."
                                    });
                                    setShowModal(true);
                                }}>
                                    Learn more!
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 mb-4">
                        <div className="card h-100">
                            <img className="card-img-top" src={headshotImg} alt="Card image cap" />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">About me!</h5>
                                <p className="card-text">Learn more about my hometown, undergraduate studies, and plans for the future!</p>
                                <button className="btn btn-primary mt-auto" onClick={() => {
                                    setModalData({
                                        title: "About Me",
                                        body: "I am a senior biomedical engineering student at West Virginia University, completing that degree with a computer science minor this May, 2026! Upon graduation, I'll be headed to Blacksburg, VA, to pursue my Doctor of Philosophy in biomedical engineering! Originally, I am from a family-owned Christmas Tree Farm in Elderton, PA, making me a fourth-generation Christmas tree farmer."
                                    });
                                    setShowModal(true);
                                }}>
                                    Learn more!
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 mb-4">
                        <div className="card h-100">
                            <img className="card-img-top" src={boxingImg} alt="Card image cap" />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Boxing</h5>
                                <p className="card-text">I've participated in 15 USA Boxing amateur bouts with West Virginia University Club Boxing through the National Collegiate Boxing Association!</p>
                                <button className="btn btn-primary mt-auto" onClick={() => {
                                    setModalData({
                                        title: "Boxing",
                                        body: "The National Collegiate Boxing Association consists of 40 (and expanding more and more every day!) higher education institutions with club boxing teams participating in regional and national competition!"
                                    });
                                    setShowModal(true);
                                }}>
                                    Learn more!
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Modal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                title={modalData.title}
                body={modalData.body}
            />
        </>
    )
}

export default Card;