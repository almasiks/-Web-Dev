from models import GasCar, ElectricCar


def main():
    cars = [
        GasCar("Toyota", "Camry", 2022, "Gasoline"),
        ElectricCar("Tesla", "Model 3", 2023)
    ]

    for car in cars:
        print(car)
        print(car.start())
        print(car.drive())

        if hasattr(car, 'charge'):
            print(car.charge())
        print("-" * 10)


if __name__ == "__main__":
    main()