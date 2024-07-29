import Navbar from "@/components/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  CloudDrizzle,
  DropletIcon,
  Gauge,
  GaugeIcon,
  SnowflakeIcon,
  SunriseIcon,
  SunsetIcon,
  ThermometerSnowflakeIcon,
  ThermometerSunIcon,
  View,
  WindIcon,
} from "lucide-react";
import { getAllWeather } from "../api/route";
import Image from "next/image";

export default async function WeatherRoute() {
  const data = await getAllWeather();
  const sunset = new Date(data.sys.sunset * 1000);
  const sunrise = new Date(data.sys.sunrise * 1000);
  const visibility = (data.visibility / 10).toFixed(0);
  return (
    <>
      <div className="container mx-auto flex flex-col flex-wrap items-start justify-center gap-6 p-6 sm:flex-row sm:p-8">
        <div>
          <Card className="flex-grow">
            <CardHeader className="flex flex-row items-center justify-between gap-x-5">
              <CardTitle>
                {data.name}, {data.sys.country}
              </CardTitle>
              <CardDescription className="text-xs text-muted-foreground">
                Updated: {new Date(data.dt * 1000).toLocaleString()}
              </CardDescription>
            </CardHeader>
            <Separator />
            <CardHeader className="space-y-0 pb-2">
              <CardTitle className="flex flex-col items-center pt-2 gap-2">
                <div className="flex items-center gap-2">
                  <Image
                    alt="sun"
                    src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                    width={100}
                    height={100}
                  />
                  <p>
                    {data.weather[0].description.replace(
                      /\b\w/g,
                      (char: string) => char.toUpperCase()
                    )}{" "}
                    <span className="text-sm text-muted-foreground font-sans font-normal">
                      {data.main.temp_max.toFixed(0)}°C
                    </span>
                  </p>
                </div>

                <p className="text-sm text-muted-foreground text-right font-sans font-normal">
                  Feels like: {data.main.feels_like.toFixed(0)}°C
                </p>
              </CardTitle>
            </CardHeader>
            <CardContent className="py-4">
              <div className="flex flex-row justify-between gap-4">
                <p className="flex text-sm gap-1">
                  <span>
                    <SunriseIcon width={20} height={20} />
                  </span>{" "}
                  Sunrise: {sunrise.toLocaleTimeString("en-US")}
                </p>
                <p className="flex text-sm mb-4 gap-1">
                  <span>
                    <SunsetIcon width={20} height={20} />
                  </span>{" "}
                  Sunset: {sunset.toLocaleTimeString("en-US")}
                </p>
              </div>
              <div className="flex flex-row justify-between gap-4">
                <p className="flex text-sm gap-1">
                  <span>
                    <ThermometerSnowflakeIcon width={20} height={20} />
                  </span>{" "}
                  Temp-min: {data.main.temp_min.toFixed(0)}°C
                </p>
                <p className="flex text-sm mb-4 gap-1">
                  <span>
                    <ThermometerSunIcon width={20} height={20} />
                  </span>{" "}
                  Temp-max: {data.main.temp_max.toFixed(0)}°C
                </p>
              </div>
              <div className="flex flex-row justify-between gap-4">
                <p className="flex text-sm gap-1">
                  <span>
                    <WindIcon width={20} height={20} />
                  </span>{" "}
                  Wind: {data.wind.speed.toFixed(0)} km/h
                </p>
                <p className="flex text-sm mb-4 gap-1">
                  <span>
                    <GaugeIcon width={20} height={20} />
                  </span>{" "}
                  Pressure: {data.main.pressure.toFixed(0)} hPa
                </p>
              </div>
              <div className="flex flex-row justify-between gap-4">
                <p className="flex text-sm gap-1">
                  <span>
                    <DropletIcon width={20} height={20} />
                  </span>{" "}
                  Humidity: {data.main.humidity}%
                </p>
                <p className="flex text-sm mb-4 gap-1">
                  <span>
                    <View width={20} height={20} />
                  </span>{" "}
                  Visibility: {visibility} km
                </p>
              </div>
            </CardContent>
            <Separator />
            <CardFooter className="py-4">
              <CardDescription>
                Weekly weather forecast for your current location of{" "}
                <span className="font-medium text-foreground">
                  {data.name}, {data.sys.country}
                </span>
              </CardDescription>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
