import "./Meeting.css";
const Meeting = () =>{
        const design = (
                <>
                 <div className="Video-box">
                        <video width="100%" autoPlay muted loop>
                                <source src="video.mp4.mp4"></source>
                        </video>
                        <div className="box-shadow text-white d-flex justify-content-center align-items-center">
                                <div>
                                       <h2>Introduction</h2> 
                                       <h1 className="mb-3 mt-3 large-header">AN NEW REACTJS BATCH</h1>
                                       <h2>Hello coder</h2>
                                       <button className="btn mt-3 py-3 px-4 fw-bold btn-primary">LEARN MORE</button>
                                </div>
                        </div>
                </div>
                </>
        )
        
return design;
};

export default Meeting;