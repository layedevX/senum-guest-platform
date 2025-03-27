import {
  ArrowLeft,
  Server,
  Code,
  CheckCircle2,
  Cpu,
  Database,
  Grid,
  HardDrive,
  Layers,
  Shield,
  ActivityIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Metadata } from "next";
import Navbar from "@/components/navbar";
import services from "@/utils/services";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ serviceId: string }>;
}): Promise<Metadata> {
  const { serviceId } = await params;

  const service = services.find((service) => service.id === serviceId);

  return {
    title: service?.title || "Not Found",
    description: service?.description,
  };
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ serviceId: string }>;
}) {
  const { serviceId } = await params;

  const service = services.find((service) => service.id === serviceId);

  if (!service) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-black">
        <h1 className="text-2xl font-bold text-white">Service not found</h1>
        <Link href="/" className="mt-4">
          <Button>Return to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col abstract-bg-alt">
      <Navbar />
      <main className="flex-1">
        <div className="container px-4 py-8 md:px-6 md:py-12">
          <Link
            href="/services"
            className="inline-flex items-center text-sm font-medium text-primary mb-6 hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>

          <div className="flex flex-col md:flex-row gap-8 my-[50px]">
            <div className="flex items-center justify-center p-6 bg-gray-100 rounded-lg md:w-1/4">
              <service.Icon className="h-12 w-12 text-primary" />
            </div>
            <div className="md:w-3/4">
              <h1 className="text-3xl font-bold mb-4 text-foreground">
                {service.title}
              </h1>
              <p className="text-lg text-foreground/50 mb-6">
                {service.longDescription}
              </p>
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
              className="p-4 border rounded-lg glass-bg-alt-2"
            >
              <h3 className="text-xl font-light mb-4 hidden">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent
              value="use-cases"
              className="p-4 border rounded-lg glass-bg-alt-2"
            >
              <h3 className="text-xl font-light mb-4 hidden">
                Common Use Cases
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.useCases.map((useCase, index) => (
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
        </div>
      </main>
    </div>
  );
}
