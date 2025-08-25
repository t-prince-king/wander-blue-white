import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Camera, Calendar } from "lucide-react";
import destinationRwanda from "@/assets/destination-rwanda.jpg";

const Destinations = () => {
  const destinations = [
    {
      name: "Kigali City Tour",
      location: "Kigali, Rwanda", 
      description: "Explore the vibrant capital city with its modern architecture, cultural sites, and historical landmarks.",
      image: destinationRwanda,
      duration: "Full Day",
      highlights: ["Genocide Memorial", "Local Markets", "City Center"]
    },
    {
      name: "Volcanoes National Park",
      location: "Musanze, Rwanda",
      description: "Experience the magnificent mountain gorillas in their natural habitat with expert guides.",
      image: destinationRwanda,
      duration: "2-3 Days", 
      highlights: ["Gorilla Trekking", "Golden Monkeys", "Scenic Views"]
    },
    {
      name: "Lake Kivu Adventure",
      location: "Gisenyi, Rwanda",
      description: "Relax by the beautiful Lake Kivu with water activities and stunning sunset views.",
      image: destinationRwanda,
      duration: "2-4 Days",
      highlights: ["Boat Rides", "Beach Relaxation", "Water Sports"]
    },
    {
      name: "Nyungwe Forest",
      location: "Nyungwe, Rwanda",
      description: "Discover the ancient rainforest with canopy walks and diverse wildlife viewing.",
      image: destinationRwanda,
      duration: "2-3 Days",
      highlights: ["Canopy Walk", "Primate Tracking", "Nature Trails"]
    }
  ];

  return (
    <section id="destinations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Popular Destinations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover breathtaking landscapes, rich culture, and unforgettable experiences 
            across Rwanda and the Great Lakes region.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg mb-1">{destination.name}</h3>
                  <div className="flex items-center text-white/90 text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    {destination.location}
                  </div>
                </div>
              </div>
              
              <CardContent className="p-4">
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {destination.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {destination.duration}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Camera className="h-4 w-4 mr-1" />
                    {destination.highlights.length}+ Activities
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {destination.highlights.slice(0, 2).map((highlight, idx) => (
                    <span key={idx} className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded">
                      {highlight}
                    </span>
                  ))}
                  {destination.highlights.length > 2 && (
                    <span className="text-xs text-muted-foreground">
                      +{destination.highlights.length - 2} more
                    </span>
                  )}
                </div>
                
                <Button variant="travel" size="sm" className="w-full">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;