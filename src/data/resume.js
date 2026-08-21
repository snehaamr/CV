export const summary =
  'Senior Software Engineer with 10+ years of experience building scalable microservices and cloud solutions. Strong focus on event-driven architectures, system performance optimization, and resilient distributed systems. Proven track record of leading and delivering high-impact solutions. Passionate about mentoring teams and leveraging AI tools.'

export const jobs = [
  {
    role: 'Senior Software Engineer / Lead',
    company: 'Sherwin-Williams — Orders and Delivery',
    dates: 'March 2023 – Present',
    bullets: [
      'Designed, developed, and deployed services using Java 17, Spring Boot, React, Oracle, and AWS.',
      'Led POS system migration to a centralized order management platform, reducing order processing time by 40%.',
      'Optimized API calls to third-party services (Descartes/Ecourier) with asynchronous calls, improving system performance.',
      'Modularized the application using Java Modules, improving performance, memory management, and maintainability.',
      'Directed beta rollout to 500+ stores, improving order accuracy and delivery timelines.',
      'Implemented and streamlined CI pipelines with Jenkins, Docker, and Kubernetes, ensuring code quality through enforced reviews and test coverage.',
      'Centralized logging using CloudWatch, enhancing system monitoring and troubleshooting efficiency.',
      "Built LLM-powered functionality using OpenAI's GPT API and AWS Bedrock to parse unstructured delivery instructions, summarize order notes, and generate proactive responses to customer inquiries.",
      'Utilized AI coding assistants (GitHub Copilot, Claude) to support code generation, automated testing, and pull request reviews, increasing development productivity and maintaining high code quality standards.',
    ],
    technologies:
      'Java 17, Spring Boot, AWS, RESTful APIs, Jenkins, ECS, Oracle/PLSQL, Docker/Kubernetes, JUnit/Mockito, React, Bedrock, OpenAI GPT, AI assistants',
  },
  {
    role: 'Senior Java Developer',
    company: 'American Express — Credit Cards, Partner Integration',
    dates: 'January 2020 – February 2023',
    bullets: [
      'Developed microservices for partner integration within the credit card systems portfolio, focusing on seamless interaction with retailers, banks, and co-branded cards.',
      'Deployed Java and Spring Boot-based services to facilitate integrations with Amex, retailers, and banks via common functional services.',
      'Spearheaded Kafka implementation for real-time event streaming, improving inter-service communication and data flow.',
      'Reduced rewards update latency from 3 days to real-time using Kafka stream processing, enhancing customer experience across partner platforms.',
      'Partnered with cross-functional upstream/downstream teams to ensure seamless API integration and data flow.',
    ],
    technologies:
      'Java 11, Spring Boot/JPA, CI/CD, SonarQube, AWS (ECS, EKS, Kafka, Kinesis, S3, Secret Manager, CloudFront, CloudWatch), Terraform, Postgres, Kubernetes, Redis, JUnit, Grafana, Kibana',
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
    technologies:
      'Scala/Akka, Plaid API, Ruby on Rails, AWS (ECS, Kafka, SNS/SQS, S3, Fargate, Lambda, Secret Manager, IAM, CloudFront, Encryption SDK, CloudWatch, DynamoDB, ElastiCache), Terraform, CircleCI, PostgreSQL, Kubernetes, Sumo Logic, Looker, Sentry, Honeybadger, New Relic, Braze',
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
    technologies:
      'Java 8, Spring MVC, Swagger, RESTful APIs, Angular, HTML5, CSS/SASS, Bootstrap, Google Analytics, Google Tag Manager, Redis',
  },
  {
    role: 'Junior Software Developer',
    company: 'JPMC — TA Adapter Bank Loans',
    dates: 'November 2014 – April 2016',
    bullets: [
      'Coordinated with product owners and stakeholders for requirement analysis, creating acceptance criteria and translating them into feature scenarios using Cucumber.',
      'Developed and deployed loan processing modules in Java/Spring, reducing trade settlement times by 40% and integrating with legacy banking systems.',
      'Engineered modules to parse high-volume XML trade data, store structured records in internal databases, and transmit transformed XML payloads to downstream systems via JMS.',
      'Conducted thorough code reviews using Fisheye/Crucible, ensuring high-quality software development and adherence to best practices.',
      'Utilized REST APIs for communicating with external clients.',
      'Engineered BDD tests with Cucumber, enhancing test coverage and software reliability. Deployed applications on Apache Tomcat.',
    ],
    technologies:
      'Java 7, Spring, Maven/Jenkins, REST APIs, BDD, Fisheye, Crucible, Tomcat, JMS, Cucumber/Selenium, JUnit/Mockito',
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
