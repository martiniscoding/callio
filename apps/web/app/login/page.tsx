"use client"

import Link from "next/link"

import { AuthShell } from "@/components/auth-shell"
import {
  Button,
  Divider,
  Field,
  Input,
  OAuthButtons,
  PasswordInput,
  useFakeSubmit,
} from "@/components/auth-form"

export default function LoginPage() {
  const { loading, onSubmit } = useFakeSubmit()

  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to jump back into your rooms."
      footer={
        <>
          New to Callio?{" "}
          <Link
            href="/register"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Create an account
          </Link>
        </>
      }
    >
      <form onSubmit={onSubmit} className="grid gap-5">
        <OAuthButtons />
        <Divider>or continue with email</Divider>

        <Field label="Email" id="email">
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            required
          />
        </Field>

        <Field
          label="Password"
          id="password"
          hint={
            <Link
              href="#"
              className="text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              Forgot?
            </Link>
          }
        >
          <PasswordInput
            id="password"
            name="password"
            autoComplete="current-password"
            placeholder="••••••••"
            required
          />
        </Field>

        <label className="flex items-center gap-2 text-sm text-muted-foreground">
          <input
            type="checkbox"
            className="size-4 rounded border-border accent-primary"
            defaultChecked
          />
          Keep me signed in
        </label>

        <Button type="submit" size="lg" disabled={loading}>
          {loading ? "Signing in…" : "Sign in"}
        </Button>
      </form>
    </AuthShell>
  )
}
