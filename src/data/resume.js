export const summary =
  'Senior Software Engineer with 10+ years of experience building scalable microservices and cloud solutions. Strong focus on event-driven architectures, system performance optimization, and resilient distributed systems. Proven track record of leading and delivering high-impact solutions. Passionate about mentoring teams and leveraging AI tools.'

export const jobs = [
  {
    role: 'Senior Software Engineer / Lead',
    company: 'Sherwin-Williams — Orders and Delivery',
    dates: 'March 2023 – Present',
    bullets: [
      'Led the architecture and rollout of a centralized order management platform that replaced legacy store workflows across 500+ stores, reducing order processing time by about 40%.',
      'Designed and built distributed backend services using Java 17 and 21, Spring Boot, Oracle, and AWS to support order creation, fulfillment, delivery scheduling, and downstream logistics workflows.',
      'Redesigned integrations with external delivery providers including Descartes and eCourier using asynchronous processing and resilient integration patterns, improving responsiveness and reducing failures caused by external dependencies.',
      'Directed beta rollout across 500+ stores and partnered with engineering, product, and store operations teams to identify workflow gaps, improve order accuracy, and support reliable adoption of the new platform.',
      'Improved application performance and maintainability by modularizing the platform using Java Modules and optimizing memory usage and runtime behavior.',
      'Built a production AI pipeline using OpenAI GPT and AWS Bedrock to convert unstructured delivery instructions into structured, actionable information for downstream fulfillment workflows.',
      'Integrated the AI workflow with Java, Spring Boot, AWS Lambda, API Gateway, S3, DynamoDB, and SNS/SQS, using asynchronous processing to keep model calls from blocking critical order workflows.',
      'Built a feedback loop for AI-generated delivery summaries and used operational feedback to improve prompts, parsing logic, and output quality over time.',
      'Reduced manual review of delivery instructions by more than 60% and improved on-time delivery accuracy by approximately 30% by automating interpretation and summarization of delivery notes.',
      'Improved production reliability and troubleshooting through centralized CloudWatch observability, automated CI/CD with Jenkins, and containerized deployments using Docker and Kubernetes.',
      'Contributed to architecture discussions, design and code reviews, production incident resolution, and mentoring of engineers across the team.',
    ],
  },
  {
    role: 'Senior Java Developer',
    company: 'American Express — Credit Cards, Partner Integration',
    dates: 'January 2020 – February 2023',
    bullets: [
      'Designed and built a schema-driven partner integration framework using Java, Spring Boot, JSON Schema, AWS Lambda, and API Gateway, reducing new partner onboarding from multiple weeks to approximately 3–5 days.',
      'Externalized partner API contracts through versioned schemas and built canonical mapping capabilities that isolated partner-specific payload differences from core Amex services.',
      'Designed backward-compatible contract versioning that allowed multiple versions of partner APIs to operate simultaneously and supported rollback when integration changes introduced failures.',
      'Reduced partner payload and downstream integration errors by more than 40% by introducing early contract validation, standardized error handling, and consistent data models.',
      'Optimized schema validation through caching and parser reuse, reducing average validation latency from approximately 400 ms to under 50 ms.',
      'Integrated partner workflows with internal Kafka event streams and distributed services supporting fraud, rewards, settlement, analytics, and other downstream systems.',
      'Led technical discussions across security, fraud, settlement, data engineering, product teams, and external partners to define contracts, resolve conflicting requirements, and align integration standards.',
      'Helped introduce Kafka-based real-time processing for partner and rewards workflows, reducing rewards update latency from approximately three days to near real time.',
      'Designed and supported resilient event-driven services with attention to retries, duplicate processing, failure recovery, observability, and reliable data movement between internal and external systems.',
      'Documented integration patterns and supported engineering and operational teams through partner onboarding, production releases, and troubleshooting.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Stash Invest — External Accounts & Money Transfers',
    dates: 'May 2018 – October 2019',
    bullets: [
      'Built backend services supporting ACH money movement between external bank accounts and Stash, working on financial workflows where transaction correctness, reliability, and customer trust were critical.',
      'Developed external bank account linking capabilities using the Plaid API, supporting secure integration between customer bank accounts and the Stash platform.',
      'Helped modernize backend architecture by building scalable microservices using Scala and Akka and reducing dependencies on a legacy Ruby on Rails monolith.',
      'Built event-driven integrations using Kafka and AWS SNS/SQS to support asynchronous communication and reliable data exchange between financial services.',
      'Automated AWS infrastructure and application delivery using Terraform, CircleCI, ECS, Fargate, Lambda, and Kubernetes, improving deployment consistency and engineering velocity.',
      'Developed Python data migration and backfill utilities for DynamoDB as Stash transitioned external account connectivity from Quovo to Plaid.',
      'Improved operational visibility through Sumo Logic, New Relic, Sentry, Honeybadger, and CloudWatch, supporting proactive detection and resolution of production issues.',
      'Integrated Braze with customer engagement workflows, contributing to approximately 25% higher engagement through targeted notifications and campaigns.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Catalina Marketing — Coupon Networks FR & JP',
    dates: 'April 2016 – April 2018',
    bullets: [
      'Built cross-platform SaaS applications supporting digital coupon delivery across international markets using Java, Spring MVC, REST APIs, and AngularJS.',
      'Developed centralized payment functionality and backend APIs supporting coupon and promotional workflows across multiple channels.',
      'Improved application responsiveness through Redis caching and performance tuning, reducing landing-page iframe latency from approximately 13 seconds to 4 seconds.',
      'Worked with distributed engineering teams across the US and Europe, helping accelerate feature delivery by approximately 25% through closer technical collaboration and shared delivery practices.',
      'Built and documented APIs using Swagger and developed end-to-end automated tests with Cucumber and Selenium.',
      'Collaborated with data science teams on targeting capabilities using customer purchase history, store affinity, and location-based signals.',
      'Integrated Google Analytics and Google Tag Manager to improve visibility into user behavior and product engagement.',
    ],
  },
]

export const education = [
  {
    school: 'West Virginia University',
    credential: "Master's in Computer Science",
    dates: 'August 2012 – May 2014',
  },
  {
    school: 'Acharya Nagarjuna University',
    credential: "Bachelor's in Computer Science",
    dates: 'August 2007 – April 2011',
  },
]

export const skills = [
  'Java',
  'Spring / Spring Boot',
  'REST APIs',
  'Swagger',
  'Terraform',
  'Postgres / MySQL',
  'Jenkins & CircleCI',
  'Microservices',
  'Event streaming',
  'Testing',
  'React',
  'Scala / Akka',
  'AWS (ECS, EKS, EC2, Lambda, Kafka, Kinesis, S3, DynamoDB, CloudWatch, Bedrock)',
  'gRPC',
  'HTTP/2',
  'GraphQL',
  'Distributed systems',
  'Concurrency',
  'Memory management',
  'Application performance',
]
