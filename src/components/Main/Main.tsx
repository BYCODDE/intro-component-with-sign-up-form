import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

function Main() {
  const [emailPlaceholder, setEmailPlaceholder] = useState("Email Address");
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailPlaceholder("Email Address"); // Reset placeholder when user starts typing
    setValue("email", e.target.value, { shouldValidate: true });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    reset();
    return data;
  };

  return (
    <main>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-[10px] bg-white p-[24px] cursor-pointer text-[#3D3B48]"
      >
        <div className="flex justify-center items-center flex-col gap-[16px]">
          <div className="relative w-full max-w-[279px]">
            <input
              className={`w-full p-[15px] border max-h-[56px] placeholder-custom focus:outline-none focus:border-1 focus:border-solid focus:border-[#5E54A4] rounded-[5px] ${
                errors.first_name ? "border-[#FF7979]" : "border-gray-300"
              }`}
              placeholder="First Name"
              {...register("first_name", {
                required: "First Name cannot be empty",
              })}
            />
            {errors.first_name && (
              <>
                <p className="ml-[7rem] mt-[6px] text-[11px] text-[#FF7979]">
                  {errors.first_name.message}
                </p>
                <img
                  className="absolute right-[10px] top-[15px]"
                  src="images/icon-error.svg"
                  alt="icon-error"
                />
              </>
            )}
          </div>
          <div className="relative w-full max-w-[279px]">
            <input
              className={`w-full p-[15px] border max-h-[56px] placeholder-custom focus:outline-none focus:border-1 focus:border-solid focus:border-[#5E54A4] rounded-[5px] ${
                errors.last_name ? "border-[#FF7979]" : "border-gray-300"
              }`}
              placeholder="Last Name"
              {...register("last_name", {
                required: "Last Name cannot be empty",
              })}
            />
            {errors.last_name && (
              <>
                <p className="ml-[7rem] mt-[6px] text-[11px] text-[#FF7979]">
                  {errors.last_name.message}
                </p>
                <img
                  className="absolute right-[10px] top-[15px]"
                  src="images/icon-error.svg"
                  alt="icon-error"
                />
              </>
            )}
          </div>
          <div className="relative w-full max-w-[279px]">
            <input
              className={`w-full p-[15px] border max-h-[56px] placeholder-custom focus:outline-none focus:border-1 focus:border-solid focus:border-[#5E54A4] rounded-[5px] ${
                errors.email
                  ? "border-[#FF7979] placeholder:text-[#FF7979]"
                  : "border-gray-300"
              }`}
              placeholder={
                errors.email ? "email@example/com" : emailPlaceholder
              }
              {...register("email", {
                required: "Looks like this is not an email",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Looks like this is not an email",
                },
                onChange: handleEmailChange,
              })}
            />
            {errors.email && (
              <>
                <p className="ml-[7rem] mt-[6px] text-[11px] text-[#FF7979]">
                  {errors.email.message}
                </p>
                <img
                  className="absolute right-[10px] top-[15px]"
                  src="images/icon-error.svg"
                  alt="icon-error"
                />
              </>
            )}
          </div>
          <div className="relative w-full max-w-[279px]">
            <input
              className={`w-full p-[15px] border max-h-[56px] placeholder-custom focus:outline-none focus:border-1 focus:border-solid focus:border-[#5E54A4] rounded-[5px] ${
                errors.password ? "border-[#FF7979]" : "border-gray-300"
              }`}
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password cannot be empty",
              })}
            />
            {errors.password && (
              <>
                <p className="ml-[7rem] mt-[6px] text-[11px] text-[#FF7979]">
                  {errors.password.message}
                </p>
                <img
                  className="absolute right-[10px] top-[15px]"
                  src="images/icon-error.svg"
                  alt="icon-error"
                />
              </>
            )}
          </div>
        </div>
        <button
          className="bg-[#38CC8B] text-[15px] p-[15px] font-[600] rounded-[5px] shadow-custom2 w-full max-w-[279px] max-h-[56px] mt-[16px] mb-[8px]"
          type="submit"
        >
          CLAIM YOUR FREE TRIAL
        </button>
        <p className="text-[11px] text-[#BAB7D4] font-medium leading-[21px] flex flex-col">
          By clicking the button, you are agreeing to our
          <span className="text-[#FF7979] font-bold">Terms and Services</span>
        </p>
      </form>
    </main>
  );
}

export default Main;
