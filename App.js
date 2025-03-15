import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>RUBAGUMYA ALVIN</h1>
      <p>Welcome to my personal portfolio</p>
    </header>
  );
};

const DarkModeToggle = ({ toggleDarkMode }) => {
  return (
    <div className="dark-mode-toggle">
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
};

const Introduction = () => {
  return (
    <section>
      <h2>INTRODUCTION</h2>
      <p>Hello, my name is Rubagumya Alvin and I am a passionate student pursuing a Bachelor of Science in Computer Science. I enjoy playing soccer and I am always eager to grow both personally and professionally and learn new things.</p>
    </section>
  );
};

const PersonalDetails = () => {
  return (
    <section>
      <h2>PERSONAL DETAILS</h2>
      <ul>
        <li><strong>Full Name:</strong> Rubagumya Alvin</li>
        <li><strong>Access Number:</strong> B20239</li>
        <li><strong>Registration Number:</strong> M23B23/012</li>
        <li><strong>Course and Year:</strong> Bachelor of Science in Computer Science, Year 2</li>
        <li><strong>Hobbies and Interests:</strong> Playing soccer, swimming, and listening to music</li>
      </ul>
    </section>
  );
};

const ProfilePicture = () => {
  return (
    <section>
      <h2>PROFILE PICTURE</h2>
      <div className="container">
        <img src="AR profile pic.jpg" alt="Profile Picture" className="profile-img" />
      </div>
    </section>
  );
};

const MyHobby = () => {
  return (
    <section>
      <h2>MY HOBBY</h2>
      <div className="container">
        <iframe width="560" height="315" src="AR video.mp4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
    </section>
  );
};

const PartialTranscript = () => {
  return (
    <section>
      <h2>PARTIAL TRANSCRIPT</h2>
      <table>
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Title</th>
            <th>Grade</th>
            <th>Credit Units</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CSC1101</td>
            <td>Structured Programming</td>
            <td>A</td>
            <td>4</td>
          </tr>
          <tr>
            <td>MTH1102</td>
            <td>Discrete Mathematics</td>
            <td>B</td>
            <td>3</td>
          </tr>
          <tr>
            <td>TBS1103</td>
            <td>Understanding The Old Testament</td>
            <td>A</td>
            <td>3</td>
          </tr>
          <tr>
            <td>LNG1101</td>
            <td>Writing and Study Skills</td>
            <td>B</td>
            <td>3</td>
          </tr>
          <tr>
            <td>ICT1103</td>
            <td>Fundamentals of Computing</td>
            <td>A</td>
            <td>4</td>
          </tr>
          <tr>
            <th>ICT1102</th>
            <th>Essential Hardware and Software Concepts</th>
            <th>A</th>
            <th>4</th>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

const AdditionalInformation = () => {
  return (
    <section>
      <h2>ADDITIONAL INFORMATION</h2>
      <p><a href="https://www.skysports.com/" target="_blank">My Favorite Website</a></p>
      <p><a href="https://ucu.ac.ug" target="_blank">University Department</a></p>
    </section>
  );
};

const ContactInformation = () => {
  return (
    <section>
      <h2>CONTACT INFORMATION</h2>
      <p><strong>Email:</strong> <a href="mailto:alvinrubagumya@gmail.com">alvinrubagumya@gmail.com</a></p>
      <p><strong>Social Media:</strong></p>
      <ul>
        <li><a href="https://www.instagram.com/__a.l.v.i.n.__/" target="_blank">Instagram</a></li>
        <li><a href="https://x.com/Alvin_Rubagumya?s=08" target="_blank">Twitter</a></li>
        <li><a href="https://github.com/Alvin-256" target="_blank">GitHub</a></li>
      </ul>
    </section>
  );
};

const CareerGoals = () => {
  return (
    <section>
      <h2>CAREER GOALS</h2>
      <p>My career goals involve becoming an expert in software development. I aim to work for a tech company where I can contribute to innovative projects, continue to learn new technologies and grow as a professional.</p>
    </section>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2025 Rubagumya Alvin. All rights reserved.</p>
    </footer>
  );
};