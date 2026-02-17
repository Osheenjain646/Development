type BugattiChironSuperSportType = {
  id: string;
  brand: "Bugatti";
  model: string;
  variant: "Super Sport";
  year: number;

  powertrain: {
    engine: string;
    displacementLiters: number;
    cylinders: number;
    horsepower: number;
    torqueNm: number;
    drivetrain: "AWD";
    transmission: string;
  };

  performance: {
    topSpeedKph: number;
    zeroToHundredKph: number;
    quarterMileSeconds: number;
  };

  dimensions: {
    lengthMm: number;
    widthMm: number;
    heightMm: number;
    wheelbaseMm: number;
    weightKg: number;
  };

  exterior: {
    color: string;
    accentColor: string;
    wheelSizeInches: number;
    bodyStyle: "Coupe";
  };

  interior: {
    seats: 2;
    material: string;
    infotainment: boolean;
  };

  pricing: {
    msrpUsd: number;
    limitedProduction: true;
    unitsProduced: number;
  };
};

const bugattiChironSuperSport: BugattiChironSuperSportType = {
  id: "bugatti-chiron-ss-001",
  brand: "Bugatti",
  model: "Chiron",
  variant: "Super Sport",
  year: 2023,
  powertrain: {
    engine: "Quad-Turbocharged W16",
    displacementLiters: 8,
    cylinders: 16,
    horsepower: 1577,
    torqueNm: 1600,
    drivetrain: "AWD",
    transmission: "7-speed dual-clutch automatic"
  },
  performance: {
    topSpeedKph: 440,
    zeroToHundredKph: 2.4,
    quarterMileSeconds: 9.1
  },
  dimensions: {
    lengthMm: 4540,
    widthMm: 2038,
    heightMm: 1212,
    wheelbaseMm: 2711,
    weightKg: 1995
  },
  exterior: {
    color: "Black",
    accentColor: "Orange",
    wheelSizeInches: 20,
    bodyStyle: "Coupe"
  },
  interior: {
    seats: 2,
    material: "Leather, Alcantara, Carbon Fiber",
    infotainment: true
  },
  pricing: {
    msrpUsd: 3900000,
    limitedProduction: true,
    unitsProduced: 60
  }
};


const MainSection = () => {
  return (
    <div></div>
  )
}

export default MainSection