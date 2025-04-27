

export async function POST(req: Request) {


  // Get body
  const payload = await req.json()
  const body = JSON.stringify(payload)

  
  console.log('Webhook payload:', body)

  return new Response('Webhook received', { status: 200 })
}
