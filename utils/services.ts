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
  { id: "openshift-workspaces", Icon: Server, category: "development" },
  { id: "software-as-a-service", Icon: Code, category: "applications" },
  { id: "s3-object-storage", Icon: HardDrive, category: "storage" },
  { id: "database-as-a-service", Icon: Database, category: "data" },
  { id: "virtual-machines", Icon: Cpu, category: "compute" },
  { id: "backup-as-a-service", Icon: Shield, category: "data" },
  { id: "paas-application-hosting", Icon: Layers, category: "applications" },
  { id: "openshift-clusters", Icon: Grid, category: "development" },
  { id: "serverless-functions", Icon: ActivityIcon, category: "compute" },
  { id: "monitoring-services", Icon: Gauge },
  { id: "jboss-as-a-service", Icon: Server },
  { id: "cluster-security-services", Icon: Lock },
  { id: "big-data-analytics-platforms", Icon: BarChart },
  { id: "automation-platform-as-a-service", Icon: Workflow },
  { id: "ai-ml-platforms", Icon: Brain }
];
