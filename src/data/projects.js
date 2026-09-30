export const featuredProjects = [
  {
    title: 'AI Document Intelligence Platform',
    href: 'https://github.com/snehaamr/DocumentIntelligencePlatform',
    summary:
      'I wanted a place to upload a PDF or image, extract the text, and get a classification plus a short summary from an LLM. Django, Celery, Redis, Postgres, Docker, OpenAI.',
    problem:
      'If you call OpenAI in the upload request, the API just sits there. Retries also get messy — people hit retry twice and you process the same file twice.',
    choice:
      'The upload returns right away. A Celery worker does extraction and the OpenAI call. I used a row lock and only enqueue after the transaction commits so two retries don't pile up on the same document. Failed jobs keep the original file, so you don't have to upload again.',
    constraint:
      'The model is slow and can fail. I still needed a history of what ran — status, how long it took, which model, tokens if I got them, and the error.',
    result:
      'Uploads don't wait on the model. You can retry a failed doc without re-uploading. There are tests around auth, ownership, retry, and history. Docker Compose brings up the whole stack.',
    architecture: [
      'Upload API',
      'Postgres',
      'Celery / Redis',
      'Extract text',
      'OpenAI',
      'Save summary',
    ],
  },
  {
    title: 'MusicPod — AI-assisted playlists',
    href: 'https://github.com/snehaamr/MusicPod',
    summary:
      'A Spring Boot backend for a music catalog, likes, playlists, search, and an MCP server so an agent can use your library. Java, Postgres, Kafka, Redis, OpenSearch.',
    problem:
      'If you write to Postgres and OpenSearch in the same request, one of them will eventually disagree. Search that is only embeddings is also annoying when you just want a song title. And I didn't want MCP tools acting as some other user.',
    choice:
      'Postgres is the source of truth. Catalog and playback changes go to an outbox table in the same commit, then Kafka, then OpenSearch. Search is hybrid — keyword plus vectors. MCP runs as the logged-in user, checks ownership, and I log what the agent did.',
    constraint:
      'Search has to stay close to Postgres. Agent writes still need the same auth as the REST API. The domains share one app, but catalog, library, search, and MCP are split in the code.',
    result:
      'REST and MCP hit the same library. Events don't get lost if Kafka is down for a second. You can search by name or by vibe. Tests and Docker Compose are in the repo.',
    architecture: [
      'REST / MCP',
      'JWT',
      'App services',
      'Postgres',
      'Outbox',
      'Kafka',
      'OpenSearch',
      'Search / AI playlists',
    ],
  },
  {
    title: 'FastPay gRPC — real-time payments API',
    href: 'https://github.com/snehaamr/fastpay-grpc',
    summary:
      'A small Java gRPC payments API. One transfer, a bulk upload, status updates, and a live two-way stream. Not a real bank — I built it to learn the gRPC patterns.',
    problem:
      'REST is awkward for a live feed of payments. Retries are worse: hit the same transfer twice and you move the money twice. Floats for money are a trap.',
    choice:
      'gRPC + Protobuf, amounts as integer cents. Each transfer has a transaction id. If you send it again, you get replayed=true and the ledger doesn’t post twice. There's a rate limit per API key so a client can't flood the server. When a payment settles or fails, a webhook row is written in the same commit as the ledger update.',
    constraint:
      'Default store is SQLite (Postgres is optional). It still has to survive retries, insufficient funds, and a couple of simple fraud flags on the live stream without wrecking balances.',
    result:
      'The four gRPC styles are in one service, plus refunds and a basic journal. I used ghz to poke at latency and throughput. Gradle tests and a Docker build run in CI.',
    architecture: [
      'gRPC client',
      'Auth / rate limit',
      'Payment RPCs',
      'Ledger',
      'SQLite / Postgres',
      'Outbox',
      'Webhooks',
    ],
  },
]

export const earlierProjects = [
  {
    title: 'Mobile Adhoc Network Simulation NS-3',
    href: 'https://github.com/snehaamr/MobileAdhocNetworkNS3',
    description:
      'NS-3 simulations of a mobile ad-hoc network. I was looking at how buffer size changes packet delivery vs drops.',
  },
  {
    title: 'Speaker Recognition using Audio Processing',
    href: 'https://github.com/snehaamr/SpeakerRecognitionMatlab',
    description:
      'A MATLAB project that tries to recognize a speaker from MFCCs compared against a small speaker database.',
  },
  {
    title: 'Climate Data Analysis using Pig Scripts, Hadoop and D3.js',
    href: 'https://github.com/snehaamr/ClimateAnalysis',
    description:
      'Pig on Hadoop over ~50 years of US climate data, then a D3 page for average temperature and precipitation by year.',
  },
  {
    title: 'Employee Payroll Management System',
    href: 'https://github.com/snehaamr/EmployeePayrollManagement',
    description:
      'A Java / Spring / Hibernate app for employee records, leave, and payroll. School/early-career CRUD, basically.',
  },
]
