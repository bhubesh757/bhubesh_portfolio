export const profile = {
  name: 'Bhubesh S R',
  role: 'DevOps Engineer / SRE / AI Engineer',
  location: 'India',
  email: 'bhubesh2k19@gmail.com',
  linkedin: 'https://www.linkedin.com/in/bhubesh-sr-3a0371196/',
  github: 'https://github.com/bhubesh757',
}

export const skills = [
  { icon: 'cloud', title: 'Cloud & Infrastructure', items: 'AWS · Azure · GCP · EC2 · S3 · Lambda · ECS · EKS · RDS · VPC · IAM · CloudWatch' },
  { icon: 'workflow', title: 'DevOps & SRE', items: 'Docker · Kubernetes · Terraform · CloudFormation · Ansible · Jenkins · GitHub Actions · GitLab CI' },
  { icon: 'activity', title: 'Observability', items: 'Prometheus · Grafana · Datadog · ELK Stack · Monitoring · Incident workflows' },
  { icon: 'code', title: 'Programming & APIs', items: 'Python · JavaScript · Bash · Java · REST · GraphQL · PostgreSQL · MySQL · boto3' },
  { icon: 'brain', title: 'AI & Agentic Systems', items: 'LLMs · RAG · LangChain · LangGraph · MCP · Guardrails · PyTorch · NLP · Databricks' },
  { icon: 'git-branch', title: 'Integration & Delivery', items: 'MuleSoft · API Manager · CloudHub · DataWeave · Kafka · CI/CD · Git · Postman' },
]

export const projects = [
  { number: '01', type: 'AGENTIC AI · AUTOMATION', title: 'Incident Audit LLM', description: 'LLM-assisted incident audit workflow designed to reduce manual review effort and make operational analysis faster.', impact: '~15 hrs', impactLabel: 'reported monthly effort saved', tags: ['Python', 'LLM', 'RAG', 'Automation'] },
  { number: '02', type: 'PLATFORM AUTOMATION', title: 'Mainframe Job Automation', description: 'Automated mainframe job execution workflows to reduce repetitive manual operations and improve consistency.', impact: '41 hrs', impactLabel: 'reported effort saved', tags: ['Python', 'Automation', 'Scheduling'] },
  { number: '03', type: 'GENAI · DOCUMENT WORKFLOW', title: 'Tosca LLM Assistant', description: 'Agent-based workflow to retrieve relevant documents and generate reports, reducing repetitive information gathering.', impact: '133 hrs/year', impactLabel: 'reported effort saved', tags: ['LLM', 'Agents', 'Document retrieval'] },
  { number: '04', type: 'DATA ENGINEERING', title: 'Big Data Retail Analytics', description: 'Analytics pipeline using distributed data processing and cloud storage to transform retail data into useful insights.', tags: ['Databricks', 'PySpark', 'Hive', 'Hadoop', 'AWS S3'] },
  { number: '05', type: 'EVENT-DRIVEN SYSTEMS', title: 'Real-Time Order Processing', description: 'Event-driven order processing prototype exploring streaming data and asynchronous service communication.', tags: ['Kafka', 'Python', 'Streaming'] },
  { number: '06', type: 'MACHINE LEARNING', title: 'AI Image Generator', description: 'Generative model project exploring image synthesis and model workflows in a cloud ML environment.', tags: ['GAN', 'PyTorch', 'Azure ML'] },
]

export const experience = [
  {
    date: 'JAN 2026 — PRESENT',
    role: 'Custom Software Engineer Associate',
    company: 'Accenture',
    bullets: [
      'Developing LLM and agentic AI workflows to streamline operational and document-heavy tasks.',
      'Building automation for mainframe job execution, incident auditing, and health-check workflows.',
      'Working with Python, APIs, MCP, guardrails, and GenWizard-based workflow automation.',
      'Collaborating on solution design and engineering improvements for team use cases.',
    ],
  },
  {
    date: 'MAY 2024',
    role: 'Intern',
    company: 'Titan Company Limited · Bengaluru',
    bullets: ['Gained industry exposure and contributed to practical technology and business workflows.'],
  },
]
