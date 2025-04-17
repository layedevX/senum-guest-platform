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
  Gauge,
  Lock,
  BarChart,
  Workflow,
  Brain
} from "lucide-react";

export default [
  {
    id: "openshift-workspaces",
    title: "OpenShift Workspaces",
    description: "Fully managed OpenShift environments for your development teams.",
    Icon: Server,
    category: "development",
    longDescription:
      "OpenShift Workspaces provides a fully managed cloud development environment based on Red Hat OpenShift. It enables your development teams to code, build, test, and deploy applications without worrying about infrastructure management."
  },
  {
    id: "software-as-a-service",
    title: "Software as a Service",
    description:
      "Enterprise solutions including ERP, Analytics, AI/ML, IoT, Security, and more.",
    Icon: Code,
    category: "applications",
    longDescription:
      "Our Software as a Service (SaaS) offerings provide enterprise-grade applications delivered through the cloud. From ERP and analytics to AI/ML platforms and security solutions, we offer a comprehensive suite of business applications."
  },
  {
    id: "s3-object-storage",
    title: "S3 Object Storage",
    description: "Scalable, secure object storage for your applications and data.",
    Icon: HardDrive,
    category: "storage",
    longDescription:
      "Our S3 Object Storage service provides a highly scalable, reliable, and secure solution for storing and retrieving any amount of data from anywhere on the web. It's designed for 99.999999999% durability and 99.99% availability."
  },
  {
    id: "database-as-a-service",
    title: "Database as a Service",
    description:
      "Managed database services including MySQL, MongoDB, PostgreSQL, Oracle, and more.",
    Icon: Database,
    category: "data",
    longDescription:
      "Our Database as a Service (DBaaS) offering provides fully managed database solutions that eliminate the complexity of database administration. We support a wide range of database technologies to meet your specific needs."
  },
  {
    id: "virtual-machines",
    title: "Virtual Machines",
    description: "High-performance virtual machines with flexible configurations.",
    Icon: Cpu,
    category: "compute",
    longDescription:
      "Our Virtual Machines service provides scalable, on-demand compute capacity in the cloud. Choose from a variety of VM configurations optimized for different workloads, from general-purpose to compute-optimized and memory-optimized instances."
  },
  {
    id: "backup-as-a-service",
    title: "Backup as a Service",
    description: "Reliable backup solutions to protect your critical data.",
    Icon: Shield,
    category: "data",
    longDescription:
      "Our Backup as a Service solution provides automated, secure, and reliable data protection for your critical business information. We ensure your data is safe, recoverable, and compliant with industry regulations."
  },
  {
    id: "paas-application-hosting",
    title: "PaaS Application Hosting",
    description:
      "Platform as a Service for simplified application deployment and management.",
    Icon: Layers,
    category: "applications",
    longDescription:
      "Our Platform as a Service (PaaS) offering provides a complete development and deployment environment in the cloud. It allows you to focus on building and running your applications without the complexity of managing the underlying infrastructure."
  },
  {
    id: "openshift-clusters",
    title: "Cluster OpenShift",
    description:
      "Fully managed OpenShift clusters for enterprise container orchestration.",
    Icon: Grid,
    category: "development",
    longDescription:
      "Our Cluster OpenShift service provides fully managed Red Hat OpenShift clusters for enterprise-grade container orchestration. It combines the power of Kubernetes with additional features for a complete container platform experience."
  },
  {
    id: "serverless-functions",
    title: "Serverless Functions",
    description: "Event-driven serverless computing platform for modern applications.",
    Icon: ActivityIcon,
    category: "compute",
    longDescription:
      "Our Serverless Functions service allows you to run code without provisioning or managing servers. It automatically scales your applications based on demand, and you only pay for the compute time you consume."
  },
  {
    id: "monitoring-services",
    title: "Monitoring & Logging Services",
    description:
      "End-to-end monitoring and logging solutions for your infrastructure and applications.",
    Icon: Gauge,
    longDescription:
      "Experience comprehensive visibility into your infrastructure and applications with Monitoring & Logging Services. From real-time monitoring and alerting to centralized log management and analysis, we offer the tools and infrastructure needed to ensure the reliability and performance of your systems."
  },
  {
    id: "jboss-as-a-service",
    title: "JBoss as a Service",
    description: "Managed JBoss application server for Java enterprise applications.",
    Icon: Server,
    longDescription:
      "JBoss as a Service provides fully managed JBoss application server environments for your enterprise Java applications. We handle the deployment, configuration, scaling, and maintenance, allowing your team to focus on developing and improving your applications."
  },
  {
    id: "cluster-security-services",
    title: "Cluster Security Service",
    description:
      "Advanced security solutions for protecting your Kubernetes and OpenShift clusters.",
    Icon: Lock,
    longDescription:
      "The Cluster Security Service delivers comprehensive protection for your Kubernetes and OpenShift clusters. From vulnerability scanning and threat detection to policy enforcement and compliance monitoring, we offer the tools and infrastructure needed to secure your containerized applications and infrastructure."
  },
  {
    id: "big-data-analytics-platforms",
    title: "Big Data Analytics Platform",
    description: "Scalable platform for processing and analyzing large datasets.",
    Icon: BarChart,
    longDescription:
      "Experience powerful data processing with our Big Data Analytics platform that provides the tools and infrastructure needed to process, analyze, and visualize large datasets. From data ingestion and storage to processing and visualization, we offer a comprehensive solution for your big data analytics needs."
  },
  {
    id: "automation-platform-as-a-service",
    title: "Automation Platform as a Service",
    description:
      "Enterprise automation platform for streamlining IT operations and workflows.",
    Icon: Workflow,
    longDescription:
      "Streamline operations with the Automation Platform that provides the tools and infrastructure needed to automate your IT operations and workflows. From infrastructure provisioning and configuration management to application deployment and monitoring, we offer a comprehensive solution for your automation needs."
  },
  {
    id: "ai-ml-platforms",
    title: "AI/ML Platform as a Service",
    description:
      "Fully managed platform for developing, training, and deploying AI/ML models.",
    Icon: Brain,
    longDescription:
      "The AI/ML Platform equips you with the tools, infrastructure, and frameworks needed to build, train, and deploy machine learning models at scale. From data preparation and model training to deployment and monitoring, we offer a comprehensive solution for your AI and machine learning needs."
  }
];
