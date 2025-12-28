// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Terminal elements
const terminal = document.getElementById("terminal");
const form = document.getElementById("form");
const cmd = document.getElementById("cmd");

// Right panel elements
const panelTitle = document.getElementById("panelTitle");
const panelMeta = document.getElementById("panelMeta");
const panelBody = document.getElementById("panelBody");

function printLine(text, muted = false) {
  const div = document.createElement("div");
  div.className = "line" + (muted ? " muted" : "");
  div.textContent = text;
  terminal.appendChild(div);
  terminal.scrollTop = terminal.scrollHeight;
}

function setPanel(title, meta, html) {
  panelTitle.textContent = title;
  panelMeta.textContent = meta;
  panelBody.innerHTML = html;
}

function runCommand(input) {
  const raw = input.trim();
  if (!raw) return;

  const clean = raw.toLowerCase();

  // Echo command on left terminal
  printLine(`guest@david:~$ ${raw}`);

  // Commands
  if (clean === "help") {
    printLine(
  "Commands: about, education, experience, skills, projects, competitive, resume, linkedin, clear",
  true
);

    setPanel(
      "Help",
      "Try any command on the left",
      `
        <p>Use the terminal to navigate this portfolio.</p>
        <div class="grid2">
          <div class="mini">
            <div class="miniTitle">Profile</div>
            <ul>
              <li><b>about</b> — summary</li>
              <li><b>education</b> — GMU details</li>
              <li><b>experience</b> — roles</li>
            </ul>
          </div>
          <div class="mini">
            <div class="miniTitle">Extras</div>
            <ul>
              <li><b>skills</b> — tools & tech</li>
              <li><b>projects</b> — what I’ve built</li>
              <li><b>competitive</b> — Competitive background</li>
              <li><b>resume</b>, <b>linkedin</b> — open links</li>
            </ul>
          </div>
        </div>
      `
    );
    return;
  }

  if (clean === "about") {
    setPanel(
      "About",
      "Cybersecurity @ GMU",
      `
        <p><b>David Yu</b> — Cybersecurity Engineering student at <b>George Mason University</b>.</p>
        <p>Currently working in <b>IT Helpdesk support</b> and as a <b>Cybersecurity Journalism Intern</b>.</p>
        <p>I like hands-on labs, troubleshooting real systems, and building practical security skills.</p>
      `
    );
    printLine("Loaded: About", true);
    return;
  }

  if (clean === "education") {
    setPanel(
      "Education",
      "George Mason University",
      `
        <ul>
          <li><b>B.S. Cybersecurity Engineering</b> (Expected May 2026)</li>
        </ul>
        <div class="mini" style="margin-top:12px;">
          <div class="miniTitle">Certifications</div>
          <ul>
            <li>ISC2 Certified in Cybersecurity (CC)</li>
            <li>Google Cybersecurity Professional Certificate</li>
            <li>TryHackMe: Pre-Security, Cyber Security 101</li>
          </ul>
        </div>
      `
    );
    printLine("Loaded: Education", true);
    return;
  }

  if (clean === "experience") {
    setPanel(
      "Experience",
      "IT support + security communication",
      `
        <div class="mini">
          <div class="miniTitle">Classroom Helpdesk IT Support — GMU</div>
          <ul>
            <li>Technical troubleshooting for classrooms and live environments</li>
            <li>Support faculty, staff, and students</li>
            <li>AV systems, hardware, connectivity, user support</li>
          </ul>
        </div>

        <div class="mini" style="margin-top:12px;">
          <div class="miniTitle">Cyber News Live — Cybersecurity Journalism Intern</div>
          <ul>
            <li>Research threats, breaches, policy</li>
            <li>Translate technical topics into accessible articles</li>
            <li>Track evolving security trends</li>
          </ul>
        </div>
      `
    );
    printLine("Loaded: Experience", true);
    return;
  }

  if (clean === "skills") {
    setPanel(
      "Skills",
      "Tools, OS, networking",
      `
        <div class="grid2">
          <div class="mini">
            <div class="miniTitle">Security Tools</div>
            <p>Nmap • Burp Suite • Metasploit • Hydra • Wireshark</p>
          </div>
          <div class="mini">
            <div class="miniTitle">Operating Systems</div>
            <p>Windows • Linux (Kali/Ubuntu) • macOS</p>
          </div>
          <div class="mini">
            <div class="miniTitle">Networking</div>
            <p>TCP/IP • subnetting • DNS • HTTP/S • FTP</p>
          </div>
          <div class="mini">
            <div class="miniTitle">Other</div>
            <p>VirtualBox • basic Python scripting • AV troubleshooting</p>
          </div>
        </div>
      `
    );
    printLine("Loaded: Skills", true);
    return;
  }

  if (clean === "projects") {
    setPanel(
      "Projects",
      "Hands-on labs & simulations",
      `
        <div class="mini">
          <div class="miniTitle">TryHackMe Labs</div>
          <ul>
            <li>Offensive & defensive simulations in virtual environments</li>
            <li>Log analysis, anomaly detection, remediation practice</li>
          </ul>
        </div>

        <div class="mini" style="margin-top:12px;">
          <div class="miniTitle">Security Practice</div>
          <ul>
            <li>Vulnerability scanning and network analysis</li>
            <li>VirtualBox lab environments</li>
          </ul>
          <p class="muted">Tip: later you can link each project to a GitHub repo or write-up.</p>
        </div>
      `
    );
    printLine("Loaded: Projects", true);
    return;
  }

if (clean === "competitive") {
  setPanel(
    "Competitive Gaming Background",
    "Discipline • performance • decision-making under pressure",
    `
      <p>
        I have a background in competitive gaming, including tournament play
        and high-pressure match environments.
      </p>

      <div class="mini" style="margin-top:12px;">
        <div class="miniTitle">What this developed</div>
        <ul>
          <li>Rapid decision-making under pressure</li>
          <li>Pattern recognition and adaptation</li>
          <li>Emotional control during high-stakes situations</li>
          <li>Consistent practice and self-review</li>
        </ul>
      </div>

      <div class="achievement">
        <img src="./top8.png" alt="Top 8 tournament placement">
        <div class="achievementCaption">
          Top 8 placement in a competitive tournament
        </div>
      </div>
    `
  );

  printLine("Loaded: Competitive Background", true);
  return;
}

  if (clean === "resume") {
    printLine("Opening resume...", true);
    window.open("./resume.pdf", "_blank");
    return;
  }

  if (clean === "linkedin") {
    printLine("Opening LinkedIn...", true);
    window.open("https://www.linkedin.com/in/david87/", "_blank");
    return;
  }

  if (clean === "clear") {
    terminal.innerHTML = "";
    printLine("Welcome. Type help to explore.", true);
    return;
  }

  // Unknown command
  printLine(`Command not found: ${raw}`, true);
  printLine("Type help for options.", true);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  runCommand(cmd.value);
  cmd.value = "";
});

cmd.focus();
