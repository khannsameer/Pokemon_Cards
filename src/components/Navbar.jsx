import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export function Component() {
  return (
    <Navbar
      fluid
      rounded
      className="bg-gradient-to-r from-teal-300 via-indigo-500 to-purple-400"
    >
      <div className="w-full px-12 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <NavbarBrand href="https://flowbite-react.com">
          <img
            src="/logo1.ico"
            className="mr-3 h-15 sm:h-18"
            alt="Pokemon Logo"
          />
          <span className="self-center whitespace-nowrap text-4xl font-pokemon items-center">
            Pokedex
          </span>
        </NavbarBrand>

        {/* Avatar */}
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="/logo2.png"
                rounded
                className="w-12 h-12"
              />
            }
          >
            <DropdownHeader>
              <span className="block text-sm">Bonnie Green</span>
            </DropdownHeader>
            <DropdownDivider />
            <DropdownItem>Sign out</DropdownItem>
          </Dropdown>
          <NavbarToggle />
        </div>

        {/* Nav Links */}
        <NavbarCollapse className="md:ml-250">
          <NavbarLink href="#" className="text-xl font-light">
            Pokemon
          </NavbarLink>
        </NavbarCollapse>
      </div>
    </Navbar>
  );
}
