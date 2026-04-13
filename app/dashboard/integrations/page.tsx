"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

export default function IntegrationsPage() {
  const connection = useQuery(api.telegram.getConnection);
  const createToken = useMutation(api.telegram.createConnectToken);
  const disconnect = useMutation(api.telegram.disconnect);

  const [deepLink, setDeepLink] = useState<string | null>(null);
  const [connecting, setConnecting] = useState(false);
  const [disconnecting, setDisconnecting] = useState(false);

  const botUsername = process.env.NEXT_PUBLIC_TELEGRAM_BOT_USERNAME;

  async function handleConnect() {
    setConnecting(true);
    try {
      const token = await createToken();
      setDeepLink(`https://t.me/${botUsername}?start=${token}`);
    } finally {
      setConnecting(false);
    }
  }

  async function handleDisconnect() {
    setDisconnecting(true);
    try {
      await disconnect();
      setDeepLink(null);
    } finally {
      setDisconnecting(false);
    }
  }

  const isConnected = connection?.status === "connected";
  const isPending = connection?.status === "pending";

  const resolvedDeepLink =
    deepLink ??
    (isPending && connection?.connectToken
      ? `https://t.me/${botUsername}?start=${connection.connectToken}`
      : null);

  return (
    <div className="flex min-h-screen flex-col bg-muted">
      <div className="flex flex-1 flex-col p-8">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="mb-8 space-y-2">
            <h1 className="text-2xl font-bold md:text-4xl">INTEGRATIONS</h1>
            <p className="text-muted-foreground text-lg">
              Connect external services to extend your AI assistant.
            </p>
          </div>

          <Card className="max-w-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                    <Send className="size-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Telegram</CardTitle>
                    <CardDescription>
                      Chat with your AI assistant via Telegram
                    </CardDescription>
                  </div>
                </div>
                {isConnected && (
                  <Badge className="bg-green-500/10 text-green-600 dark:text-green-400">
                    <CheckCircle2 className="mr-1 size-3" />
                    Connected
                  </Badge>
                )}
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {isConnected ? (
                <>
                  {connection.telegramUsername && (
                    <p className="text-muted-foreground text-sm">
                      Connected as{" "}
                      <span className="font-medium text-foreground">
                        @{connection.telegramUsername}
                      </span>
                    </p>
                  )}
                  <Button
                    variant="destructive"
                    onClick={handleDisconnect}
                    disabled={disconnecting}
                  >
                    {disconnecting && (
                      <Loader2 className="mr-2 size-4 animate-spin" />
                    )}
                    Disconnect
                  </Button>
                </>
              ) : resolvedDeepLink ? (
                <div className="space-y-3">
                  <p className="text-muted-foreground text-sm">
                    Tap the link below in Telegram to connect:
                  </p>
                  <a
                    href={resolvedDeepLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-md bg-muted px-4 py-2 font-mono text-sm break-all hover:underline"
                  >
                    {resolvedDeepLink}
                  </a>
                  <p className="text-muted-foreground text-xs">
                    Waiting for connection… This page will update automatically.
                  </p>
                </div>
              ) : (
                <Button onClick={handleConnect} disabled={connecting}>
                  {connecting && (
                    <Loader2 className="mr-2 size-4 animate-spin" />
                  )}
                  Connect Telegram
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
