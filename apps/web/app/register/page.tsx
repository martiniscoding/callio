"use client";

import Link from "next/link";
import { authClient } from "../lib/auth-client";

import { AuthShell } from "@/components/auth-shell";
import {
  Button,
  Divider,
  Field,
  Input,
  OAuthButtons,
  PasswordInput,
} from "@/components/auth-form";

export default function RegisterPage() {
  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      callbackURL: "http://localhost:3000",
    });

    if (error) {
      console.log(error);
      return;
    }

    console.log(data);
  }

  return (
    <AuthShell
      title="Create your account"
      subtitle="Free forever for up to 100 participants."
      footer={
        <>
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Sign in
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="grid gap-5">
        <OAuthButtons />

        <Divider>or sign up with email</Divider>

        <Field label="Full name" id="name">
          <Input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Nina Jaswal"
            required
          />
        </Field>

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

        <Field label="Password" id="password">
          <PasswordInput
            id="password"
            name="password"
            autoComplete="new-password"
            placeholder="At least 8 characters"
            minLength={8}
            required
          />
        </Field>

        <label className="flex items-start gap-2 text-sm text-muted-foreground">
          <input
            type="checkbox"
            className="mt-0.5 size-4 rounded border-border accent-primary"
            required
          />

          <span>
            I agree to Callio&apos;s{" "}
            <Link
              href="#"
              className="text-foreground underline-offset-4 hover:underline"
            >
              Terms
            </Link>{" "}
            and{" "}
            <Link
              href="#"
              className="text-foreground underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </span>
        </label>

        <Button type="submit" size="lg">
          Create account
        </Button>
      </form>
    </AuthShell>
  );
}