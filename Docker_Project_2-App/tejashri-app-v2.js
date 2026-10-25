                                                                                     

const http = require("http");

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Tejashri | Cloud & Docker Projects</title>

<style>
  body {
    margin: 0;
    min-height: 100vh;
    font-family: Arial, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
    color: white;
    padding: 20px;
    box-sizing: border-box;
  }

  .card {
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 20px;
    padding: 40px;
    max-width: 700px;
    width: 100%;
    text-align: center;
    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
    box-sizing: border-box;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }

  h2 {
    color: #00e6ff;
    font-size: 1.4rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #eeeeee;
  }

  .highlight {
    margin-top: 24px;
    font-weight: bold;
    font-size: 1.2rem;
    color: #00e6ff;
  }

  .skills {
    margin: 24px 0;
    padding: 15px;
    background: rgba(0, 0, 0, 0.18);
    border-radius: 12px;
  }

  .footer {
    margin-top: 28px;
    font-size: 0.9rem;
    color: #cbd5e1;
  }
</style>
</head>

<body>
  <div class="card">
    <h1>Hello, I'm Tejashri! 👋</h1>

    <h2>Aspiring AWS Cloud Engineer ☁️</h2>

    <p>
      Welcome to my Cloud Computing and Docker project portfolio.
    </p>

    <p class="highlight">
      LEARN • BUILD • DEPLOY • GROW 🚀
    </p>

    <div class="skills">
      <h2>My Cloud Journey</h2>
      <p>
        AWS EC2 | Docker | Linux | Git & GitHub | Terraform
      </p>
    </div>

    <p>
      I am passionate about learning cloud technologies,
      building practical projects, and deploying applications
      on AWS.
    </p>

    <p>
      Every project is another step towards my goal of becoming
      a successful Cloud Engineer.
    </p>

    <p class="highlight">
      DREAM BIG. KEEP LEARNING. NEVER GIVE UP! 💙
    </p>

    <div class="footer">
      © 2026 Tejashri Mandalik | My AWS & Docker Journey
    </div>
  </div>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
  res.end(html);
});

server.listen(3000, () => {
  console.log("Tejashri's website is running on port 3000");
});

