import { useLoginForm } from "@/components/containers/forms/authentication/login/use-login-form";

export function LoginForm() {
  const { phoneNumber, setPhoneNumber, password, setPassword, handleOnSubmit } =
    useLoginForm();

  const pageMessage = "Let's log you in, welcome to the new chat";

  return (
    <div className="flex flex-col  transition duration-500 ease-in-out ">
      <p className="text-3xl text-white mb-24">{pageMessage}</p>

      <div className="p-4 rounded-lg bg-black border border-gray-600">
        <input
          placeholder="Phone number"
          className="flex text-white flex-1 w-full style-none outline-0 bg-black"
          onChange={(event) => {
            setPhoneNumber(event.target.value);
          }}
          value={phoneNumber}
          maxLength={8}
        />
      </div>

      <div className="p-4 rounded-lg bg-black border border-gray-600 mt-4">
        <input
          placeholder="Password"
          type="password"
          className="flex text-white flex-1 w-full style-none outline-0 bg-black"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          value={password}
        />
      </div>

      <button
        className="style-none text-lg font-semibold outline-0 p-4 bg-white text-gray-900 border-none rounded-lg mt-16"
        onClick={(event) => handleOnSubmit(event)}
      >
        Login
      </button>
    </div>
  );
}
