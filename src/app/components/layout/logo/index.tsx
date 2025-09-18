import Link from "next/link";

const Logo = (props: { sticky: boolean }) => {
  const { sticky } = props;
  return (
    <Link href="/" className="flex items-center">
      <span
        className={`text-4xl font-extrabold tracking-wide ${
          sticky ? "text-black" : "text-white"
        }`}
      >
        MABHRE
      </span>
    </Link>
  );
};

export default Logo;
