import React from "react";

const Header = () => {
  return (
    <div className="header">
      <h1 style={{ textAlign: "center" }}>
				Understanding how changing an attribute of an agent affects the visual story
			</h1>
      <p>
        By performing this HIT, you agree that{" "}
        <span style={{ color: "red" }}>
          you have read the description of the study being undertaken, and give
          consent for the data you enter to be used for research
        </span>
        . Please read the{" "}
        <a
          href="https://agentpatientexamples.s3.us-east-2.amazonaws.com/WebConsentForm.pdf"
          target="_blank"
					rel="noreferrer"
        >
          consent form
        </a>
        , if you would prefer not to take part in this experiment, please return
        this HIT.
      </p>
    </div>
  );
};

export default Header;
