"use server";

import z from "zod";

import { ContactFormSchema } from "@/lib/schemas";

type ValidationErrors<Schema extends z.core.$ZodType> = {
  [K in keyof z.infer<Schema>]?: { message: string }[];
};

type FormActionFailure<Schema extends z.core.$ZodType> = {
  success: false;
  error: {
    code: "SERVER_ERROR" | "VALIDATION_ERROR";
    message: string;
  };
  formState: {
    values: z.input<Schema>;
    errors: ValidationErrors<Schema>;
  };
};

type FormActionSuccess<Schema extends z.core.$ZodType, T> = {
  success: true;
  data: T;
  formState: {
    values: z.input<Schema>;
    errors: ValidationErrors<Schema>;
  };
};

type FormActionState<Schema extends z.core.$ZodType, T> =
  | FormActionSuccess<Schema, T>
  | FormActionFailure<Schema>;

function formatValidationError<Schema extends z.core.$ZodType>(
  error: z.core.$ZodError<z.output<Schema>>
): {
  [K in keyof z.infer<Schema>]?: { message: string }[];
} {
  const flattened = z.flattenError(error);
  const fieldErrors: {
    [K in keyof z.infer<Schema>]?: { message: string }[];
  } = {};

  for (const key in flattened.fieldErrors) {
    const messages = flattened.fieldErrors[key];
    if (messages && messages.length > 0) {
      fieldErrors[key as keyof z.infer<Schema>] = messages.map((msg) => ({
        message: msg,
      }));
    }
  }

  return fieldErrors;
}

export async function sendContactRequest(
  _prevState: FormActionState<
    typeof ContactFormSchema,
    z.infer<typeof ContactFormSchema>
  > | null,
  formData: FormData
): Promise<
  FormActionState<typeof ContactFormSchema, z.infer<typeof ContactFormSchema>>
> {
  const input = Object.fromEntries(formData.entries()) as z.input<
    typeof ContactFormSchema
  >;
  const parsedData = ContactFormSchema.safeParse(input);
  if (!parsedData.success) {
    return {
      success: false,
      error: {
        code: "VALIDATION_ERROR",
        message: "There were validation errors with your submission.",
      },
      formState: {
        values: input,
        errors: formatValidationError(parsedData.error),
      },
    };
  }

  try {
    // Simulate async operation (e.g., sending email)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      data: parsedData.data,
      formState: {
        values: input,
        errors: {},
      },
    };
  } catch (error) {
    console.error("[sendContactRequest]", error);

    return {
      success: false,
      error: {
        code: "SERVER_ERROR",
        message: "An unexpected error occurred. Please try again later.",
      },
      formState: {
        values: input,
        errors: {},
      },
    };
  }
}
