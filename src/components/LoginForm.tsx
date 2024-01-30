"use client";
import useGetLogin from "@/hooks/useGetLogin";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAlertContext } from "@/context/AppContext";
import { schema, FormData } from "./LoginForm.model";

const LoginForm = () => {
  const context = useAlertContext();
  const route = useRouter();
  const hand = useGetLogin;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<FormData> = async ({
    userEmail,
    userPassword,
  }) => {
    try {
      const res = await hand({ userEmail, userPassword });
      if (res) route.push("/dashboard");
      else context.showAlert("User credentials are incorrect");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="w-full md:w-1/2 2xl:w-1/3 px-4 py-10 sm:p-10 drop-shadow-2xl mx-auto flex flex-col gap-10 bg-white rounded-2xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2">
        <label className="text-lg" htmlFor="userEmail">
          Email
        </label>
        <input
          {...register("userEmail", { required: true })}
          type="text"
          id="userEmail"
          placeholder="john@example.com"
          className={`bg-slate-100 border-2  w-full  mx-auto transition duration-150 ease-linear ${
            errors.userEmail && "border-red-400"
          } p-2 rounded-lg outline-none`}
        />
        {errors.userEmail && (
          <span className="text-sm text-red-400">
            This flied is required (test@example.com){" "}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-lg" htmlFor="password">
          Password
        </label>
        <input
          {...register("userPassword")}
          type="password"
          id="password"
          className="bg-slate-100 p-2  w-full  mx-auto rounded-lg outline-none"
        />
        {errors.userPassword && (
          <span className="text-sm text-red-400">This flied is required</span>
        )}
      </div>
      <button
        type="submit"
        className="w-full sm:w-2/3 hover:opacity-90 mx-auto bg-gradient-to-r from-purple-500 to-red-400 text-white font-bold p-2 rounded-lg"
      >
        Log in
      </button>
    </form>
  );
};

export default LoginForm;
