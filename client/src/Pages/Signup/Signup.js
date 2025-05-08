import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import loginimage from "../../Assets/travel photo.png";
import { Button } from "../../components/ui/button";
import axios from "axios";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Link } from "react-router-dom";

const formSchema = z.object({
  firstname: z.string().min(1, "First name is required"),
  lastname: z.string().min(1, "Last name is required"),
  email: z.string().min(1, "Email is required").email(),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must contain 8 characters "),
  confirmpassword: z.string().min(1, "confirm Password"),
});
const Signup = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
  });
  const onSubmit = async (values) => {
    if (values.password !== values.confirmpassword) {
      window.alert("Password doesnot match");
    }
    await axios.post("https://tour-arc.vercel.app/signup", values);
  };

  return (
    <Form {...form}>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className=" w-[750px] flex justify-center space-x-12 bg-gray-200 rounded p-5 shadow-2xl border-2 border-gray-300        ">
          <img
            className="md:block relative hidden w-[320px] h-[450px] m-5 "
            src={loginimage}
            alt="signup "
          ></img>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="  w-[300px] space-y-3 mt-6"
          >
            <p className="font-bold ">Register</p>
            <div className="flex flex-row w-[310px]  space-x-[20px]     ">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input placeholder="First name" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input placeholder="Last name" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} type="email" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />{" "}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Password" {...field} type="password" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />{" "}
            <FormField
              control={form.control}
              name="confirmpassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Confirm Password"
                      {...field}
                      type="password"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Register Now</Button>
            <p className="w-full flex justify-center ">
              Already have an account?{" "}
              <Link
                className="font-bold text-sky-700 hover:text-sky-600 "
                to="/login"
              >
                Login
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </Form>
  );
};

export default Signup;
