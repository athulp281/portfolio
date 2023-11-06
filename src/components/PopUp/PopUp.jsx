import React from "react";
import "../../assets/Css/popup.css";
import { useState } from "react";
import { useEffect } from "react";

export default function PopUp({ title, content, status, setStatus }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [activeAnimation, setActiveAnimation] = useState("");

    const openModal = (animation) => {
        setModalVisible(true);
        setActiveAnimation(animation);
        document.body.classList.add("modal-active");
    };

    const closeModal = () => {
        setModalVisible(false);
        setActiveAnimation("");
        document.body.classList.remove("modal-active");
    };
    useEffect(() => {
        if (status == true) {
            openModal("one");
        } else if (modalVisible == false) {
            setStatus(false);
            closeModal();
        }
    }, [status]);

    return (
        <div>
            <div
                id="modal-container"
                className={modalVisible ? activeAnimation : ""}
            >
                <div className="modal-background">
                    <div className="modal">
                        <div
                            style={{
                                display: "flex",
                                padding: 0,
                                margin: 0,
                                justifyContent: "flex-end",
                            }}
                        >
                            <button
                                onClick={() => {
                                    setActiveAnimation("");
                                    document.body.classList.remove(
                                        "modal-active"
                                    );
                                    setStatus(false);
                                    setModalVisible(false);
                                }}
                            >
                                X
                            </button>
                        </div>
                        <h2>{title}</h2>
                        {/* <p>fill below..</p> */}
                        <div>{content}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
