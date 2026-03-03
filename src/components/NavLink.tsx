import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
  sx?: MuiLinkProps['sx'];
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, sx, to, ...props }, ref) => {
    return (
      <MuiLink
        component={RouterNavLink}
        ref={ref}
        to={to}
        // Use a function for className to support React Router's active/pending states if needed
        className={
          typeof className === 'function'
            ? className
            : ({ isActive, isPending }: { isActive: boolean; isPending: boolean }) =>
              [className, isActive && activeClassName, isPending && pendingClassName]
                .filter(Boolean)
                .join(' ')
        }
        sx={{
          textDecoration: "none",
          ...sx,
        }}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };

