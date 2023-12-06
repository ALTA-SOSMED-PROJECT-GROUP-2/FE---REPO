import { RegisterSchema, registerSchema } from "@/utils/apis/auth";

import { Button } from "@/components/ui/button";
import CustomFormField from "@/components/custom-formfield";
import { Form } from "@/components/ui/ui/form";
import { Input } from "@/components/ui/ui/input";
import { Link } from "react-router-dom";
import React from "react";
import logo from "@/assets/Chirpy.svg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Register = () => {
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      phone_number: "",
      full_name: "",
      username: "",
      password: "",
    },
  });
  return (
    <div className="min-h-screen bg-sage4 flex flex-col justify-center items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(() => {})}
          className="flex flex-col w-full md:w-1/3 bg-white rounded-md p-8"
        >
          <img
            className=' h-36 -my-5'
            src={logo}
            alt="Chirpy Logo"
          />
          <p className="mt-2 sm:mt-3 text-center text-pinky font-chelsea text-sm">
            Buat akun untuk pengalaman terbaru.
          </p>
          <CustomFormField control={form.control} name="email" >
            {(field) => (
              <Input
                {...field}
                placeholder="Phone Number, Full Name or Email"
                type="email"
                className="p-3 bg-sage3 rounded-md mt-4 sm:mt-4"
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
              />
            )}
          </CustomFormField>
          <CustomFormField
            control={form.control}
            name="phone_number"
          >
            {(field) => (
              <Input
                {...field}
                placeholder="Phone Number"
                type="tel"
                className="p-3 bg-sage3 rounded-md mt-4 sm:mt-4"
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
              />
            )}
          </CustomFormField>
          <CustomFormField
            control={form.control}
            name="full_name"
          >
            {(field) => (
              <Input
                {...field}
                placeholder="Full Name"
                type="text"
                className="p-3 bg-sage3 rounded-md mt-4 sm:mt-4"
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
              />
            )}
          </CustomFormField>
          <CustomFormField
            control={form.control}
            name="username"
          >
            {(field) => (
              <Input
                {...field}
                placeholder="Username"
                type="text"
                className="p-3 bg-sage3 rounded-md mt-4 sm:mt-4"
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
              />
            )}
          </CustomFormField>
          <CustomFormField
            control={form.control}
            name="password"
          >
            {(field) => (
              <Input
                {...field}
                placeholder="Password"
                type="password"
                className="p-3 bg-sage3 rounded-md mt-4 sm:mt-4"
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
              />
            )}
          </CustomFormField>
          <Button
            type="submit"
            className="mx-4 sm:mx-8 mt-6 sm:mt-8 bg-sage1 hover:bg-sage2"
            disabled={form.formState.isSubmitting}
            aria-disabled={form.formState.isSubmitting}
          >
            Register
          </Button>
          <Link to="/login">
            <p className="mt-2 sm:mt-3 text-center text-sm text-pinky">
              <span className="font-chelsea">Do you have an account?</span>{" "}
              <span className="text-sage1">Sign In</span>
            </p>
          </Link>
        </form>
      </Form>
    </div>
  );
};

export default Register;
