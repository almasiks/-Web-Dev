class Vehicle:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year
        self.is_running = False

    def start(self):
        self.is_running = True
        return f"{self.model} started"

    def drive(self):
        return "Driving..." if self.is_running else "Start first!"

    def __str__(self):
        return f"{self.brand} {self.model} ({self.year})"

class GasCar(Vehicle):
    def __init__(self, brand, model, year, fuel):
        super().__init__(brand, model, year)
        self.fuel = fuel

    def drive(self):
        return f"{super().drive()} using {self.fuel}"

class ElectricCar(Vehicle):
    def charge(self):
        return "Charging battery..."

    def drive(self):
        return f"{super().drive()}  on electricity"