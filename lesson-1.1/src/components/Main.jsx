import img1 from "../assets/images/avatar.png"
import img2 from "../assets/images/card-imh.png"


const Main = () => {
    return (
        <>

            {/* ----- main start ----- */}

            <main>

                {/* ----- hero start ----- */}

                <div className="section-hero">
                    <div className="container">
                        <div className="hero">

                            <div className="hero--box">
                                <h1 className="hero--heading">Hi, I am John, Creative Technologist</h1>
                                <p className="hero-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                                    officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                <button className="hero-btn">Download Resume</button>
                            </div>
                            <img src={img1} alt="customer" className="hero-img"></img>
                        </div>
                    </div>
                </div>


                {/* ----- hero end ----- */}



                {/* ----- posts star ----- */}


                <section className="section-posts">
                    <div className="container">
                        <div className="posts">

                            <h2 className="posts-heading">Recent posts</h2>
                            <a href="#" className="posts-link">View all</a>

                            <div className="posts-box">

                                <div className="post">
                                    <h3 className="post-title">Making a design system from scratch</h3>
                                    <p className="post-data">12 Feb 2020     |      Design, Pattern</p>
                                    <p className="post-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                </div>

                                <div className="post">
                                    <h3 className="post-title">Creating pixel perfect icons in Figma</h3>
                                    <p className="post-data">12 Feb 2020     |      Figma, Icon Design</p>
                                    <p className="post-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                </div>



                            </div>

                        </div>
                    </div>
                </section>


                {/* ----- posts star ----- */}



                {/* ----- Futured start ----- */}


                <section className="section-futured">
                    <div className="container">
                        <div className="futured">
                            <h3 className="futured-title">Featured works</h3>

                            <div className="cards">

                                <div className="card">
                                    <img src={img2} alt="" className="card-img" />
                                    <div className="card-info">
                                        <h3 className="card-info-title">Designing Dashboards</h3>

                                        <div className="card-info-data">
                                            <h4 className="card-info-date">2020</h4>
                                            <p className="card-info-text">Dashboard</p>
                                        </div>

                                        <p className="card-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                                    </div>
                                </div>

                                <span className="line"></span>

                                <div className="card">
                                    <img src={img2} alt="" className="card-img" />
                                    <div className="card-info">
                                        <h3 className="card-info-title">Vibrant Portraits of 2020</h3>

                                        <div className="card-info-data">
                                            <h4 className="card-info-date">2018</h4>
                                            <p className="card-info-text">Illustration</p>
                                        </div>

                                        <p className="card-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                                    </div>
                                </div>

                                <span className="line"></span>


                                <div className="card">
                                    <img src={img2} alt="" className="card-img" />
                                    <div className="card-info">
                                        <h3 className="card-info-title">36 Days of Malayalam type</h3>

                                        <div className="card-info-data">
                                            <h4 className="card-info-date">2018</h4>
                                            <p className="card-info-text">Typography</p>
                                        </div>

                                        <p className="card-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                                    </div>
                                </div>

                                <span className="line"></span>


                            </div>
                        </div>
                    </div>
                </section>


                {/* ----- Futured end ----- */}


            </main>

            {/* ----- main end ----- */}
        </>
    )
}

export default Main;