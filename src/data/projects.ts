export interface Project {
  slug: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  learnings: string[];
  image?: string;
  gallery?: string[]; // Array of image paths for carousel
  tags: string[];
  github?: string;
  live?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "intellichain",
    title: "IntelliChain",
    description: "Multi-agent supply chain risk platform with full LLM observability—watch agents reason, query graphs, and coordinate decisions in real-time.",
    problem: `Supply chain disruptions cascade unpredictably across global networks. Manual analysis is slow and misses hidden dependencies. Worse, when teams do use AI tools, the "black box" nature of LLM decisions makes it impossible to audit reasoning or build trust in automated recommendations.`,
    solution: `Multi-agent orchestration platform where specialized LLM agents collaborate to detect disruptions, trace impact, and recommend mitigations—with full observability into every decision.

Architecture:
- LangGraph agent workflow with distinct roles: Evidence Gatherer → Impact Analyser → Graph Backed Solution → Mitigation Ranker
- Each agent's reasoning is streamed live: see the Cypher queries generated, the graph traversals executed, and the logic behind each recommendation
- Agents communicate via structured state, enabling inspection of inter-agent message passing

Key features:
- Real-time event ingestion via Redis Streams consumer groups
- Neo4j knowledge graph for supplier relationships and regional risk history
- Live reasoning panel: watch LLM generate and execute Cypher queries in real-time
- Decision audit trail: every agent decision logged with inputs, outputs, and rationale
- SSE streaming for real-time workflow progress across all agents
- Structured input/outputs via Gemini using predefined Pydantic schemas`,
    learnings: [
      "Multi-agent systems need clear responsibility boundaries—overlapping concerns cause coordination chaos",
      "LLM observability isn't optional: exposing reasoning builds user trust and enables easier debugging",
      "Graph DBs + LLMs: let LLM decide what to query, graph provides grounded answers (prevents hallucination)",
      "Structured outputs between agents prevent cascade failures from malformed responses allowing for early intervention",
      "Graph based traversals allow us to relate entities with complex relationships, highlighting insightful solutions"
    ],
    image: "/images/projects/intellichain/intellichain_main.png",
    gallery: [
      "/images/projects/intellichain/intellichain_main.png",
      "/images/projects/intellichain/map_view.png",
      "/images/projects/intellichain/events.png",
      "/images/projects/intellichain/ai_reasoning.png",
      "/images/projects/intellichain/mitigation.png",
      "/images/projects/intellichain/graph.png",
    ],
    tags: ["LangGraph", "Neo4j", "Redis Streams", "FastAPI"],
    github: "https://github.com/stanley-ting/intellichain",
    featured: true,
  },
  {
    slug: "phisherman",
    title: "Phisherman",
    description: "My first fullstack application ! ML-based phishing detection system that identifies malicious URLs and LLM powered image detection to identify scams with 92% accuracy.",
    problem: `Phishing attacks remain one of the most effective social engineering vectors, with traditional rule-based filters struggling to keep up with evolving tactics. Users need protection that can effectively identify evolving tactics and provide a second opinion.`,
    solution: `Developed an ML-powered detection system that analyses multiple signals such as word-use and google indexing to identify phishing attempts before they reach users.

Key features:
- Ability to identify URL structure, entropy, and domain patterns
- Content-based linguistic indicators eg. words that invoke urgency or encourages users to share personal information
- OCR to identify contents in images and ability to flag them out.
- Confidence score with classification of the scam together with recommendations on what to do.
- Web-forum allowing users to browse through other user-submitted posts regarding the latest scams.
- Structured database to store user's analysis results
- Role Based Access control with admin-only capabilities such as removal of blog posts.

Achieved 92% detection accuracy on benchmark datasets with quick infererence time.`,
    learnings: [
      "Feature engineering for security applications—balancing signal strength with evasion resistance",
      "Handling class imbalance in adversarial ML contexts to prevent a skewed model",
      "Importance of including AI explanation as per why a particular output was given to instill trust",
      "Learned to built user-friendly UI with clear instructions on navigation",
    ],
    image: "/images/projects/phisherman/phisherman_main.jpg",
    tags: ["Python", "scikit-learn", "FastAPI", "Docker", "OCR"],
    github: "https://github.com/jooh6969/orbital-phisherman",
    featured: true,
  },
  {
    slug: "telegram-wrapped",
    title: "TelegramWrapped",
    description: "HacknRoll 2026 project—turn your 30,000+ yearly messages into shareable insights with AI-powered personality mapping and conversation analytics.",
    problem: `We send around 30,000 text messages a year, yet this goldmine of digital footprint remains completely unexplored. Unlike Spotify Wrapped for music, there's no fun way to reflect on our messaging habits, see who we talk to most, or discover patterns in how we communicate.`,
    solution: `A personal analytics platform that transforms your Telegram history into a shareable, Spotify Wrapped-style experience with AI-powered personality insights.

User flow:
- Authenticate with phone number + OTP (supports 2FA)
- Select which chats to include in analysis
- Receive a personalized wrapped to share with friends and family

Key features:
- Secure Telegram authentication via Telethon library
- Async data fetching for fast processing of thousands of messages
- OpenAI-powered sentiment analysis and creative personality mapping.
- Metrics: most active chats, frequently used words, messaging patterns, conversation personality
- Shareable wrapped cards designed for social sharing`,
    learnings: [
      "Concurrent processing cut analysis time from 10 minutes to 2 minutes—parallelizing chat fetches was the key bottleneck fix",
      "Generational divide on privacy: younger users loved the concept, while adults raised concerns about reading all messages—need clearer data handling transparency",
      "LLM personality mapping needs careful prompt engineering to be insightful without being generic",
      "Shareable content needs to balance detail with visual appeal—less text, more personality",
      "Future implementations will include using a vector database to store messages and user's can query based on semantic meaning"
    ],
    image: "/images/projects/telegramwrapped/telegramwrapped_main.jpg",
    gallery: [
      "/images/projects/telegramwrapped/wrapped_demo.mp4",
      "/images/projects/telegramwrapped/mekavinpic.jpg",
    ],
    tags: ["FastAPI", "Telethon", "OpenAISDK", "React", "Tailwind"],
    github: "https://github.com/kpkavin04/TelegramWrapped",
    featured: true,
  },
  {
    slug: "mobi",
    title: "MOBI",
    description: "STEER Shenzhen 2025 hardware project—smart strength training for seniors with Edge ML rep detection, real-time fatigue monitoring, and caregiver dashboards.",
    problem: `Seniors at Active Ageing Centres lack accessible, safe strength training solutions. Existing gym equipment provides no feedback on form or fatigue, risking injury. Caregivers and family members have no visibility into their loved ones' exercise routines or safety.`,
    solution: `Low-cost, ML-powered wearable system that enables safe strength training with real-time feedback and remote monitoring for caregivers.

Hardware architecture:
- Dual-unit system: Smart Watch + Machine Attachment communicating via BLE
- ESP32S3 microcontrollers with MPU9250 IMU and MAX30102 heart rate sensors
- Edge Impulse ML model for on-device rep detection and form classification
- Custom 3D-printed housing for durability

Key features:
- Real-time repetition detection using gyro-based motion data with Edge ML inference
- Combined fatigue scoring from heart rate zones and movement stability
- QR code scanning for seamless device pairing and workout initiation
- Caregiver & family dashboards for remote monitoring
- Gamified engagement via leaderboards and "Jio Me" social challenges
- Automatic data sync to mobile app and optional Google Sheets logging`,
    learnings: [
      "Edge ML enables sub-100ms inference—critical for real-time rep feedback without cloud latency",
      "BLE communication protocol design: custom data format and automatic reconnection handling for reliability",
      "Hardware constraints force creative solutions—optimising ML model size for ESP32 memory limits",
      "Designing for seniors requires larger displays, simpler interactions, and clear visual feedback",
      "Rapid prototyping under time pressure: scoping MVP features ruthlessly to ship in 2 days",
    ],
    image: "/images/projects/mobi/System_overview.png",
    gallery: [
      "/images/projects/mobi/System_overview.png",
      "/images/projects/mobi/Scan_Qr.gif",
      "/images/projects/mobi/Rep_increase.gif",
    ],
    tags: ["ESP32", "Edge Impulse", "TensorFlow Lite", "React", "Supabase"],
    github: "https://github.com/stanley-ting/Mobi-Fitness-App",
    live: "https://mobi-app.lovable.app",
    featured: true,
  },
];
