import Button from "./Button"

const Navbar = () => {
  return (
    <div className="w-full bg-purple-500 flex px-4 py-3 justify-between items-center">
        {/* Section 1 */}
        <div className="flex gap-x-4 font-extralight text-[1.5rem]">
            <div>Main</div>
            <div>About</div>
            <div>Contact</div>
        </div>
        {/* Section 2 */}
        <div className="flex">
            <Button size={"md"} varients="Primary" disabled={true}>
                SignUp
            </Button>
            <Button size={"lg"} varients="secondary" disabled={true}>
                SignIn
            </Button>
        </div>
    </div>
  )
}

export default Navbar