export async function POST(request: Request) {
  const REGISTER_ENDPOINT = process.env.REGISTER_ENDPOINT;

  if (!REGISTER_ENDPOINT) {
    console.log("REGISTER_ENDPOINT missing");
    return new Response(JSON.stringify({}), { status: 500 });
  }

  const body = await request.json();

  const result = await fetch(REGISTER_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

  if (result.status !== 200 && result.status !== 201) {
    try {
      const data = await result.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    console.log(`Error: Got status ${result.status} from register_endpoint`);
    return new Response(JSON.stringify({}), { status: 500 });
  }

  console.log("Registration successful...");

  return new Response(undefined, { status: 201 });
}
