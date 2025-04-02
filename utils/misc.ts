import {
  Database,
  Server,
  Shield,
  Cpu,
  HardDrive,
  Code,
  Layers,
  ActivityIcon,
  Grid
} from "lucide-react";

export const cl = (
  ...classNames: Array<string | { [key: string]: boolean | undefined } | undefined>
): string => {
  return classNames
    .map((className) => {
      if (typeof className === "undefined") return undefined;
      if (typeof className === "string") return className;

      const [key, condition] = Object.entries(className)[0];
      if (!condition) return undefined;

      return key;
    })
    .filter((val) => val)
    .join(" ");
};

export const partners = [
  { name: "Red Hat", logo: "/redhat.png", width: 100, height: 50 },
  { name: "Dell", logo: "/dell.png", width: 100, height: 50 },
  {
    name: "IBM LinuxOne",
    logo: "/linuxone.png",
    width: 120, // Increased size for IBM LinuxONE
    height: 60
  },
  { name: "HPE", logo: "/hpe.png", width: 110, height: 55 },
  { name: "Cisco", logo: "/cisco.png", width: 100, height: 50 },
  { name: "Veeam", logo: "/veeam.png", width: 100, height: 50 },
  { name: "Fortinet", logo: "/fortinet.png", width: 100, height: 50 },
  { name: "ELK", logo: "/elk.png", width: 100, height: 50 }
];
