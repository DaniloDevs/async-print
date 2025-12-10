"use client";

import { useForm } from "@tanstack/react-form";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export function LoginForm() {
  const navigate = useNavigate({ from: "/" });

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async () => {
      toast("Authentication is incomplete. You will be redirected to the main page.");

      navigate({ to: "/events" });
    },
  });

  return (
    <form
      className=""
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <FieldGroup className="gap-4">
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below to login to your account
          </p>
        </div>
        <Field className="gap-1">
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input type="email" placeholder="m@example.com" required />
        </Field>
        <Field className="gap-1">
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input type="password" required />
        </Field>
        <Field>
          <Button type="submit">Login</Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
