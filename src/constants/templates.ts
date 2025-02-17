export const templates = [
    {
        id: "blank" ,
        label: "Blank Document" , 
        imageUrl: "/templates/blank-page.svg"
    },
    {
        id: "software-Development" ,
        label: "Software Development proposal" , 
        imageUrl: "/templates/software-development-proposal.svg",
        initialContent: `
            <h1>Software Development Proposal</h1>
<p>Company Name • Date</p>
<br>
<h2>Executive Summary</h2>
<p>This proposal outlines our approach to developing a custom software solution that meets your specific business needs and drives innovation.</p>
<br>
<h2>Project Overview</h2>
<p>We aim to create a robust, scalable application designed to streamline operations and improve overall efficiency.</p>
<br>
<h2>Proposed Approach</h2>
<ul>
  <li>Requirement Analysis – Understand your needs and define project scope</li>
  <li>Design &amp; Architecture – Develop a clear, scalable design</li>
  <li>Development – Build the solution using best practices</li>
  <li>Quality Assurance – Thorough testing to ensure reliability</li>
  <li>Deployment &amp; Support – Smooth rollout and ongoing maintenance</li>
</ul>
<br>
<h2>Implementation Timeline</h2>
<ol>
  <li>Planning &amp; Requirements</li>
  <li>Design &amp; Prototyping</li>
  <li>Development &amp; Testing</li>
  <li>Deployment</li>
  <li>Post-Launch Support</li>
</ol>
<br>
<h2>Pricing &amp; Terms</h2>
<p>Cost details will be determined based on project scope and milestones. Our terms cover deliverables, timelines, and post-launch support.</p>
<br>
<h2>Next Steps</h2>
<p>Please review this proposal and contact us to discuss details, adjust scope, and schedule a kickoff meeting.</p>
<br>
<p>Contact: [Your Contact Information]</p>


        `
    },
    {
        id: "project-proposal" ,
        label: "Software proposal" , 
        imageUrl: "/templates/software-project-proposal.svg",
        initialContent: `
        <h1>Software Proposal</h1>
<p>Company Name • Date</p>
<br>
<h2>Executive Summary</h2>
<p>This proposal outlines a software solution designed to address your business needs and drive growth.</p>
<br>
<h2>Project Overview</h2>
<p>The project aims to resolve current challenges and improve operational efficiency with a tailored software solution.</p>
<br>
<h2>Proposed Solution</h2>
<p>Our solution includes key features such as:</p>
<ul>
  <li>Feature One – Description</li>
  <li>Feature Two – Description</li>
  <li>Feature Three – Description</li>
</ul>
<br>
<h2>Implementation Plan</h2>
<ol>
  <li>Requirement Analysis &amp; Planning</li>
  <li>Design &amp; Prototyping</li>
  <li>Development &amp; Testing</li>
  <li>Deployment &amp; Support</li>
</ol>
<br>
<h2>Pricing &amp; Terms</h2>
<p>Detailed cost and payment terms will be provided upon further discussion.</p>
<br>
<h2>Next Steps</h2>
<p>Please review this proposal and contact us to discuss adjustments or schedule a meeting.</p>
<br>
<p>Contact: [Your Contact Information]</p>
        `
    },
    {
        id: "business letter" ,
        label: "Business letter" , 
        imageUrl: "/templates/business-letter.svg",
        initialContent: `
        <h1>Business Letter</h1>
<br>
<p>[Sender's Name]</p>
<p>[Sender's Address]</p>
<p>[City, State, ZIP]</p>
<p>[Email Address] | [Phone Number]</p>
<p>Date: [Month Day, Year]</p>
<br>
<p>[Recipient's Name]</p>
<p>[Recipient's Title]</p>
<p>[Company Name]</p>
<p>[Recipient's Address]</p>
<p>[City, State, ZIP]</p>
<br>
<p>Subject: [Subject of the Letter]</p>
<br>
<p>Dear [Recipient's Name],</p>
<br>
<p>
  [Opening paragraph: Introduce yourself and state the purpose of your letter clearly. For example, "I am writing to discuss..." or "I am writing to request..."]
</p>
<br>
<p>
  [Body paragraph(s): Provide detailed information, background, or context. This section should be concise yet informative. Use separate paragraphs for different points if needed.]
</p>
<br>
<p>
  [Closing paragraph: Summarize the key points, express appreciation, and indicate any next steps. For example, "Thank you for your time and consideration. I look forward to your response."]
</p>
<br>
<p>Sincerely,</p>
<p>[Your Name]</p>
<p>[Your Title]</p>

        `
    },
    {
        id: "resume" ,
        label: "resume" , 
        imageUrl: "/templates/resume.svg",
        initialContent: `
        <h1>John Doe</h1>
<p>123 Main Street, town, USA | (555) 555-5555 | john.doe@example.com</p>
<br>
<h2>Objective</h2>
<p>To obtain a challenging position in software development that utilizes my technical skills and passion for innovative solutions.</p>
<br>
<h2>Experience</h2>
<ol>
  <li>
    <strong>Software Developer, ABC Technologies</strong> (January 2022 – Present)
    <ul>
      <li>Develop and maintain web applications using JavaScript and Python.</li>
      <li>Collaborate with cross-functional teams to deliver high-quality software solutions.</li>
      <li>Implement agile methodologies to improve project delivery and efficiency.</li>
    </ul>
  </li>
  <li>
    <strong>Junior Developer, XYZ Solutions</strong> (June 2020 – December 2021)
    <ul>
      <li>Assisted in developing mobile applications using React Native.</li>
      <li>Performed testing and debugging to ensure optimal performance.</li>
      <li>Contributed to code reviews and technical documentation.</li>
    </ul>
  </li>
</ol>
<br>
<h2>Education</h2>
<ol>
  <li>
    <strong>Bachelor of Science in Computer Science</strong>, University of Somewhere (2016 – 2020)
    <p>Graduated with Honors</p>
  </li>
</ol>
<br>
<h2>Skills</h2>
<ul>
  <li>Programming: JavaScript, Python, Java</li>
  <li>Web Development: HTML, CSS, React, Node.js</li>
  <li>Database Management: SQL, MongoDB</li>
  <li>Tools: Git, Docker, Jenkins</li>
</ul>
<br>
<h2>Certifications</h2>
<ul>
  <li>Certified Scrum Developer (CSD)</li>
  <li>AWS Certified Developer – Associate</li>
</ul>
<br>
<h2>References</h2>
<p>Available upon request.</p>

        `,

    },
    {
        id: "cover letter" ,
        label: "cover letter" , 
        imageUrl: "/templates/cover-letter.svg",
        initialContent: `
        <h1>Cover Letter</h1>

<p>[Your Name]</p>
<p>[Your Address]</p>
<p>[City, State, ZIP]</p>
<p>[Email] | [Phone Number]</p>
<br>
<p>Date: [Month Day, Year]</p>
<br>
<p>[Employer's Name]</p>
<p>[Company Name]</p>
<p>[Company Address]</p>
<p>[City, State, ZIP]</p>
<br>
<p>Dear [Employer's Name],</p>
<br>
<p>I am writing to express my interest in the [Job Title] position at [Company Name]. With my background in [Your Field/Experience] and proven skills in [Key Skill 1], [Key Skill 2], and [Key Skill 3], I am confident in my ability to contribute effectively to your team.</p>
<br>
<p>At [Previous Company Name], I successfully [Briefly describe a relevant achievement or responsibility]. This experience has prepared me to tackle the challenges at [Company Name] and add value from day one.</p>
<br>
<p>I look forward to the opportunity to discuss how my experience and skills align with your needs. Thank you for considering my application. I am eager to contribute to your organization and am available for an interview at your earliest convenience.</p>
<br>
<p>Sincerely,</p>
<p>[Your Name]</p>


        `,

    },
    {
        id: "letter" ,
        label: "letter" , 
        imageUrl: "/templates/letter.svg",
        initialContent: `
        <h1>Letter</h1>

<p>[Your Name]</p>
<p>[Your Address]</p>
<p>[City, State, ZIP]</p>
<p>[Email] | [Phone Number]</p>
<p>Date: [Month Day, Year]</p>
<br>
<p>[Recipient's Name]</p>
<p>[Recipient's Title]</p>
<p>[Company Name]</p>
<p>[Company Address]</p>
<p>[City, State, ZIP]</p>
<br>
<p>Dear [Recipient's Name],</p>
<br>
<p>[Opening paragraph: Introduce yourself and state the purpose of your letter clearly.]</p>
<br>
<p>[Body paragraph: Provide detailed information, context, or a message regarding your inquiry or request. Use additional paragraphs as needed to cover all points.]</p>
<br>
<p>[Closing paragraph: Summarize your main points, express gratitude, and indicate any desired next steps or follow-up.]</p>
<br>
<p>Sincerely,</p>
<p>[Your Name]</p>

        `,
        
    },
];