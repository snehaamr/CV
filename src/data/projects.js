export const projects = [
  {
    title: 'AI Document Intelligence Platform',
    href: 'https://github.com/snehaamr/DocumentIntelligencePlatform',
    description:
      'A document processing platform where authenticated users upload files, extract text, and use LLMs to classify and summarize content. Work runs asynchronously through background workers rather than blocking the request path. Built with Django, Django REST Framework, Celery, Redis, PostgreSQL, Docker, and OpenAI, with a layered backend, repository and service boundaries, transactional consistency, tests, and containerized deployment.',
  },
  {
    title: 'MusicPod — AI-assisted playlists',
    href: 'https://github.com/snehaamr/MusicPod',
    description:
      'A modular music backend for catalogs, user libraries, playlists, playback history, and hybrid search, plus AI-assisted playlist curation. PostgreSQL is the source of truth, Kafka handles async work, Redis caches, and OpenSearch powers lexical, semantic, and hybrid retrieval. It also exposes an authenticated MCP server over Streamable HTTP so tools can query and act on a user’s library with ownership checks and an audit trail. Other pieces include JWT auth, a transactional outbox, Flyway migrations, Docker Compose, and automated unit and integration tests.',
  },
  {
    title: 'FastPay gRPC — real-time payments API',
    href: 'https://github.com/snehaamr/fastpay-grpc',
    description:
      'A high-throughput, low-latency gRPC service in Java and Protobuf that models a real-time payments API. It covers the four gRPC interaction styles: unary RPCs for a single transfer, client streaming for bulk uploads, server streaming for status updates (initiated through settled), and bidirectional streaming for a live two-way transaction feed—the kind of patterns used in instant payments, payroll batches, and monitoring.',
  },
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
