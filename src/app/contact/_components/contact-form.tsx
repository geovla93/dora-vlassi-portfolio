"use client";

import { useActionState, useId } from "react";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { sendContactRequest } from "@/lib/actions";

interface FormState {
  name: string;
  email: string;
  message: string;
}

type FormErrors = Partial<{
  [K in keyof FormState]: { message: string }[];
}>;

function getFieldId(formId: string, fieldName: keyof FormState) {
  return `${formId}-${fieldName}`;
}

function isFieldInvalid(
  fieldName: keyof FormState,
  errors: FormErrors | undefined
) {
  if (typeof errors === "undefined") {
    return false;
  }

  return Boolean(errors[fieldName] && errors[fieldName].length > 0);
}

export function ContactForm() {
  const formId = useId();
  const [state, formAction, isPending] = useActionState(
    sendContactRequest,
    null
  );

  const fieldValues = state?.formState.values;
  const fieldErrors = state?.formState.errors;

  return (
    <form id={formId} action={formAction}>
      <FieldGroup>
        <Field data-invalid={isFieldInvalid("name", fieldErrors)}>
          <FieldLabel htmlFor={getFieldId(formId, "name")}>Name</FieldLabel>
          <Input
            id={getFieldId(formId, "name")}
            type="text"
            name="name"
            defaultValue={fieldValues?.name}
            placeholder="Your name"
            aria-invalid={isFieldInvalid("name", fieldErrors)}
            required
          />
          {isFieldInvalid("name", fieldErrors) && (
            <FieldError errors={fieldErrors?.name} />
          )}
        </Field>
        <Field data-invalid={isFieldInvalid("email", fieldErrors)}>
          <FieldLabel htmlFor={getFieldId(formId, "email")}>Email</FieldLabel>
          <Input
            id={getFieldId(formId, "email")}
            type="email"
            name="email"
            defaultValue={fieldValues?.email}
            placeholder="Your email"
            aria-invalid={isFieldInvalid("email", fieldErrors)}
            required
          />
          {isFieldInvalid("email", fieldErrors) && (
            <FieldError errors={fieldErrors?.email} />
          )}
        </Field>
        <Field data-invalid={isFieldInvalid("message", fieldErrors)}>
          <FieldLabel htmlFor={getFieldId(formId, "message")}>
            Message
          </FieldLabel>
          <Textarea
            id={getFieldId(formId, "message")}
            name="message"
            defaultValue={fieldValues?.message}
            placeholder="Your message"
            rows={6}
            aria-invalid={isFieldInvalid("message", fieldErrors)}
            required
          />
          {isFieldInvalid("message", fieldErrors) && (
            <FieldError errors={fieldErrors?.message} />
          )}
        </Field>
        <Field>
          {isPending && <Spinner />}
          <Button type="submit" disabled={isPending} size="lg">
            {isPending ? "Sending..." : "Send"}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
