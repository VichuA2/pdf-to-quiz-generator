import NextLink, { LinkProps as NextLinkProps } from "next/link";

export const Link = ({
  children,
  ...props
}: NextLinkProps & { children: React.ReactNode }) => {
  return (
    <NextLink
      {...props}
      className="text-blue-500 dark:text-blue-400 hover:underline"
      target="_blank"
    >
      {children}
    </NextLink>
  );
};
