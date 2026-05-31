"use client"

import * as React from "react"

import { cn } from "@workspace/ui/lib/utils"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { authClient } from "@/app/lib/auth-client"

function Field({
  label,
  id,
  hint,
  children,
}: {
  label: string
  id: string
  hint?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="grid gap-1.5">
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="text-sm font-medium">
          {label}
        </label>
        {hint}
      </div>
      {children}
    </div>
  )
}

function PasswordInput(props: React.ComponentProps<typeof Input>) {
  const [show, setShow] = React.useState(false)
  return (
    <div className="relative">
      <Input
        type={show ? "text" : "password"}
        className="pr-11"
        {...props}
      />
      <button
        type="button"
        onClick={() => setShow((s) => !s)}
        aria-label={show ? "Hide password" : "Show password"}
        className="absolute inset-y-0 right-0 inline-flex w-10 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="size-4">
          {show ? (
            <>
              <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="2.8" />
            </>
          ) : (
            <path d="M3 3l18 18M10.6 6.2A9.7 9.7 0 0 1 12 6c6.5 0 10 6 10 6a17 17 0 0 1-3.2 3.8M6.5 8.3A17 17 0 0 0 2 12s3.5 6 10 6a9.7 9.7 0 0 0 3.4-.6M9.5 9.5a3 3 0 0 0 4.2 4.2" />
          )}
        </svg>
      </button>
    </div>
  )
}

async function OAuthButtons() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Button  onClick={async () => {
        await authClient.signIn.social({
          provider: "google",
          callbackURL: "http://localhost:3000",
        });
      }} variant="outline" type="button" className="h-11">
        <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
          <path fill="#EA4335" d="M12 10.2v3.9h5.5a4.7 4.7 0 0 1-2 3.1l3.2 2.5c1.9-1.7 3-4.3 3-7.4 0-.7-.1-1.4-.2-2.1H12Z" />
          <path fill="#34A853" d="M6.5 14.3 5.8 14l-2.6 2c1.6 3.2 4.9 5.4 8.8 5.4 2.7 0 4.9-.9 6.5-2.4l-3.2-2.5c-.9.6-2 .9-3.3.9-2.5 0-4.7-1.7-5.5-4Z" />
          <path fill="#4A90D9" d="M3.2 7.9A8.9 8.9 0 0 0 2.3 12c0 1.5.3 2.9.9 4.1l2.6-2 .7-.3a5.4 5.4 0 0 1 0-3.5L3.2 7.9Z" />
          <path fill="#FBBC05" d="M12 6.6c1.4 0 2.7.5 3.7 1.4l2.8-2.8A9.2 9.2 0 0 0 12 2.6 9.6 9.6 0 0 0 3.2 7.9l3.3 2.6C7.3 8.3 9.5 6.6 12 6.6Z" />
        </svg>
        Google
      </Button>
      <Button variant="outline" type="button" className="h-11">
        <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
          <path d="M16.4 1.8c0 1.1-.4 2.1-1.2 2.9-.9.9-1.9 1.4-3 1.3-.1-1 .4-2.1 1.1-2.8.8-.8 2-1.4 3.1-1.4ZM20 17.3c-.5 1.2-.8 1.8-1.5 2.9-1 1.5-2.4 3.4-4.1 3.4-1.5 0-1.9-1-4-1-2 0-2.5 1-4 1-1.7 0-3-1.7-4-3.2-2.8-4.2-3.1-9.2-1.4-11.8 1.2-1.9 3.1-3 4.9-3 1.8 0 3 1 4.5 1 1.5 0 2.4-1 4.5-1 1.6 0 3.3.9 4.5 2.4-4 2.2-3.3 7.9.1 9.3Z" />
        </svg>
        Apple
      </Button>
    </div>
  )
}

function Divider({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-xs text-muted-foreground">
      <span className="h-px flex-1 bg-border" />
      {children}
      <span className="h-px flex-1 bg-border" />
    </div>
  )
}

/** Tiny client-side fake submit so the buttons feel alive in a demo. */
function useFakeSubmit() {
  const [loading, setLoading] = React.useState(false)
  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => setLoading(false), 1100)
  }
  return { loading, onSubmit }
}

export {
  Field,
  PasswordInput,
  OAuthButtons,
  Divider,
  useFakeSubmit,
  Button,
  Input,
  cn,
}
