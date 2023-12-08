import { Link, useNavigate } from "react-router-dom";
import { LoginSchema, loginSchema } from "@/utils/apis/auth";

import { Button } from "@/components/ui/button";
import CustomFormField from "@/components/custom-formfield";
import { Form } from "@/components/ui/ui/form";
import { Input } from "@/components/ui/ui/input";
import React from "react";
import logo from "@/assets/Chirpy.svg";
import { postLogin } from "@/utils/apis/auth/api";
import { useForm } from "react-hook-form";
import { useToken } from "@/utils/contexts/token";
import { zodResolver } from "@hookform/resolvers/zod";

const Login = () => {
  const { changeToken } = useToken();
  const navigate = useNavigate()
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleLogin = async (data: LoginSchema) => {
    try {
      const result = await postLogin(data);
      changeToken(result.token);
      
      const token = result.token;
      if (token) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-screen bg-sage4 flex flex-col justify-center items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleLogin)}
          className="flex flex-col w-full md:w-1/3 bg-white rounded-md p-8"
        >
          <img className="-mt-28" src={logo} alt="Chirpy Logo" />
          <CustomFormField control={form.control} name="username" label="Username">
            {(field) => (
              <Input
                {...field}
                placeholder="Username"
                type="text"
                className="p-3 bg-sage3 rounded-md mt-4 sm:mt-8"
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
              />
            )}
          </CustomFormField>
          <CustomFormField
            control={form.control}
            name="password"
            label="Password"
          >
            {(field) => (
              <Input
                {...field}
                placeholder="Password"
                type="password"
                className="p-3 bg-sage3 rounded-md mt-4 sm:mt-8"
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
              />
            )}
          </CustomFormField>
          <p className="mt-2 sm:mt-3 text-tealLagoon text-sm">Forgot Password?</p>
          <Button
            type="submit"
            className="mx-4 sm:mx-8 mt-6 sm:mt-8 bg-sage1 hover:bg-sage2"
            disabled={form.formState.isSubmitting}
            aria-disabled={form.formState.isSubmitting}
          >
            Login
          </Button>
          <Link to="/register">
            <p className="mt-2 sm:mt-3 text-center text-sm text-pinky">
              <span className="font-chelsea">Don't have an account?</span>{" "}
              <span className="text-sage1">Sign Up</span>
            </p>
          </Link>
        </form>
      </Form>
    </div>
  );
};

export default Login;
