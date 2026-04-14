"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Send, ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  "Open Telegram and search for your bot username",
  "Send /start to activate the bot",
  "Your bot is now live and ready to respond",
];

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-muted">
      <div className="flex flex-1 flex-col p-8">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="mb-8 space-y-2">
            <h1 className="text-2xl font-bold md:text-4xl">Get Started</h1>
            <p className="text-muted-foreground text-lg">
              Connect your Telegram bot to start handling conversations with AI.
            </p>
          </div>

          <Card className="max-w-2xl transition-shadow hover:shadow-md">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <Send className="size-6 text-primary" />
                </div>
                <div className="flex-1 space-y-1">
                  <CardTitle className="text-xl">Connect Telegram Bot</CardTitle>
                  <CardDescription className="text-base">
                    Link your Telegram bot to relay AI-powered responses to your
                    users directly in their favorite messaging app.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                {steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">{step}</p>
                  </div>
                ))}
              </div>
              <Button asChild variant="default" className="gap-2">
                <Link href="/dashboard/integrations">
                  Connect Telegram
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
