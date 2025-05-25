import heroImg from '../assets/hero-img.svg';

function Hero(){
    return(
        <section className="hero">
            <article className="hero-content">
                <h2>Transform Long Texts into Concise Summaries</h2>
                <p>Powered by Google's Gemini AI for accurate and insightful summarization</p>
            </article>
            <article className="hero-image">
                <img src={heroImg} alt="" srcSet="" />
            </article>
        </section>
    )
}

export default Hero;