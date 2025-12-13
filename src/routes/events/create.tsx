/** biome-ignore-all lint/correctness/noChildrenProp: <Aceita> */
/** biome-ignore-all lint/correctness/useUniqueElementIds: <explanation> */
// biome-ignore assist/source/organizeImports: <Acewita>
import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import * as z from "zod";
import { DateTimePicker } from "@/components/data-timer";
import { FileUpload } from "@/components/file-upload";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { uploadEventBanner } from "@/https/upload-banner.ts";
import { createEvent } from "@/https/create-event";
import { useNavigate } from "@tanstack/react-router";
import { Loader } from "lucide-react";

const formSchema = z.object({
  title: z.string(),
  startIn: z.date().nullable(),
  endIn: z.date().nullable(),
  active: z.boolean(),
  image: z.instanceof(File).nullable(),
});

export const Route = createFileRoute("/events/create")({
  component: RouteComponent,
});

export default function RouteComponent() {
  const navigate = useNavigate({ from: "/" });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: z.infer<typeof formSchema>) => {
      // 1. Criar o evento
      const created = await createEvent({
        title: data.title,
        startIn: data.startIn?.toISOString() ?? null,
        endIn: data.endIn?.toISOString() ?? null,
        active: data.active,
      });

      // 2. Upload do banner, se houver
      if (data.image) {
        await uploadEventBanner(created.id, data.image);
      } 

      return created;
    },
  });

  const form = useForm({
    defaultValues: {
      title: "",
      startIn: null as Date | null,
      endIn: null as Date | null,
      active: true,
      image: null as File | null,
    },
    validators: { onSubmit: formSchema },
    onSubmit: async ({ value }) => {
      const createdEvent = await mutateAsync(value);

      navigate({ to: "/$event/dashboard", params: { event: createdEvent.slug } });
    },
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Card className="w-[1000px] sm:max-w-md shadow-2xl">
        <CardHeader>
          <CardTitle>Create Event</CardTitle>
          <CardDescription>Fill in the details to create a new event.</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            id="event-form"
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
          >
            <FieldGroup>
              <div className="grid grid-cols-2 gap-12">
                <div className="flex flex-col gap-4">
                  <form.Field
                    name="title"
                    children={(field) => {
                      const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                      return (
                        <Field data-invalid={isInvalid}>
                          <FieldLabel htmlFor={field.name}>Event Title</FieldLabel>
                          <Input
                            id={field.name}
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                            aria-invalid={isInvalid}
                            placeholder="Summer Conference 2024"
                            autoComplete="off"
                          />
                          {isInvalid && <FieldError errors={field.state.meta.errors} />}
                        </Field>
                      );
                    }}
                  />
                  <form.Field
                    name="active"
                    children={(field) => {
                      return (
                        <Field orientation="horizontal">
                          <div className="flex items-center justify-between w-full gap-4">
                            <div className="flex flex-col gap-1">
                              <FieldLabel htmlFor={field.name}>Active</FieldLabel>
                              <FieldDescription>
                                Make this event visible to attendees.
                              </FieldDescription>
                            </div>
                            <Switch
                              id={field.name}
                              name={field.name}
                              checked={field.state.value}
                              onCheckedChange={(checked) => field.handleChange(checked)}
                            />
                          </div>
                        </Field>
                      );
                    }}
                  />
                </div>

                <form.Field
                  name="image"
                  children={(field) => {
                    const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                    return (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel htmlFor={field.name}>Event Image</FieldLabel>
                        <FileUpload
                          value={field.state.value}
                          onChange={(file) => field.handleChange(file)}
                          accept="image/*"
                          maxSize={5 * 1024 * 1024}
                        />
                        <FieldDescription>
                          Upload an image for your event (max 5MB).
                        </FieldDescription>
                        {isInvalid && <FieldError errors={field.state.meta.errors} />}
                      </Field>
                    );
                  }}
                />
              </div>
              <form.Field
                name="startIn"
                children={(field) => {
                  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Start Date & Time</FieldLabel>
                      <DateTimePicker
                        value={field.state.value}
                        onChange={(date) => field.handleChange(date)}
                        placeholder="Select start date"
                      />
                      <FieldDescription>Select when the event will begin.</FieldDescription>
                      {isInvalid && <FieldError errors={field.state.meta.errors} />}
                    </Field>
                  );
                }}
              />
              <form.Field
                name="endIn"
                children={(field) => {
                  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>End Date & Time</FieldLabel>
                      <DateTimePicker
                        value={field.state.value}
                        onChange={(date) => field.handleChange(date)}
                        placeholder="Select end date"
                      />
                      <FieldDescription>Select when the event will end.</FieldDescription>
                      {isInvalid && <FieldError errors={field.state.meta.errors} />}
                    </Field>
                  );
                }}
              />
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter>
          <Field orientation="horizontal">
            <Button type="button" variant="outline" onClick={() => form.reset()}>
              Reset
            </Button>
            <Button type="submit" form="event-form" disabled={isPending}>
              {isPending ? (<Loader className="size-4 spin-in"/>) : "Submit"}
            </Button>
          </Field>
        </CardFooter>
      </Card>
    </div>
  );
}
