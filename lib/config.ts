export function getHubUrl(): string {
  const env = process.env.NEXT_PUBLIC_ENV;
  

  if (env === "staging") {
    
    return process.env.NEXT_PUBLIC_URL_STAGING ?? "";
  }

  
  return process.env.NEXT_PUBLIC_URL_PROD ?? "";
}
