import { Button } from "@/components/ui/button";
import { Car, MapPin, Users } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Car className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Brotherhood United</h1>
              <p className="text-sm text-muted-foreground">Transport & Travel</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="/#destinations" className="text-foreground hover:text-primary transition-colors">
              Destinations
            </a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="/#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
          
          <Button variant="travel" size="lg" onClick={() => window.location.href = '/#contact'}>
            Book Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;