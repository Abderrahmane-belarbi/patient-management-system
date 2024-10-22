"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormField from "./CustomFormField";
import { FormFieldType } from "@/types/index.d"; 
import SubmitButton from "../SubmitButton";
import { useState } from "react";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});


export default function PatientForm() {
  const [isLoading, setIsLoading] = useState(false);
  // Defined form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Hi there ✋</h1>
          <p className="text-dark-700">Schedule your first appointment.</p>
        </section>
        <CustomFormField 
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name='name'
            label='Full name'
            placeholder='John Doe'
            iconSrc='/assets/icons/user.svg'
            iconAlt="user-icon"
        />
        <CustomFormField 
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name='email'
            label='Email'
            placeholder='john-doe@example.com'
            iconSrc='/assets/icons/email.svg'
            iconAlt="email-icon"
        />
        <CustomFormField 
            fieldType={FormFieldType.PHONE_INPUT}
            control={form.control}
            name='phone'
            label='Phone number'
            placeholder='(213) 123-4567 89'
        />
        <SubmitButton
          isLoading={isLoading}
          className=""
          
        />
      </form>
    </Form>
  );
}
