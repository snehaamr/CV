export const featuredProjects = [
  {
    title: 'AI Document Intelligence Platform',
    href: 'https://github.com/snehaamr/DocumentIntelligencePlatform',
    summary:
      'A Django document pipeline that accepts uploads, extracts text, and classifies and summarizes content with an LLM—without holding the request open while the model runs.',
    problem:
      'Document classification and summarization are slow, failure-prone, and easy to bolt onto a request thread. A naive “upload, then call OpenAI” path blocks the API, duplicates work on retries, and leaves no audit trail when a model call fails.',
    choice:
      'Keep the HTTP path thin: JWT-authenticated upload returns immediately, then a Celery worker on Redis does extraction, OpenAI analysis, classification, and summary persistence. Services and repositories stay separate from controllers. Retries use a row lock and enqueue only after commit so two clients cannot queue the same failed document twice.',
    constraint:
      'Model latency and token cost cannot sit on the critical path. Failed jobs have to be retryable without re-uploading the file, and processing history (status, duration, model, tokens, errors) has to survive for debugging.',
    result:
      'Uploads stay non-blocking; AI work scales with workers instead of web processes. Failed documents can be retried safely. The repo ships Docker Compose, PostgreSQL, and 22 automated tests covering auth, ownership, retry, and history.',
    architecture: [
      'Client',
      'Django REST + JWT',
      'Service / repository',
      'PostgreSQL',
      'Celery + Redis',
      'Text extraction',
      'OpenAI',
      'Results + history',
    ],
  },
  {
    title: 'MusicPod — AI-assisted playlists',
    href: 'https://github.com/snehaamr/MusicPod',
    summary:
      'A Java/Spring music backend for catalog, libraries, playlists, hybrid search, AI curation, and an authenticated MCP server over Streamable HTTP.',
    problem:
      'Playlist features, search, and agent tools all want catalog data, but writing events in the same transaction as the HTTP request (or indexing only with embeddings) either loses events or makes retrieval brittle. MCP makes that worse if tools can act as any user.',
    choice:
      'PostgreSQL is the source of truth. Catalog and playback changes go through a transactional outbox, then Kafka, then OpenSearch—so search indexes update without dual-writes. Search is hybrid (lexical + semantic) rather than embeddings alone. MCP tools run as the authenticated user, with ownership checks and a persistent audit log of AI and MCP executions.',
    constraint:
      'Search cannot drift from Postgres, and agent writes cannot skip auth. Domain modules share a runtime but keep catalog, library, playback, search, and MCP separate in code.',
    result:
      'Clients get REST and MCP against the same user-scoped library. Events publish reliably via the outbox, search supports keyword and meaning, and AI playlist writes are controlled and auditable. Flyway, Docker Compose, and unit/integration tests come with the repo.',
    architecture: [
      'REST / MCP client',
      'Spring Security + JWT',
      'Catalog / library / playback',
      'PostgreSQL',
      'Transactional outbox',
      'Kafka',
      'OpenSearch + embeddings',
      'Hybrid search / AI curator',
    ],
  },
  {
    title: 'FastPay gRPC — real-time payments API',
    href: 'https://github.com/snehaamr/fastpay-grpc',
    summary:
      'A Java gRPC payments service covering unary transfers, bulk client streams, status server streams, and a live bidirectional feed—with a ledger, idempotency, and rate limiting.',
    problem:
      'REST plus JSON is a poor fit for live payment status and high-frequency streams: chatty round trips, no first-class streaming, and retries that easily double-post money. Amounts as floats are equally dangerous.',
    choice:
      'gRPC and Protobuf on HTTP/2, with money as integer cents. Each transfer has a unique transaction_id; a retry returns replayed=true and does not post twice. A token-bucket per API key limits unary and stream messages and returns RESOURCE_EXHAUSTED with retry pushback. Settled/failed/flagged payments write a transactional outbox row for webhooks in the same commit as the ledger update.',
    constraint:
      'This is a demo ledger (SQLite by default, Postgres as a HA step), not a bank. Still, the API has to survive retries, insufficient funds, fraud flags on the live stream, and load tests without corrupting balances.',
    result:
      'Unary, bulk, status, refund, and live RPCs share one contract. Idempotent posting, hashed API keys with roles, pagination, and optional TLS are in the service. ghz can drive the unary path so you can watch p50/p95/p99 and QPS; CI runs Gradle tests and a Docker build.',
    architecture: [
      'gRPC client',
      'Auth + rate limit',
      'FastPay RPCs',
      'Idempotent ledger',
      'SQLite / Postgres',
      'Transactional outbox',
      'Webhooks',
      'Status / live streams',
    ],
  },
]

export const earlierProjects = [
  {
    title: 'Mobile Adhoc Network Simulation NS-3',
    href: 'https://github.com/snehaamr/MobileAdhocNetworkNS3',
    description:
      'Simulation models of a Mobile Ad-Hoc Network (MANET) where nodes communicate with each other using a tree-like structure. Each node has a buffer that holds outgoing packets before they are transmitted, and the simulation tracks the number of packets sent, successfully delivered, and dropped due to buffer overflow. The goal is to analyze how varying buffer sizes affect packet transfer, delivery success, and data loss in the network.',
  },
  {
    title: 'Speaker Recognition using Audio Processing',
    href: 'https://github.com/snehaamr/SpeakerRecognitionMatlab',
    description:
      'A MATLAB-based speaker recognition system designed to identify individuals by the sound of their voice. The system uses Mel-frequency cepstral coefficients (MFCC) to extract features from recorded speech and compares these features to those stored in a speaker database.',
  },
  {
    title: 'Climate Data Analysis using Pig Scripts, Hadoop and D3.js',
    href: 'https://github.com/snehaamr/ClimateAnalysis',
    description:
      'This project processes climate data for the United States over the past 50 years using Apache Pig on Hadoop. It aggregates the average temperature and total precipitation for each year and visualizes the results using D3.js in a web-based dashboard.',
  },
  {
    title: 'Employee Payroll Management System',
    href: 'https://github.com/snehaamr/EmployeePayrollManagement',
    description:
      'A comprehensive Employee Management System for personal details, biometric data, department assignments, payroll processing, leave records, and salary management. Built with Java, Spring, Hibernate, and JPA to streamline HR processes and keep data accurate at scale.',
  },
]
