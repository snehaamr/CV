export const site = {
  name: 'Sneha Avula',
  title: 'Senior Software Engineer',
  location: 'New York',
  photo: 'images/profile-photo.jpg',
  focus: ['Java', 'Spring Boot', 'AWS', 'Kafka', 'Python'],
  about: [
    "I'm a senior software engineer with extensive experience building scalable, high-performance services. My core strengths are Java, Spring Boot, and AWS. I specialize in microservices, event-driven architecture, and cloud platforms—and I care about systems that stay reliable under real production load.",
    "In my current role I lead the design, development, and deployment of microservices that streamline order placement and delivery. That includes moving legacy point-of-sale flows onto a centralized platform, tightening CI so code quality is enforced in the pipeline, and putting centralized logging in place so issues are easier to see. I have also been integrating AI into that work: using OpenAI's GPT API and AWS Bedrock to parse unstructured delivery instructions, summarize order notes, and draft responses to customer questions. I have about three years of production Python experience alongside Java and Scala backend work—recently using Python with the OpenAI API to turn free-text delivery notes into structured updates, and building a data-quality service that validated delivery events in real time before they reached analytics, which cut data errors by more than 30% and improved SLA reporting.",
    "Earlier I spent years on partner and payments platforms—onboarding merchants and loyalty providers, replacing slow batch workflows with APIs, and using Kafka so updates that used to take days could flow in real time. One of the harder problems was partner payloads that never quite matched: I owned a schema-driven validation and versioning layer (JSON Schema, a schema registry, and AWS Lambda pre-processors) so new partners did not require rewriting the core service, with mapping into a canonical model, version negotiation, and clear validation errors. Caching and reusable parsers brought validation time from about 400ms to under 50ms. I have also built cloud services for linking external bank accounts (Plaid), infrastructure with Terraform, and service-to-service communication over SNS/SQS and Kafka, plus monitoring with tools such as Sumo Logic and Looker. Earlier in my career I worked on SaaS product surfaces and on loan-processing systems in finance, with a strong emphasis on code review and BDD testing.",
    "I like hard technical problems, shipping with other teams, and getting a little better every cycle. Outside of work I run a book club in New York, and I spend time hiking, cooking, and on DIY projects. I am also learning tennis—very much a beginner—and would love to find someone to practice with.",
  ],
  social: [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/sneyhamr/', icon: 'linkedin' },
    { name: 'GitHub', href: 'https://github.com/snehaamr', icon: 'github' },
    { name: 'Medium', href: 'https://medium.com/@sneha.avula23', icon: 'medium' },
    { name: 'Goodreads', href: 'https://www.goodreads.com/user/show/83056408-sneha-avula/', icon: 'goodreads' },
    { name: 'X', href: 'https://x.com/Snehaa23', icon: 'x' },
    { name: 'Instagram', href: 'https://www.instagram.com/sneyhamr/', icon: 'instagram' },
    { name: 'Facebook', href: 'https://www.facebook.com/sneha.avula.7/', icon: 'facebook' },
  ],
}

export const navLinks = [
  { to: '/resume', label: 'Resume' },
  { to: '/projects', label: 'Projects' },
  { to: '/books', label: 'Books' },
]
