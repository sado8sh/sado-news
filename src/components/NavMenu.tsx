
import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const NavMenu: React.FC = () => {
  const categories = [
    { name: 'Breaking', color: 'bg-news-breaking' },
    { name: 'Politics', color: 'bg-news-politics' },
    { name: 'Technology', color: 'bg-news-technology' },
    { name: 'Health', color: 'bg-news-health' },
    { name: 'Sports', color: 'bg-news-sports' },
    { name: 'Arts', color: 'bg-news-arts' },
    { name: 'Environment', color: 'bg-news-environment' },
  ];

  return (
    <NavigationMenu className="justify-center my-2">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link to="/" className={navigationMenuTriggerStyle()}>
            Home
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {categories.map((category) => (
                <ListItem
                  key={category.name}
                  title={category.name}
                  href={`/category/${category.name.toLowerCase()}`}
                  className={cn("hover:bg-gray-100")}
                >
                  <span className={`inline-block w-3 h-3 rounded-full mr-2 ${category.color}`}></span>
                  Browse all {category.name} news
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <Link to="/" className={navigationMenuTriggerStyle()}>
            Today's Picks
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <Link to="/" className={navigationMenuTriggerStyle()}>
            Latest
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

interface ListItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  href: string;
  children?: React.ReactNode;
}

const ListItem = React.forwardRef<
  HTMLAnchorElement,
  ListItemProps
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <Link
        to={href}
        ref={ref}
        className={cn(
          "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavMenu;
