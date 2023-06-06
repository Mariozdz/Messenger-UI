export function SignUpForm() {
  return (
    <div className="flex flex-col">
      <p className="text-3xl text-white mb-24">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Let's sing you up, welcome to the new chat
      </p>

      <div className="p-4 rounded-lg bg-black border border-gray-600">
        <input
          placeholder="Username"
          className="flex text-white flex-1 w-full style-none outline-0 bg-black"
        />
      </div>

      <div className="p-4 rounded-lg bg-black border border-gray-600 mt-4">
        <input
          placeholder="Phone number"
          className="flex text-white flex-1 w-full style-none outline-0 bg-black"
        />
      </div>

      <div className="p-4 rounded-lg bg-black border border-gray-600 mt-4">
        <input
          placeholder="Password"
          type="password"
          className="flex text-white flex-1 w-full style-none outline-0 bg-black"
        />
      </div>

      <button className="style-none text-lg font-semibold outline-0 p-4 bg-white text-gray-900 border-none rounded-lg mt-16">
        SignUp
      </button>
    </div>
  );
}
