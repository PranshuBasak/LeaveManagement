# Clerk Webhooks Guide for Your Next.js Application

## Overview

Webhooks allow Clerk to notify your application when events happen in your authentication system. This guide explains how to set up and use the webhook endpoint in your application.

## Setup Instructions

### 1. Environment Configuration

Add the following to your `.env` or `.env.local` file:

```
CLERK_WEBHOOK_SIGNING_SECRET=your_webhook_signing_secret
```

You can find this secret in your Clerk Dashboard under **Webhooks**.

### 2. Clerk Dashboard Configuration

1. Log in to your [Clerk Dashboard](https://dashboard.clerk.dev/)
2. Navigate to the **Webhooks** section
3. Click **Add Endpoint**
4. Enter your webhook URL: `https://your-domain.com/api/webhooks`
   - For local development, you can use a service like [ngrok](https://ngrok.com/) to create a public URL
5. Select the events you want to receive (e.g., `user.created`, `user.updated`, etc.)
6. Save your webhook configuration

## Available Events

Your webhook handler is configured to process these common Clerk events:

- `user.created` - Triggered when a new user signs up
- `user.updated` - Triggered when user information is updated
- `user.deleted` - Triggered when a user is deleted
- `session.created` - Triggered when a user signs in
- `session.ended` - Triggered when a user signs out

You can find a complete list of events in the [Clerk documentation](https://clerk.com/docs/reference/webhooks/overview).

## Customizing the Webhook Handler

The webhook handler is located at `src/app/api/webhooks/route.ts`. You can modify it to perform custom actions when specific events occur.

For example, to create a user in your database when a new user signs up with Clerk:

```typescript
// In the user.created case
case "user.created":
  console.log("New user created:", JSON.stringify(evt.data, null, 2))
  // Add your database logic here
  const { id, email_addresses, first_name, last_name } = evt.data;
  await prisma.user.create({
    data: {
      clerkId: id,
      email: email_addresses[0]?.email_address,
      firstName: first_name,
      lastName: last_name,
      // Add other fields as needed
    }
  });
  break;
```

## Testing Webhooks

### Local Development

1. Use [ngrok](https://ngrok.com/) to expose your local server:

   ```
   ngrok http 3000
   ```

2. Update your webhook URL in the Clerk Dashboard with the ngrok URL

3. Trigger events by performing actions in your application (sign up, sign in, etc.)

4. Check your server logs to see the webhook events

### Production

In production, make sure your environment variables are properly set and your webhook URL is correctly configured in the Clerk Dashboard.

## Troubleshooting

- **Webhook verification errors**: Ensure your `CLERK_WEBHOOK_SIGNING_SECRET` is correctly set in your environment variables
- **Missing events**: Verify that you've selected the correct events in the Clerk Dashboard
- **Server errors**: Check your server logs for detailed error messages

## Security Considerations

- Never expose your signing secret
- Always verify webhook signatures to prevent unauthorized requests
- Consider rate limiting your webhook endpoint to prevent abuse

## Additional Resources

- [Clerk Webhooks Documentation](https://clerk.com/docs/reference/webhooks/overview)
- [Svix Documentation](https://docs.svix.com/) (Clerk uses Svix for webhook delivery)
