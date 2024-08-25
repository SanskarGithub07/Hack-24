# CereBRO

CereBRO is an AI-driven adaptive learning platform that tailors educational content to the unique needs of neurodiverse students, improving their academic outcomes and overall well-being.

## Problem Statement

Create an AI-driven adaptive learning platform that personalizes educational content for neurodiverse students, including those with dyslexia, autism, and ADHD.

## Key Features

- Adaptive Assessment
- Focused Learning Paths
- Real-time Feedback and Progress Tracking
- Personalized AI Assistant
- Video Summary Generation
- Summary Flowcharts
- Interactive Flashcards
- Adaptive Quizzes
- Comprehensive Progress Reports

## Technologies Used

- React (Frontend)
- Node.js (Backend)
- Express (Web Application Framework)
- FastAPI
- Postgres
- LangChain
- YouTube Transcript API
- Groq AI
- Pydantic

### Installation

A step-by-step series of examples that tell you how to get a development environment running:

1. Clone the repository:
   git clone https://github.com/SanskarGithub07/Hack-24
2. Install backend dependencies:
   npm install
3. Install frontend dependencies:
   cd frontend
   cd cerebro
   npm install

## Running the Application

### Starting the Backend

From the root directory of the project:
nodemon server.js

### starting the frontend

cd frontend
cd cerebro
npm run dev

## API Endpoints

1. Get Summary: GET /{yt_id}
2. Generate Quiz: GET /quiz/{yt_id}
3. Create Flowchart: GET /flowchart/{yt_id}

Replace {yt_id} with the YouTube video ID.

## Setup

1.⁠ ⁠Clone the repository:

⁠  git clone https://github.com/yourusername/youtube-transcript-ai-api.git
cd youtube-transcript-ai-api
 ⁠

2.⁠ ⁠Install dependencies:

⁠  pip install fastapi langchain_text_splitters youtube_transcript_api langchain_groq pydantic
 ⁠

3.⁠ ⁠Set up your Groq API key in the code:
⁠ python
groq_api_key="your_groq_api_key_here"
 ⁠

4.⁠ ⁠Run the FastAPI server:

⁠  uvicorn main:app --reload
 ⁠

## Our AI-Powered Solution: Key Features

- _Adaptive Assessment:_

  - Identifies each student's unique strengths and needs.

- _Focused Learning Paths:_

  - Creates tailored learning journeys, allowing students to master concepts at their own pace.

- _Feedback and Progress:_

  - Offers real-time guidance to help students adjust their learning approach.

- _Personalized Assistant:_
  - Provides instant, customized support to ensure complete understanding.

### Feature: Video Summary Generation

- _Concise Summaries:_ Breaks down YouTube videos into manageable, interactive summaries.
- _Accessible Learning:_ Simplifies content for easier understanding and retention.
- _Visual Summaries:_ Engages different learning styles with visually appealing content.
- _Core Concepts:_ Highlights essential information for effective learning.

### Feature: Summary Flowchart

- _Visual Learning:_ Creates flowcharts to summarize key video concepts.
- _Content Analysis:_ Extracts essential information from videos.
- _Flowchart Creation:_ Connects ideas with arrows and icons for clarity.
- _Easy Navigation:_ Helps students understand and reinforce concept connections.

### Feature: Flashcards on Video Topics

- _Interactive Review:_ Generates flashcards for quick and efficient concept reinforcement.
- _Targeted Practice:_ Focuses on specific areas needing improvement.
- _Flexible Learning:_ Allows students to review at their own pace, anytime.

### Feature: Adaptive Quizzes

- _Personalized Learning:_ Adjusts question difficulty based on student performance.
- _Motivational Feedback:_ Offers encouragement and improvement suggestions.
- _Focused Practice:_ Provides targeted exercises for areas needing more practice.

## Authors

- \*Kunal Passan - Initial work - [Kazekunal](https://github.com/kazekunal)
- \*Chirayu Agrawal - Initial work - [chirayuxd](https://github.com/chirayuxd)
- \*Kunal Sharan - Initial work - [Kunal-sharan](https://github.com/Kunal-sharan)
- \*Sanskar Sugandhi - Initial work - [SanskarGithub07](https://github.com/SanskarGithub07)

## License

This project is licensed under the [LICENSE NAME] License - see the [LICENSE.md](LICENSE.md) file for details
