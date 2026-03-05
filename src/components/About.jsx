import devAct from '../assets/develpor-activity.png'

function About(){
    return(
        <section className="about" id='about'>
            <section className="about-image">
                <img src={devAct} alt="" className='DevImg'/>
            </section>
            <section className="about-conent">
                <h2>About Snap SummaryAI</h2>
                <p className="section-subtitle">Revolutionizing how you consume information</p>

                <article className="about-text">
                    <p>Snap SummaryAI was founded in 2025 with the mission to help people save time and improve comprehension through AI-powered text summarization. Our platform leverages Google's cutting-edge Gemini technology to deliver the most accurate summaries available.</p>
                    
                    <p>Unlike basic summarization tools, Snap SummaryAI understands context, maintains nuance, and preserves key information while dramatically reducing reading time. Whether you're a student, researcher, journalist, or busy professional, our tool helps you process information more efficiently.</p>
                    
                <div className="stats">
                    <div className="stat-item">
                        <div className="stat-number">10,000+</div>
                        <div className="stat-label">Daily Summaries</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">98%</div>
                        <div className="stat-label">Accuracy Rate</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">50+</div>
                        <div className="stat-label">Supported Languages</div>
                    </div>
                </div>
                </article>
            </section>
        </section>
    )
}

export default About;