import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSlidersH, faBolt, faLanguage, faFileUpload, faChartLine, faHistory } from '@fortawesome/free-solid-svg-icons'

function Feature(){
    return(
        <section className="features" id='features'>
            <h2>Advancef Features</h2>
            <section className="features-grid">
                <article className="feature-card">
                    <div className="feature-icon">
                        <FontAwesomeIcon icon={faSlidersH} size="2x" className="featuresIcon"/>
                    </div>
                    <h3>Customizable Output</h3>
                    <p>Adjust summary length from brief to detailed and select tone (casual, professional, or neutral).</p>
                </article>
                <article className="feature-card">
                    <div className="feature-icon">
                        <FontAwesomeIcon icon={faBolt} size="2x" className="featuresIcon"/>
                    </div>
                    <h3>Lightning Fast</h3>
                    <p>Process documents up to 10,000 words in seconds with our optimized AI pipeline.</p>
                </article>
                <article className="feature-card">
                    <div className="feature-icon">
                        <FontAwesomeIcon icon={faLanguage} size="2x" className="featuresIcon"/>
                    </div>
                    <h3>Multilingual Support</h3>
                    <p>Supports over 50 languages including Spanish, French, German, and Chinese.</p>
                </article>
                <article className="feature-card">
                    <div className="feature-icon">
                        <FontAwesomeIcon icon={faFileUpload} size="2x" className="featuresIcon"/>
                    </div>
                    <h3>File Uploads</h3>
                    <p>Upload PDFs, Word docs, or text files directly for summarization (coming soon).</p>
                </article>
                <article className="feature-card">
                    <div className="feature-icon">
                        <FontAwesomeIcon icon={faChartLine} size="2x" className="featuresIcon"/>
                    </div>
                    <h3>Key Points Extraction</h3>
                    <p>Get bullet points of the most important concepts from your text.</p>
                </article>
                <article className="feature-card">
                    <div className="feature-icon">
                        <FontAwesomeIcon icon={faHistory} size="2x" className="featuresIcon"/>
                    </div>
                    <h3>History & Save</h3>
                    <p>Save your summaries and access them later (requires account).</p>
                </article>
            </section>
        </section>
    );
}

export default Feature;