import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard, faRuler, faCommentDots, faMagic, faFileAlt, faMagicWandSparkles, faCopy, faDownload } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const [summaryData, setSummaryData] = useState("");
  const [summarizedData, setSummarizedData] = useState("");
  const [summaryLength, setSummaryLength] = useState("medium");
  const [tone, setTone] = useState("neutral");
  const [isLoading, setIsLoading] = useState(false);

  const generatePrompt = () => {
  // Determine length requirements based on selection
  let lengthRequirement;
  switch (summaryLength) {
    case "short":
      lengthRequirement = "Provide exactly 5 concise bullet points";
      break;
    case "medium":
      lengthRequirement = "Provide exactly 10 well-structured bullet points";
      break;
    case "long":
      lengthRequirement = "Provide exactly 15 detailed bullet points";
      break;
    default:
      lengthRequirement = "Provide exactly 10 well-structured bullet points";
  }

  // Determine tone instruction
  const toneInstruction = `Use a ${tone} tone throughout the summary. ${
    tone === "professional" 
      ? "Maintain formal language and avoid contractions." 
      : tone === "casual" 
        ? "You can use conversational language and contractions." 
        : "Maintain a balanced, objective tone."
  }`;

  return `**Summary Instructions:**
  
1. ${lengthRequirement}
2. ${toneInstruction}
3. Each bullet point should be a complete sentence
4. Prioritize the most important information
5. Maintain original meaning without distortion
6. Avoid introductory phrases like "The text discusses..."

**Format Requirements:**
- Start each bullet point with "•"
- Use clear, simple language
- Keep bullet points roughly equal in length
- Ensure logical flow between points

**Content to Summarize:**
"${summaryData}"

**Final Notes:**
- Do not include disclaimers about being an AI
- Do not add headers or footers to the summary
- If the text is unclear, make reasonable assumptions`;
};

const fetchSummary = async () => {
  if (!summaryData.trim()) {
    alert("Please enter some text to summarize.");
    return;
  }

  setIsLoading(true);
  
  try {
    
    const response = await axios.post(
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${
    import.meta.env.VITE_GEMINI_API_KEY
  }`,
  {
    contents: [
      {
        parts: [{ text: generatePrompt() }],
      },
    ],
  },
  {
    headers: {
      "Content-Type": "application/json",
    },
  }
);
const summarizedContent =
    response.data.candidates?.[0]?.content?.parts?.[0]?.text || 
    "No summary could be generated. Please try again with different content.";
    setSummarizedData(summarizedContent);
  } catch (error) {
    console.error("Error fetching summary:", error);
    setSummarizedData(`Error: ${error.response?.data?.error?.message || error.message}`);
  } finally {
    setIsLoading(false);
  }
};

const handleCopy = () => {
    navigator.clipboard.writeText(summarizedData);
    alert("Summary copied to clipboard!");
  };

const handleDownload = () => {
const element = document.createElement("a");
const file = new Blob([summarizedData], { type: 'text/plain' });
element.href = URL.createObjectURL(file);
element.download = "summary.txt";
document.body.appendChild(element);
element.click();
document.body.removeChild(element);
};

  return (
    <main className="container" id="home">
      <section className="summarizer-tool">
        <article className="input-section card">
          <h3><FontAwesomeIcon icon={faKeyboard} size="1x" className="summaryIcon"/>Your Text</h3>
          <textarea 
            id="inputText" 
            placeholder="Paste your article, research paper, or any lengthy text here..."
            value={summaryData}
            onChange={(e) => setSummaryData(e.target.value)}
          ></textarea>
          <section className="controls">
            <div className="control-group">
              <label htmlFor="summaryLength"><FontAwesomeIcon icon={faRuler} size="1x" className="summaryIcon"/>Summary Length</label>
              <select 
                id="summaryLength" 
                value={summaryLength}
                onChange={(e) => setSummaryLength(e.target.value)}
              >
                <option value="short">Brief (1-2 sentences)</option>
                <option value="medium">Standard (3-5 sentences)</option>
                <option value="long">Detailed (paragraph)</option>
              </select>
            </div>
            <div className="control-group">
              <label htmlFor="tone"><FontAwesomeIcon icon={faCommentDots} size="1x" className="summaryIcon"/>Tone</label>
              <select 
                id="tone" 
                value={tone}
                onChange={(e) => setTone(e.target.value)}
              >
                <option value="neutral">Neutral</option>
                <option value="professional">Professional</option>
                <option value="casual">Casual</option>
              </select>
            </div>
            <button 
              id="generateBtn" 
              className="primary-btn"
              onClick={fetchSummary}
              disabled={isLoading}
            >
              <FontAwesomeIcon icon={faMagic} size="1x" className="summaryIcon"/>
              {isLoading ? "Generating..." : "Generate Summary"}
            </button>
          </section>
        </article>
        <article className="output-section card">
          <h3><FontAwesomeIcon icon={faFileAlt} size="1x" className="summaryIcon"/>AI Summary</h3>
          <article id="summaryOutput" className="output-box">
            {summarizedData ? (
              <div className="summary-content">
                <p>{summarizedData}</p>
              </div>
            ) : (
              <div className="placeholder">
                <p><FontAwesomeIcon icon={faMagicWandSparkles} size="1x" className="summaryIcon"/>Your generated summary will appear here</p>
              </div>
            )}
            {isLoading && <div className="status">Generating summary...</div>}
          </article>
          <div className="output-actions">
            <button 
              id="copyBtn" 
              className="secondary-btn" 
              onClick={handleCopy}
              disabled={!summarizedData || isLoading}
            >
              <FontAwesomeIcon icon={faCopy} size="1x" className="summaryIcon"/>Copy
            </button>
            <button 
              id="downloadBtn" 
              className="secondary-btn"
              onClick={handleDownload}
              disabled={!summarizedData || isLoading}
            >
              <FontAwesomeIcon icon={faDownload} size="1x" className="summaryIcon"/>Download
            </button>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Home;

