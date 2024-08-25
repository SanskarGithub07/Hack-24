import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import pg from "pg";
import axios from "axios"; // Make sure to import axios

const app = express();
const port = 3001;
const processedVideos = new Set();

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "cerebrodb",
  password: "Sanny_PostgreSQL@123",
  port: 5432,
});

db.connect()
  .then(() => console.log("Successfully connected to database."))
  .catch((err) => console.error("Error while connecting to database:", err));

app.use(cors());
app.use(bodyParser.json());

function getYouTubeVideoId(ytLink) {
  let ytId;
  if (ytLink.includes("&")) {
    ytId = ytLink.split("&")[0].split("=")[1];
  } else {
    ytId = ytLink.split("=")[1];
  }
  return ytId;
}

app.post("/api/videolink", async (req, res) => {
  const { videoLink } = req.body;
  console.log("Received video link:", videoLink);

  try {
    const videoId = getYouTubeVideoId(videoLink);
    console.log(videoId);
    if (processedVideos.has(videoId)) {
      console.log("Video already processed. Skipping.");
      return res.json({
        message: "Video already processed. Flashcards are available.",
      });
    }

    await db.query("TRUNCATE TABLE flash_card, qna, sumflow");

    const r = await axios.get(
      `https://ce97-35-197-64-18.ngrok-free.app/flowchart/${videoId}`
    );
    const sumflow = r.data;
    console.log(sumflow);
    const { url, description } = sumflow;
    const one = description[0];
    const two = description[1];
    const three = description[2];
    const four = description[3];
    await db.query(
      "INSERT INTO sumflow(url, spt_one, spt_two, spt_three, spt_four) VALUES ($1, $2, $3, $4, $5)",
      [url, one, two, three, four]
    );
    console.log("Flowchart fetched and inserted successfully.");

    //FlashCard
    // const response = await axios.get(
    //   `https://ce97-35-197-64-18.ngrok-free.app/${videoId}}`
    // );

    // const flashCards = response.data;
    // for (let card of flashCards) {
    //   const { heading, paragraph } = card;
    //   await db.query(
    //     "INSERT INTO flash_card (heading, paragraph) VALUES ($1, $2)",
    //     [heading, paragraph]
    //   );
    // }
    // console.log("Flashcards fetched and inserted successfully!");

    // const qnaResp = await axios.get(
    //   `https://ce97-35-197-64-18.ngrok-free.app/quiz/${videoId}`
    // );
    // const qnas = qnaResp.data;

    // for (let qna of qnas) {
    //   const {
    //     question,
    //     option_one,
    //     option_two,
    //     option_three,
    //     option_four,
    //     correct_ans,
    //     category,
    //     topic,
    //   } = qna;
    //   await db.query(
    //     "INSERT INTO qna (question, option_one, option_two, option_three, option_four, correct_ans, category, topic) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
    //     [
    //       question,
    //       option_one,
    //       option_two,
    //       option_three,
    //       option_four,
    //       correct_ans,
    //       category,
    //       topic,
    //     ]
    //   );
    // }
    // console.log("Question and Answers fetched and inserted successfully!");

    processedVideos.add(videoId);
    // window.location.reload() 
    res.json({
      message:
        "Video link received,flashcards, qna, summary and flowcharts inserted successfully", reload: true
    });
  } catch (err) {
    console.error("Error fetching and inserting flashcard data:", err.stack);
    res.status(500).send("Error fetching and inserting data");
  }
});

app.get("/flashcard", async (req, res) => {
  try {
    let allCards = await db.query("SELECT * FROM flash_card");
    res.json(allCards.rows);
  } catch (err) {
    console.error("Error fetching data from database:", err.stack);
    res.status(500).send("Error fetching data from database");
  }
});

app.get("/qna", async (req, res) => {
  try {
    let allQnas = await db.query("SELECT * FROM qna");
    res.json(allQnas.rows);
  } catch (error) {
    console.error("Error fetching data from database: ", err.stack);
    res.status(500).send("Error fetching data from database");
  }
});

app.get("/sumflow", async (req, res) => {
  try {
    let allData = await db.query("SELECT * FROM sumflow");
    res.json(allData.rows);
  } catch (error) {
    console.error("Error fetching data from database: ", err.stack);
    res.status(500).send("Error fetching data fromm database");
  }
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
