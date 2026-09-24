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
      'Developed services for external bank account linking to the Stash app using the Plaid API, enhancing user integration.',
      'Played a key role in optimizing system architecture, creating microservices with Scala and Akka for improved scalability and performance.',
      'Orchestrated AWS service deployment using Terraform and CircleCI, automating infrastructure management and continuous integration.',
      'Implemented robust logging and monitoring with Sumo Logic, Looker, Sentry, and Honeybadger, ensuring proactive issue detection and resolution.',
      'Built ACH money movement services for secure fund transfers between external bank accounts and the Stash app.',
      'Refactored a legacy Ruby on Rails monolith to ensure compatibility with microservices, reducing system errors and increasing deployment velocity.',
      'Enabled real-time event processing and data exchange through efficient microservice communication with SNS/SQS and Kafka.',
      'Developed Python scripts to backfill DynamoDB, supporting the user transition from Quovo to Plaid.',
      'Integrated Braze API for marketing automation, resulting in a 15% increase in customer engagement through targeted push campaigns.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Catalina Marketing — Coupon Networks FR & JP',
    dates: 'April 2016 – April 2018',
    bullets: [
      'Engineered cross-platform SaaS applications supporting omni-channel coupon delivery, enhancing user experience across multiple markets.',
      'Utilized Swagger to build and document APIs, and wrote end-to-end tests using a scenario-based Gherkin approach with Cucumber/Selenium.',
      'Partnered with distributed engineering teams across Europe, accelerating feature delivery timelines by 25% through real-time collaboration.',
      'Developed centralized payment functionality and cross-platform SaaS applications using Java, Spring MVC, and RESTful APIs.',
      'Designed responsive web interfaces using HTML5, CSS3, SASS, Bootstrap, and AngularJS.',
      'Integrated Google Analytics and Google Tag Manager for user-behavior monitoring.',
      'Implemented Redis caching to enable low latency on web pages and high-memory availability.',
      'Optimized landing-page performance, reducing iframe latency from 13s to 4s, significantly improving user engagement and retention rates.',
      'Collaborated with the data science team on targeting users by most-visited store, retailers, purchase history, and location-based data.',
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
