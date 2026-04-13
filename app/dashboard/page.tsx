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
import {
  Upload,
  Phone,
  Code,
  Megaphone,
  ArrowRight,
} from "lucide-react";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-muted">
      {/* Main Content */}
      <div className="flex flex-1 flex-col p-8">
        <div className="mx-auto w-full max-w-screen-xl">
          {/* Page Header */}
          <div className="mb-8 space-y-2">
            <h1 className="text-2xl font-bold md:text-4xl">SETUP GUIDE</h1>
            <p className="text-muted-foreground text-lg">
              Get started with your AI assistant. Follow these steps to set up
              your knowledge base, enable calling features, integrate the
              widget, and launch your first campaign.
            </p>
          </div>

          {/* Setup Steps */}
          <div className="space-y-6">
            {/* Step 1: Upload Knowledge Base */}
            <Card className="transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                      <Upload className="size-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <CardTitle className="text-xl">
                        Upload Knowledge Base
                      </CardTitle>
                      <CardDescription className="text-base">
                        Upload documents, PDFs, and text files to train your AI
                        assistant. Your knowledge base helps the assistant
                        answer questions accurately using your company&apos;s
                        information.
                      </CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button asChild variant="default" className="gap-2">
                  <Link href="/dashboard/files">
                    Go to Files
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Step 2: Enable Calling Features */}
            <Card className="transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                      <Phone className="size-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <CardTitle className="text-xl">
                        Enable Calling Features
                      </CardTitle>
                      <CardDescription className="text-base">
                        Connect your VAPI account to enable voice calling
                        capabilities. Once connected, your assistant can make
                        and receive phone calls, providing a seamless voice
                        experience for your customers.
                      </CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button asChild variant="default" className="gap-2">
                  <Link href="/dashboard/plugins/vapi">
                    Connect VAPI
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Step 3: Integrate Widget to Landing Page */}
            <Card className="transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                      <Code className="size-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <CardTitle className="text-xl">
                        Integrate Widget to Landing Page
                      </CardTitle>
                      <CardDescription className="text-base">
                        Add the chatbot widget to your website with a simple
                        code snippet. Choose from HTML, React, Next.js, or
                        JavaScript integrations. The widget will appear on your
                        site, ready to assist your visitors.
                      </CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button asChild variant="default" className="gap-2">
                  <Link href="/dashboard/integrations">
                    View Integrations
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Step 4: Outbound Calling Campaigns */}
            <Card className="transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                      <Megaphone className="size-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <CardTitle className="text-xl">
                        Outbound Calling Campaigns
                      </CardTitle>
                      <CardDescription className="text-base">
                        Create and manage outbound calling campaigns to reach
                        your customers proactively. Schedule calls, manage
                        contact lists, and track campaign performance all in
                        one place.
                      </CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button asChild variant="default" className="gap-2">
                  <Link href="/dashboard/campaigns">
                    Manage Campaigns
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}