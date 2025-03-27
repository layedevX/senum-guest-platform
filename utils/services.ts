import {
  Database,
  Server,
  Shield,
  Cpu,
  HardDrive,
  Code,
  Layers,
  ActivityIcon,
  Grid,
} from "lucide-react";

export default [
  {
    id: "openshift-workspaces",
    title: "OpenShift Workspaces",
    description:
      "Fully managed OpenShift environments for your development teams.",
    Icon: Server,
    category: "development",
    longDescription:
      "OpenShift Workspaces provides a fully managed cloud development environment based on Red Hat OpenShift. It enables your development teams to code, build, test, and deploy applications without worrying about infrastructure management.",
    features: [
      "Fully managed OpenShift environment",
      "Integrated CI/CD pipelines",
      "Containerized development workspaces",
      "Team collaboration tools",
      "Automated scaling and resource management",
      "Enterprise-grade security",
    ],
    useCases: [
      "Enterprise application development",
      "Microservices architecture",
      "DevOps transformation",
      "Cloud-native development",
    ],
  },
  {
    id: "software-as-a-service",
    title: "Software as a Service",
    description:
      "Enterprise solutions including ERP, Analytics, AI/ML, IoT, Security, and more.",
    Icon: Code,
    category: "applications",
    longDescription:
      "Our Software as a Service (SaaS) offerings provide enterprise-grade applications delivered through the cloud. From ERP and analytics to AI/ML platforms and security solutions, we offer a comprehensive suite of business applications.",
    features: [
      "Subscription-based pricing model",
      "Automatic updates and maintenance",
      "Enterprise-grade security and compliance",
      "Seamless integration with existing systems",
      "Scalable resources based on demand",
      "24/7 technical support",
    ],
    useCases: [
      "Business process automation",
      "Data analytics and business intelligence",
      "Customer relationship management",
      "Enterprise resource planning",
    ],
  },
  {
    id: "s3-object-storage",
    title: "S3 Object Storage",
    description:
      "Scalable, secure object storage for your applications and data.",
    Icon: HardDrive,
    category: "storage",
    longDescription:
      "Our S3 Object Storage service provides a highly scalable, reliable, and secure solution for storing and retrieving any amount of data from anywhere on the web. It's designed for 99.999999999% durability and 99.99% availability.",
    features: [
      "Unlimited storage capacity",
      "Pay-as-you-go pricing model",
      "Data encryption at rest and in transit",
      "Versioning and lifecycle management",
      "Multi-region replication",
      "Access control and permissions",
    ],
    useCases: [
      "Backup and recovery",
      "Big data analytics",
      "Content distribution",
      "Data archiving",
    ],
  },
  {
    id: "database-as-a-service",
    title: "Database as a Service",
    description:
      "Managed database services including MySQL, MongoDB, PostgreSQL, Oracle, and more.",
    Icon: Database,
    category: "data",
    longDescription:
      "Our Database as a Service (DBaaS) offering provides fully managed database solutions that eliminate the complexity of database administration. We support a wide range of database technologies to meet your specific needs.",
    features: [
      "Automated backups and point-in-time recovery",
      "High availability and failover",
      "Performance monitoring and optimization",
      "Automatic scaling",
      "Security and compliance",
      "24/7 expert support",
    ],
    useCases: [
      "Web and mobile applications",
      "E-commerce platforms",
      "Content management systems",
      "Business intelligence and analytics",
    ],
  },
  {
    id: "virtual-machines",
    title: "Virtual Machines",
    description:
      "High-performance virtual machines with flexible configurations.",
    Icon: Cpu,
    category: "compute",
    longDescription:
      "Our Virtual Machines service provides scalable, on-demand compute capacity in the cloud. Choose from a variety of VM configurations optimized for different workloads, from general-purpose to compute-optimized and memory-optimized instances.",
    features: [
      "Flexible VM configurations",
      "Pay-as-you-go pricing",
      "Dedicated or shared resources",
      "Automated scaling",
      "High availability options",
      "Integrated monitoring and management",
    ],
    useCases: [
      "Application hosting",
      "Development and testing",
      "Disaster recovery",
      "Legacy application migration",
    ],
  },
  {
    id: "backup-as-a-service",
    title: "Backup as a Service",
    description: "Reliable backup solutions to protect your critical data.",
    Icon: Shield,
    category: "data",
    longDescription:
      "Our Backup as a Service solution provides automated, secure, and reliable data protection for your critical business information. We ensure your data is safe, recoverable, and compliant with industry regulations.",
    features: [
      "Automated backup scheduling",
      "Incremental and full backups",
      "End-to-end encryption",
      "Rapid recovery options",
      "Long-term retention policies",
      "Compliance reporting",
    ],
    useCases: [
      "Business continuity",
      "Disaster recovery",
      "Regulatory compliance",
      "Protection against ransomware",
    ],
  },
  {
    id: "paas-application-hosting",
    title: "PaaS Application Hosting",
    description:
      "Platform as a Service for simplified application deployment and management.",
    Icon: Layers,
    category: "applications",
    longDescription:
      "Our Platform as a Service (PaaS) offering provides a complete development and deployment environment in the cloud. It allows you to focus on building and running your applications without the complexity of managing the underlying infrastructure.",
    features: [
      "Simplified application deployment",
      "Automatic scaling and load balancing",
      "Integrated development tools",
      "Built-in monitoring and logging",
      "Continuous integration and delivery",
      "Multi-language support",
    ],
    useCases: [
      "Web application hosting",
      "API development and hosting",
      "Microservices architecture",
      "DevOps enablement",
    ],
  },
  {
    id: "cluster-openshift",
    title: "Cluster OpenShift",
    description:
      "Fully managed OpenShift clusters for enterprise container orchestration.",
    Icon: Grid,
    category: "development",
    longDescription:
      "Our Cluster OpenShift service provides fully managed Red Hat OpenShift clusters for enterprise-grade container orchestration. It combines the power of Kubernetes with additional features for a complete container platform experience.",
    features: [
      "Fully managed OpenShift clusters",
      "Automated cluster provisioning",
      "Integrated CI/CD pipelines",
      "Advanced networking and security",
      "Multi-cluster management",
      "Enterprise support",
    ],
    useCases: [
      "Containerized application deployment",
      "Hybrid cloud environments",
      "Microservices architecture",
      "DevOps transformation",
    ],
  },
  {
    id: "serverless-functions",
    title: "Serverless Functions",
    description:
      "Event-driven serverless computing platform for modern applications.",
    Icon: ActivityIcon,
    category: "compute",
    longDescription:
      "Our Serverless Functions service allows you to run code without provisioning or managing servers. It automatically scales your applications based on demand, and you only pay for the compute time you consume.",
    features: [
      "Zero infrastructure management",
      "Automatic scaling",
      "Pay-per-execution pricing",
      "Event-driven architecture",
      "Integrated monitoring and logging",
      "Multi-language support",
    ],

    useCases: [
      "API backends",
      "Real-time file processing",
      "IoT data processing",
      "Scheduled tasks and automation",
    ],
  },
];
