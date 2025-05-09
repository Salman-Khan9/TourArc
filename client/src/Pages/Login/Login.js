import React from "react";
import axios from "axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../../components/ui/button";
import loginpic from "../../Assets/travel photo.png";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { Set_token } from "@/src/Redux/Slices/userSlice";
const formSchema = z.object({
  email: z.string().min(1, "Email required ").email(),
  password: z.string(),
});
const Login = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const res = await axios.post(
      "https://tour-arc-backend-production.up.railway.app/login",
      values
    );
    if (res.status === 200) {
      dispatch(Set_token(res.data.id));
      navigate("/");
    }
  };

  return (
    <Form {...form}>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-[700px] h-[500px] flex  p-8 justify-end bg-gray-200 rounded border-2 shadow-xl border-gray-300  ">
          <img
            className="md:block  relative hidden  w-[300px] h-[400px] m-6"
            src={loginpic}
            alt="Login"
          />
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-[300px]  mt-[70px]"
          >
            <p className="font-bold text-lg ">Login</p>
            <p>Login to access your TourArc account</p>
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter email"
                        type="email"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter password"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Login</Button>
              <div className="w-full flex justify-center">
                <p>
                  Don't have an account?{" "}
                  <Link
                    className="font-bold text-sky-700 hover:text-sky-600  "
                    to="/Signup"
                  >
                    Signup
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Form>
  );
};

export default Login;
