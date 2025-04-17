import {
  Archive,
  ArchiveRestore,
  ArrowLeft,
  CheckCircle2,
  Clock,
  Database,
  FileCode,
  Globe,
  Package,
  Share2,
  Waves,
  Zap
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Metadata } from "next";
import Navbar from "@/components/navbar";
import services from "@/utils/services";

const service = services.find((service) => service.id === "paas-application-hosting")!;

const features = [
  "Simplified application deployment",
  "Automatic scaling and load balancing",
  "Integrated development tools",
  "Built-in monitoring and logging",
  "Continuous integration and delivery",
  "Multi-language support"
];
const useCases = [
  "Web application hosting",
  "API development and hosting",
  "Microservices architecture",
  "DevOps enablement"
];

const paasOptions = [
  {
    id: "web-apps",
    title: "Web Applications",
    description: "Hosting for web applications with automatic scaling.",
    icon: <Globe className="h-10 w-10 text-primary" />,
    features: [
      "Automatic scaling based on traffic",
      "Zero-downtime deployments",
      "Built-in CDN integration",
      "Custom domain support",
      "SSL certificate management",
      "Performance monitoring"
    ]
  },
  {
    id: "api-hosting",
    title: "API Hosting",
    description: "Dedicated environment for API development and hosting.",
    icon: <Share2 className="h-10 w-10 text-primary" />,
    features: [
      "API gateway integration",
      "Rate limiting and throttling",
      "Authentication and authorization",
      "API versioning support",
      "Request/response validation",
      "API documentation generation"
    ]
  },
  {
    id: "container-apps",
    title: "Container Applications",
    description: "Containerized application hosting with orchestration.",
    icon: <Package className="h-10 w-10 text-primary" />,
    features: [
      "Container orchestration",
      "Service discovery",
      "Load balancing",
      "Health monitoring",
      "Rolling updates",
      "Resource management"
    ]
  },
  {
    id: "static-sites",
    title: "Static Sites",
    description: "High-performance hosting for static websites.",
    icon: <FileCode className="h-10 w-10 text-primary" />,
    features: [
      "Global CDN distribution",
      "Automatic asset optimization",
      "Instant cache invalidation",
      "Continuous deployment",
      "Preview environments",
      "Analytics integration"
    ]
  }
];

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fr" }];
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  return { title: service.title, description: service.description };
}

export default async function ServiceDetail({
  params
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div className="flex min-h-screen flex-col abstract-bg-alt">
      <Navbar />
      <main className="flex-1">
        <div className="container px-4 py-8 md:px-6 md:py-12">
          <Link
            href="/services"
            className="inline-flex items-center text-sm font-medium text-primary mb-6 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>

          <div className="flex flex-col md:flex-row gap-8 my-[50px]">
            <div className="flex items-center justify-center p-6 bg-gray-100 rounded-lg md:w-1/4">
              <service.Icon className="h-12 w-12 text-primary" />
            </div>
            <div className="md:w-3/4">
              <h1 className="text-3xl font-bold mb-4 text-foreground">{service.title}</h1>
              <p className="text-lg text-foreground/50 mb-6">{service.longDescription}</p>
              <a href="https://origins.heritage.africa">
                <Button className="bg-primary hover:bg-primary/90 text-white w-full">
                  Access {service.title}
                </Button>
              </a>
            </div>
          </div>

          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="use-cases">Use Cases</TabsTrigger>
            </TabsList>
            <TabsContent
              value="features"
              className="p-4 border rounded-lg glass-bg-alt-2">
              <h3 className="text-xl font-light mb-4 hidden">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent
              value="use-cases"
              className="p-4 border rounded-lg glass-bg-alt-2">
              <h3 className="text-xl font-light mb-4 hidden">Common Use Cases</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {useCases.map((useCase, index) => (
                  <Card key={index} className="bg-white">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-gray-700">{useCase}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/*  Section */}
          <div className="mt-12">
            <p className="text-lg text-foreground/80 mb-6">Application Hosting Options</p>

            <div className="flex flex-row flex-wrap gap-4 mb-8">
              {paasOptions.map((option) => (
                <Card key={option.id} className="border bg-white flex-1 min-w-[200px]">
                  <CardContent className="p-4">
                    <div className="flex flex-col items-center">
                      <div className="mb-3">{option.icon}</div>
                      <h4 className="font-medium text-lg text-center mb-2">
                        {option.title}
                      </h4>
                      <p className="text-sm text-foreground/70 mb-3 text-center">
                        {option.description}
                      </p>
                      <div className="text-sm mb-3 w-full">
                        <h5 className="font-medium mb-2">Key Features:</h5>
                        <ul className="space-y-1">
                          {option.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          {/*  */}
        </div>
      </main>
    </div>
  );
}
