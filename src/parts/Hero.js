import React from 'react'
import ImageHero from 'assets/images/img-hero.jpg'
import Logo from 'assets/images/icons/icon-logo.svg'
import Button from 'elements/Button'

export default function Hero(props) {
    function showMostPicked() {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        })
    }
    return (
        <section className="container pt-4">
            <div className="row align-items-center">
                <div className="col-auto pr-5" style={{ width: 530 }}>
                    <h1 className="font-weight-bold line-height-1 mb-3">
                        The travel on you <br />
                        Go travelling now.
                    </h1>
                    <p className="mb-5 font-weight-light text-gray-500 w-75">
                        We serve all the thing that yout need while on vacation.
                        you don't need to worry about the practice.
                    </p>
                    <Button
                        className="btn px-5"
                        hasShadow
                        isPrimary
                        onClick={showMostPicked}
                    >
                        Where is it
                    </Button>
                    {/* Awal Gambar */}
                    <div className="row mt-5" >
                        {/* Gambar 1 */}
                        <div className="col-auto" style={{ marginRight: 35 }}>
                            <img
                                width="36"
                                height="36"
                                src={Logo}
                                alt={`${props.data.travelers} Travelers`}
                            />
                            <h6 className="mt-3">
                                {props.data.travelers}{" "}
                                <span className="text-gray-500 font-weight-light">
                                    Travelers
                                </span>
                            </h6>
                        </div>
                        {/* Gambar 2 */}
                        <div className="col-auto" style={{ marginRight: 35 }}>
                            <img
                                width="36"
                                height="36"
                                src={Logo}
                                alt={`${props.data.treasures} Treasures`} />
                            <h6 className="mt-3">
                                {props.data.treasures}{" "}
                                <span className="text-gray-500 font-weight-light">
                                    Treasures
                                </span>
                            </h6>
                        </div>
                        {/* Gambar 2 */}
                        <div className="col-auto" style={{ marginRight: 35 }}>
                            <img
                                width="36"
                                height="36"
                                src={Logo}
                                alt={`${props.data.travelers} Travelers`} />
                            <h6 className="mt-3">
                                {props.data.travelers}{" "}
                                <span className="text-gray-500 font-weight-light">
                                    Travelers
                                </span>
                            </h6>
                        </div>
                    </div>
                </div>
                {/* Gambar Hero */}
                <div className="col-6 pl-5">
                    <div style={{ width: 520, height: 410 }}>
                        <img
                            src={ImageHero}
                            alt="Mountain View"
                            className="img-fluid position-absolute"
                            style={{ margin: '-25px 0 0 -25px', zIndex: 1 }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
