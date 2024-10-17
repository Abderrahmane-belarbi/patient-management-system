"use client";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormFieldType } from "@/types/index.d"; 
import { Control } from "react-hook-form";

interface CustomFormFieldProps {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  label: string;
  placeholder: string;
  iconSrc: string
}

export default function CustomFormField({
  control,
  fieldType,
  name,
}: CustomFormFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {}
        </FormItem>
      )}
    />
  );
}
